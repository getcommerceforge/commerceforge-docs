---
layout: ../../layouts/DocsLayout.astro
title: Deploy to Oxygen
description: Deploy CommerceForge to Shopify Oxygen or connect it through GitHub.
---

# Deploy to Oxygen

[Shopify Oxygen](https://shopify.dev/docs/custom-storefronts/oxygen) is the recommended hosting platform for Hydrogen storefronts. It runs on Cloudflare Workers and is included with the Shopify Hydrogen channel at no extra cost.

## Option 1: Shopify CLI

### Link the project

```bash
shopify hydrogen link
```

### Build and deploy

```bash
shopify hydrogen deploy
```

Shopify CLI builds the project and pushes it to Oxygen. A preview URL is returned after a successful deploy.

### Promote to production

From Shopify admin:

**Sales channels → Hydrogen → Deployments → Promote**

## Option 2: GitHub integration

Oxygen supports automatic deployments from GitHub.

1. Push the project to a GitHub repository.
2. In Shopify admin go to **Sales channels → Hydrogen → Manage → Connect to GitHub**.
3. Select repository and branch.
4. Oxygen deploys on every push to the connected branch.

Environment variables must be configured in the Oxygen dashboard. They are not read from `.env` in production.

## Environment variables in production

Set all required variables in:

**Shopify admin → Sales channels → Hydrogen → Manage → Environment variables**

Use the same variables defined in `.env.example`.

## Option 3: Cloudflare Workers

CommerceForge builds to a standard Cloudflare Workers bundle and can be self-hosted.

```bash
npm run build
```

Then deploy the output with Wrangler.

Oxygen remains the simpler option because routing and caching are handled for you.

## Build commands

```bash
npm run build
npm run preview
```
