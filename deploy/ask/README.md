# Ask the site: the answer model

`/ask` searches the site in the visitor's browser and works on its own. When the Mac mini is on, the site also asks
a free model for a one or two sentence answer:

```
browser ──> berkay.se/api/ask (Vercel) ──> ask-api.berkay.se (Cloudflare Tunnel) ──> OmniRoute on the Mac mini ──> Groq / OpenRouter free
```

- The route (`app/api/ask/route.ts`) holds the OmniRoute key, so it never reaches the browser. It allows 30 answers
  per IP an hour and 500K tokens a day (what the free tiers give), takes questions up to 200 characters and asks for at most 400 tokens (some free models think first). It
  sends the model only the excerpts the search picked, from what the site already shows, and never the thesis
  benchmark data.
- `GET /api/ask` says whether the gateway answers. When the Mac or the tunnel is off, Cloudflare answers 502 or
  530 and the page switches to search only within a minute.
- OmniRoute serves its dashboard on port 20128 and only the OpenAI-style `/v1` API on 20129. The tunnel points at
  20129, so the dashboard stays on the Mac.
- Only providers with a real free tier, and no payment method anywhere, so nothing can bill. None of OmniRoute's
  stealth or fingerprint features, and no provider its dashboard marks "avoid".

## Setup (on the Mac mini)

### 1. Start OmniRoute

```bash
cd deploy/ask
cp .env.example .env
sed -i '' "s|^JWT_SECRET=.*|JWT_SECRET=$(openssl rand -base64 48)|; s|^API_KEY_SECRET=.*|API_KEY_SECRET=$(openssl rand -hex 32)|; s|^STORAGE_ENCRYPTION_KEY=.*|STORAGE_ENCRYPTION_KEY=$(openssl rand -hex 32)|; s|^INITIAL_PASSWORD=.*|INITIAL_PASSWORD=$(openssl rand -base64 16)|" .env
docker compose up -d
grep INITIAL_PASSWORD .env
```

Open http://localhost:20128, sign in with that password and change it (Settings → Security). Back up `.env`
somewhere safe: `STORAGE_ENCRYPTION_KEY` decrypts the provider keys.

### 2. Free provider keys

Make each without adding a card, then add it in the dashboard under Providers → + Add Provider:

| Provider | Key | Note |
|---|---|---|
| Groq | https://console.groq.com/keys | Free plan, daily limits per model. Enough on its own. |
| OpenRouter | https://openrouter.ai/settings/keys | Never buy credits. Use only model ids ending in `:free`; without credits it allows 50 requests a day. |
| Gemini (optional) | https://aistudio.google.com/apikey | A Google Cloud project with **no billing account**, so only the free tier exists. Free-tier prompts may be used by Google; the questions are about public pages. |

Not these: the keyless OpenCode provider (OmniRoute marks it "avoid": its terms allow only your own use, and it
refuses requests that do not come from the OpenCode app), Cerebras (a one-time credit, not a free tier), and the
Codex/ChatGPT providers (a personal subscription serving the public).

### 3. A key for the website

Dashboard → API Manager → create one called `berkay-se` (names allow no dots). Check it works and see the model
ids:

```bash
curl -s http://localhost:20129/v1/models -H "Authorization: Bearer <the key>" | grep -o '"id":"groq/[^"]*"'
```

The site tries the models in `ASK_MODEL` in order (step 6), so no combo is needed. Today's order:
`groq/openai/gpt-oss-120b`, `groq/qwen/qwen3.8-27b`, `openrouter/nvidia/nemotron-3-super-120b-a12b:free`.

### 4. The tunnel

Cloudflare dashboard → Zero Trust → Networks → Tunnels.

- **The Mac already runs cloudflared:** add a public hostname to that tunnel, `ask-api.berkay.se` →
  `http://localhost:20129`. If the tunnel runs from `~/.cloudflared/config.yml` (it does not show up as
  dashboard-managed), add the rule above the final `http_status:404` line instead, then
  `cloudflared tunnel route dns <tunnel> ask-api.berkay.se` and restart the cloudflared service.
- **Otherwise:** create a tunnel (connector: Docker), put its token in `.env` as `TUNNEL_TOKEN`, run
  `docker compose --profile tunnel up -d`, and add the public hostname `ask-api.berkay.se` →
  `http://ask-omniroute:20129`.

### 5. Lock the hostname to the website (recommended)

So that only Vercel can reach the Mac, not anyone who finds the hostname:

1. Zero Trust → Access → Service credentials → Service Tokens → create `portfolio-ask`. Copy the Client ID and
   Client Secret.
2. Zero Trust → Access → Applications → Add → Self-hosted, domain `ask-api.berkay.se`, one policy with action
   **Service Auth** that includes the `portfolio-ask` token.

And a hard cap in front of the Mac: berkay.se → Security → WAF → Rate limiting rules → hostname equals
`ask-api.berkay.se`, 30 requests per 10 seconds, block. (The free plan has one rule.)

### 6. Vercel

Project `portfolio-new` → Settings → Environment Variables, for Production and Preview:

| Name | Value |
|---|---|
| `ASK_GATEWAY_URL` | `https://ask-api.berkay.se` |
| `ASK_GATEWAY_KEY` | the OmniRoute key from step 3 |
| `ASK_MODEL` | the model ids from step 3, comma separated, in order |
| `ASK_ACCESS_ID` | only with step 5: the service token's Client ID |
| `ASK_ACCESS_SECRET` | only with step 5: the service token's Client Secret |

Redeploy, then check `curl https://berkay.se/api/ask` says `{"up":true}`. Stop the containers and within a
minute it says `{"up":false}` and the page shows "search only".

Without these variables the site runs search only, which is also how `bun dev` behaves.

## Upkeep

To update OmniRoute, change the image tag in `docker-compose.yml`, then `docker compose pull && docker compose up -d`.
The database (providers, combo, keys) lives in `deploy/ask/data/`.
