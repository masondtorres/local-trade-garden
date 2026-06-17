# Local Trade Garden

Local Trade Garden is an early access local pilot for cash-free local trades involving things people made, grew, raised, cooked, built, repaired, taught, created or earned through honest labor.

Primary canonical domain:

- https://localtradegarden.com

Redirect domains:

- https://www.localtradegarden.com
- https://localtradegarden.org
- https://www.localtradegarden.org

Public contact email:

- masondtorres@duck.com

## Local Development

```bash
npm install
npm run dev
```

Local URL:

```text
http://localhost:3000
```

## Validation Commands

Run these before a production deploy:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Form Delivery Setup

Forms submit to `POST /api/forms`.

The route is ready for Resend email delivery and intentionally refuses to show a delivered success state unless email delivery is configured.

Required Vercel environment variables:

```text
RESEND_API_KEY=your_resend_api_key
FORM_FROM_EMAIL=verified-sender@your-verified-domain.com
FORM_TO_EMAIL=masondtorres@duck.com
```

Notes:

- `FORM_FROM_EMAIL` must be a sender address verified in Resend.
- `FORM_TO_EMAIL` defaults to `masondtorres@duck.com` if omitted, but it should still be set explicitly in production.
- If these variables are missing, the forms show an error telling users to email `masondtorres@duck.com` directly.
- Do not commit `.env` files or API keys.

Local form delivery smoke test when the site is running:

```bash
curl -X POST http://localhost:3000/api/forms \
  -H "Content-Type: application/json" \
  -d "{\"formType\":\"contact\",\"fields\":{\"name\":\"Smoke Test\",\"email\":\"test@example.com\",\"message\":\"Testing form delivery.\"}}"
```

Expected result without email environment variables: HTTP `503` with the direct email fallback.

## Vercel Redeploy Steps

1. Push changes to `main`.
2. Vercel should create a production deployment automatically.
3. Add or confirm the form delivery environment variables in Vercel.
4. Redeploy after environment variables are set.
5. Confirm the deployment is ready in Vercel.
6. Visit the canonical domain with a cache-busting query string, for example:

```text
https://localtradegarden.com/?v=<commit>
```

7. Confirm that both `localtradegarden.org` variants and `www.localtradegarden.com` permanently redirect to `https://localtradegarden.com` while preserving the path.

## Smoke Test Routes

Check these routes after deployment:

```text
/
/how-it-works
/what-you-can-trade
/will-work-for-food
/safety
/local-partners
/faq
/contact
/early-access
/pricing
/terms
/privacy
/robots.txt
/sitemap.xml
```

## Legal Review Needed

These areas need review by a qualified attorney before public launch:

- Terms of Service
- Privacy Policy
- Food handling and labeling language
- Eggs, honey and lawful farm goods language
- Restricted items language
- Livestock and regulated goods language
- User responsibility and platform liability language
- Form data handling and retention practices

Local Trade Garden must not imply that it approves, inspects, guarantees, brokers or becomes a party to trades.

## Post-Launch Metrics to Track

- Early access form submissions
- Contact form submissions
- Partner interest submissions
- Visits to `/what-you-can-trade`
- Visits to `/will-work-for-food`
- Visits to `/safety`
- FAQ visits
- Form delivery failures
- Search queries that bring users to the site
- Reports or concerns related to regulated goods
