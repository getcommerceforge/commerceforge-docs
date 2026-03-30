---
layout: ../../layouts/DocsLayout.astro
title: Installation
description: Install CommerceForge locally, configure environment variables, and start the dev server.
---

# Installation

> Use a real Shopify store as early as possible. CommerceForge is easiest to
> evaluate when products, collections, and markets already exist in the target
> store.

## Requirements

- Node.js >= 18
- A Shopify store with the [Hydrogen sales channel](https://shopify.dev/docs/custom-storefronts/hydrogen/getting-started) installed
- A Shopify storefront created from the Hydrogen channel or via API

## 1. Install dependencies

```bash
npm install
```

## 2. Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

See [Environment Variables](/guides/environment) for a description of each variable and where to find it.

## 3. Link to a Hydrogen storefront

If Shopify CLI is installed, link the project and pull variables automatically:

```bash
shopify hydrogen link
shopify hydrogen env pull
```

This populates `.env` from your storefront settings and avoids manual copy-paste.

## 4. Start the dev server

```bash
npm run dev
```

The store runs at `http://localhost:3000`.

## 5. Connect a Shopify store

The storefront reads products, collections, and content from the Shopify Storefront API. You need a real Shopify store with:

- At least one published product
- A published collection
- The Storefront API access token set in `.env`

A free Shopify development store is enough to get started.

## Next steps

- [Deploy to Oxygen](/guides/deployment)
- [B2B Setup](/guides/b2b)
- [Internationalization](/guides/internationalization)
- [Theming](/guides/theming)
