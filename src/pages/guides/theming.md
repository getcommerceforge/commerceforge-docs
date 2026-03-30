---
layout: ../../layouts/DocsLayout.astro
title: Theming
description: Customize tokens, colors, typography, and shadcn/ui components in CommerceForge.
---

# Theming

CommerceForge uses Tailwind CSS v4 and shadcn/ui. Design tokens are centralized so theme changes flow through the entire storefront.

## Design tokens

CSS custom properties are defined in:

`app/styles/tailwind.css`

The file contains:

- `:root` for light mode
- `.dark` for dark mode

Tailwind v4 reads these tokens directly through `@theme inline`.

## Changing colors

Edit token values in `tailwind.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
}
```

Because the UI kit uses these variables, palette changes apply globally.

## Border radius

```css
:root {
  --radius: 0.5rem;
}
```

Use lower values for sharper corners or higher values for softer, more rounded UI.

## Typography

To use a custom font:

1. Import it in `app/root.tsx`
2. Set it in `tailwind.css`

```css
:root {
  --font-sans: 'Inter', sans-serif;
}
```

## Dark mode

Dark mode is handled by `next-themes`. The current theme is stored in `localStorage` under `vite-ui-theme`.

The toggle lives in:

`app/components/ThemeToggle.tsx`

To change the default behavior, edit `ThemeProvider` in `app/root.tsx`.

## shadcn/ui components

The storefront ships with a large UI component set under:

`app/components/ui/`

To add a registry component:

```bash
npx shadcn@latest add <component-name>
```

## Custom UI primitives

CommerceForge also includes custom UI helpers on top of the registry, including:

- `button-group.tsx`
- `direction.tsx`
- `empty.tsx`
- `field.tsx`
- `input-group.tsx`
- `item.tsx`
- `kbd.tsx`
- `lightbox.tsx`
- `native-select.tsx`
- `spinner.tsx`
