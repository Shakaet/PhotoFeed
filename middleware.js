import { NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const defaultLocale = "en"
const locales = ["en", "bn"]

function getLocale(request) {
  const acceptLanguage = request.headers.get("accept-language") ?? undefined
  const headers = { 'accept-language': acceptLanguage }
  const languages = new Negotiator({ headers }).languages()
  return match(languages, locales, defaultLocale)
}

export default function middleware(request) {
  const pathname = request.nextUrl.pathname

  const pathNameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) &&
      !pathname.startsWith(`/${locale}`)
  )

  if (pathNameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
