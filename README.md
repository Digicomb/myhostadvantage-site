# myhostadvantage.com

Marketing site for MyHostAdvantage, managed WordPress hosting for small businesses. Built with Astro and published to GitHub Pages.

| Command           | Action                                  |
| :---------------- | :-------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Dev server at `localhost:4321`          |
| `npm run build`   | Build to `./dist/`                      |

- Content: `src/pages/index.astro` (features, steps and FAQs are arrays at the top).
- Plan and prices: `src/plans.ts`, shared by the pricing card and the sign-up form.
- Sign-up: `src/components/SignupForm.astro` posts to the `mha-create-checkout` Supabase Edge Function, which starts Stripe Checkout. `SIGNUPS_OPEN` in `src/config.ts` switches between the form and an "opening soon" notice.
- `src/pages/welcome/` is the post-checkout page; `src/pages/login-details/` shows a new customer's login once.
- Hero art: `src/components/Canyon.astro`. Icons: edit `public/favicon.svg` (keep `src/assets/logo.svg` in sync), then run `node scripts/make-icons.cjs`.
- Deploy: `.github/workflows/deploy.yml` publishes to GitHub Pages on push to `main`.

The Edge Functions live in a separate private repository.
