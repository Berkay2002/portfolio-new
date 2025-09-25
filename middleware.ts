import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Get hostname from request (e.g. www.example.com, example.com)
  const hostname = request.headers.get("host") || "";

  // If the hostname starts with 'www.', create a new URL without it
  if (hostname.startsWith("www.")) {
    const newUrl = new URL(request.url);
    newUrl.host = hostname.replace(/^www\./, "");

    // 301 redirect for better SEO
    return NextResponse.redirect(newUrl, 301);
  }

  return NextResponse.next();
}

// Configure middleware to run on all pages
export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /static (static files)
     * 4. /_vercel (Vercel internals)
     * 5. all files in the public folder
     */
    "/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};
