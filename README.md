This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Contact Form Setup

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails directly from the client-side:

1. You'll need to create an account on [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.) in the EmailJS dashboard
3. Create an email template (the form field names are: name, email, message)
4. Update the following constants in `components/sections/contact-section.tsx`:
   ```typescript
   const EMAILJS_SERVICE_ID = "your_service_id";
   const EMAILJS_TEMPLATE_ID = "your_template_id";
   const EMAILJS_PUBLIC_KEY = "your_public_key";
   ```

This approach avoids server-side email setup and works around Microsoft's restrictions on basic authentication.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
