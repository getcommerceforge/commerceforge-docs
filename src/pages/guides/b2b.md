---
layout: ../../layouts/DocsLayout.astro
title: B2B Setup
description: Configure B2B locations, buyer context pricing, quantity rules, and quote requests.
---

# B2B Setup

CommerceForge includes a full B2B storefront layer with company location selection, buyer-context pricing, quantity rules, and volume pricing built on the Shopify B2B APIs.

**Requires Shopify Plus.**

## Prerequisites

1. Shopify Plus plan with B2B enabled.
2. At least one company created in Shopify admin with one or more locations.
3. A customer account assigned as a company contact.

## How it works

When a logged-in customer is a B2B buyer, the storefront:

1. Calls `/b2blocations` to detect the customer company and locations through the Customer Account API.
2. Auto-selects the location if there is only one.
3. Opens a location selector dialog when there are multiple locations.
4. Stores the selected `companyLocationId` in cart buyer identity.
5. Queries products with `@inContext(buyer: $buyer)` so Shopify returns B2B pricing, quantity rules, and volume pricing tiers.

## Admin setup

### Enable B2B

**Settings → Markets → B2B**

### Create a company

**Customers → Companies → Create company**

Add at least one location and assign a customer as a contact with buying permissions.

### Set B2B pricing

Assign price lists or volume pricing tiers to the company or location. CommerceForge reads them automatically via `quantityPriceBreaks`.

### Set quantity rules

Use product or variant settings to configure minimum quantities, increments, or maximum quantities. These are returned through `quantityRule`.

## Storefront behavior

| Condition | Behavior |
| --- | --- |
| Not logged in | B2C layout |
| Logged in, not a company contact | B2C layout |
| Logged in, 1 company location | B2B layout with auto-selected location |
| Logged in, multiple locations | B2B layout with location selector |

The header toggle allows buyers to switch manually between B2B and B2C layouts.

## Quote requests

`RequestQuoteDialog` is available on product and cart pages and sends quote requests to the email address configured in `PUBLIC_QUOTE_EMAIL`.

To customize the quote flow, edit:

`app/components/RequestQuoteDialog.tsx`

## Logout behavior

Logout clears `companyLocationId` from cart buyer identity automatically, so B2B pricing does not persist into an unauthenticated session.
