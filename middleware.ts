import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const loginUrls  = ['/login', '/dashboard/login']
  const url = new URL(request.url)

  if (loginUrls.includes(url.pathname)) {
    return NextResponse.next()
  }
  let user
  try {
    user = JSON.parse(request.cookies.get('user.data')?.value ?? '')
  } catch (error) { console.error(error) }

  if (!user) {
    return NextResponse.redirect(new URL(loginUrls[1], request.url))
  }
  if (
    user.permission == 1 && !url.pathname.startsWith('/dashboard') ||
    user.permission == 2 && url.pathname.startsWith('/dashboard')
  ) {
    return NextResponse.redirect(new URL(loginUrls[user.permission % 2], request.url))
  }
  return NextResponse.next()
}
 
export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
 
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
      has: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
 
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
      has: [{ type: 'header', key: 'x-present' }],
      missing: [{ type: 'header', key: 'x-missing', value: 'prefetch' }],
    }
  ],
}