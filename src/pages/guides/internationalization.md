---
layout: ../../layouts/DocsLayout.astro
title: Internationalization
description: Configure locales, RTL support, and Shopify Markets routing in CommerceForge.
---

# Internationalization

CommerceForge ships with localized storefront support, Shopify Markets path-prefix routing, and RTL support for Arabic and other RTL languages.

## Supported locales

The current storefront release ships with 27 locale files in `app/locales/`.

Examples include:

- English
- Italian
- French
- German
- Spanish
- Portuguese
- Dutch
- Swedish
- Danish
- Norwegian
- Finnish
- Polish
- Turkish
- Japanese
- Chinese
- Korean
- Arabic

## Configuration

`SUPPORTED_LOCALES` in `app/lib/i18n.ts` is the fallback locale list.

Use it for:

- fallback locales in the selector
- validated path prefixes

Translations still live in `app/locales/*.json`, while the live locale list
shown in the storefront is usually built from Shopify Markets.

Example:

```ts
export const SUPPORTED_LOCALES = [
  {language: 'EN', country: 'US', pathPrefix: '/'},
  {language: 'IT', country: 'IT', pathPrefix: '/IT-IT'},
];
```

So if you change `SUPPORTED_LOCALES`, you are not automatically changing every
locale available in the storefront. You are mainly changing the fallback list
and the prefixes recognized by `localeMatchesPrefix()`.

## Translation files

Strings live in `app/locales/*.json`.

Use translations inside components with:

```tsx
import {useTranslation} from '~/lib/translations';

function MyComponent() {
  const t = useTranslation();
  return <p>{t.addToCart}</p>;
}
```

### Adding a new key

1. Add the key to `app/locales/en.json`.
2. Add the same key to every other locale file.
3. TypeScript will fail if any locale is missing the key.

### Parameterized strings

Use placeholders like:

```json
{"itemCount": "{count} items"}
```

Then replace them in code.

## Adding a new locale

Adding a new locale usually means updating both the storefront code and Shopify.

1. Create `app/locales/<language>.json` using `en.json` as the reference.
2. Add the same keys used by `en.json`.
3. Enable the matching language/country combination in Shopify Markets so it
   appears in `LOCALIZATION_QUERY`.
4. If you need a static fallback or a custom validated prefix, also add the
   locale to `SUPPORTED_LOCALES` in `app/lib/i18n.ts`.

That last step is optional in some cases, but it is still useful when you want
the locale to be recognized by the fallback selector and by prefix validation.
If you do use `SUPPORTED_LOCALES`, keep it intentionally curated and consistent
with the fallback experience you want to expose.

## RTL support

RTL is detected automatically for RTL language codes.

When active:

- `<html dir="rtl">` is set server-side
- Radix UI components flip through `DirectionProvider`
- Layout uses logical spacing utilities throughout

To add another RTL language, extend the RTL language list in `app/root.tsx`.

## Shopify Markets

Each locale maps to a Shopify Market. CommerceForge uses the request prefix and
Shopify localization data to resolve the active market and passes it to
Storefront API requests for localized pricing, currency, and content.

Important detail:

- `getLocaleFromRequest()` accepts locale-like prefixes from the request URL
- `localeMatchesPrefix()` validates prefixes against `SUPPORTED_LOCALES`
- `selectedLocale` is exposed by the root loader and consumed client-side by
  helpers like `useSelectedLocale()` and `useTranslation()`
