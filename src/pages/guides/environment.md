---
layout: ../../layouts/DocsLayout.astro
title: Environment Variables
description: Required and optional environment variables for CommerceForge.
---

# Environment Variables

All variables are defined in `.env` copied from `.env.example`.

## Required

### `SESSION_SECRET`

A random secret used to sign session cookies. Use any long random string.

```bash
openssl rand -hex 32
```

### `PUBLIC_STORE_DOMAIN`

Your Shopify store domain, for example `your-store.myshopify.com`.

### `PUBLIC_STOREFRONT_API_TOKEN`

Public Storefront API access token. Find it in Shopify admin:

**Settings → Apps and sales channels → Hydrogen → Manage → Storefront API tokens**

This token is safe to expose in the browser.

### `PUBLIC_STOREFRONT_ID`

The numeric ID of your Hydrogen storefront. This is visible in the Shopify admin URL when managing the storefront, or returned by `shopify hydrogen env pull`.

### `PRIVATE_STOREFRONT_API_TOKEN`

A private server-only Storefront API token for elevated-rate requests. Recommended for production.

## Customer Account API

Required for login, order history, addresses, and subscriptions.

### `PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID`

OAuth client ID for the Customer Account API. Create it in:

**Shopify admin → Settings → Apps and sales channels → Develop apps → Customer Account API**

### `PUBLIC_CUSTOMER_ACCOUNT_API_URL`

Base URL for Customer Account API requests, for example:

`https://shopify.com/authentication/75228545071`

Use the URL up to the shop ID, without the trailing `/oauth/authorize`.

### `SHOP_ID`

Numeric Shopify shop ID. This is the number at the end of `PUBLIC_CUSTOMER_ACCOUNT_API_URL`.

Example:

```env
SHOP_ID=75228545071
```

Without it, the login flow will build an invalid authorize URL.

## Checkout

### `PUBLIC_CHECKOUT_DOMAIN`

The checkout domain for your store. Usually `your-store.myshopify.com`, or a custom checkout domain if configured.

## Optional

### `PUBLIC_QUOTE_EMAIL`

Email address that receives quote requests submitted by the Request-a-quote dialog.

## Local development with Shopify CLI

Fastest way to populate `.env`:

```bash
shopify hydrogen link
shopify hydrogen env pull
```

This writes all required variables automatically.
