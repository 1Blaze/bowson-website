<!-- TODO SEO -->

**Short answer:** I've reordered the plan now that I know the site isn't live yet. The content and data work moves to the front, because it's the biggest gap and everything else depends on it. Performance testing goes in Step 5, because it needs a public URL. Your Astro version (7.1) is well past 5.10, so the `image: { layout: 'constrained' }` config is available to you.

## Step 1: Content and data (the big job, in priority order)

**Order of the 23 pages**

1. **Six service pages:** CNC punching, laser cutting, metal forming, welding, powder coating, 3D CAD. These are your highest-intent searches, so write them first.
2. **Six sector pages:** manufacturing, agriculture and estate, ceramics and pottery, material handling and storage, safety and access, vehicle and campervan. Many of these have niche, low-competition terms (deer towers, kiln hoods, seatbeds).
3. **Eleven project pages:** worst placeholder state ("SEO TITLE", empty descriptions), but the slowest to write because each needs customer details and permission.

**For each page, write:**

- [ ] Title (keyword-first, under 60 characters), meta description, H1
- [ ] Intro and body copy, using only claims you can verify
- [ ] Image, alt text and a clear call to action
- [ ] Links to related services, sectors and projects

**Start now, in parallel**

- [ ] Ask each customer behind a project for permission, and ask how to describe them.
- [ ] Gather the facts for each project: what you made, quantity, material, finish, and the problem it solved.
- [ ] Track the review requests you've sent, and add real testimonials as they arrive.

**Other content to check**

- [ ] Featured work text and alts, and the About timeline.
- [ ] Final products list.
- [ ] Home, About and Contact copy against the same rules.
- [ ] Decide your "Stoke-on-Trent" approach for titles.

## Step 2: Before launch (technical)

- [ ] **Build guard** in `Layout.astro`, so no page can ship with an empty or placeholder title.
- [ ] **Hero images:** `priority`, and remove `<Reveal>` from the home and About heroes.
- [ ] **All other images:** `widths` and `sizes`, or the `layout` config, then check the Network tab.
- [ ] **404 page:** helpful links, and `hideCanonical`.
- [ ] **Canonicals and sitemap:** rebuild, and check everything uses `www`.
- [ ] **`LocalBusiness` JSON-LD** on the home and contact pages.
- [ ] **Trailing slashes:** pick one, and keep it consistent.

## Step 3: Launch day (server)

- [ ] Redirects: `http://` and non-www both go to `https://www.bowson.co.uk/`, tested with `curl -I`.
- [ ] Valid certificate, with automatic renewal.
- [ ] A genuine 404 status for missing pages.
- [ ] Check the sitemap loads, and that `robots.txt` is live.

## Step 4: After launch

- [ ] Verify Google Search Console and submit the sitemap.
- [ ] Track quote submissions and phone clicks. If you add analytics, add a cookie banner and update the privacy policy.
- [ ] Claim and complete your Google Business Profile, with name, address and phone identical everywhere.

## Step 5: Performance (needs a public URL)

- [ ] Run PageSpeed Insights on the live site, mobile first, on the home page and one page of each type.
- [ ] Use Lighthouse on a production preview in the meantime. `localhost` timings aren't meaningful.
- [ ] Fix, in order: hero and image sizes, fonts (self-host, fewer weights, `font-display: swap`), map and video embeds, server compression and caching.
- [ ] Aim for LCP under 2.5s, CLS under 0.1 and INP under 200ms. Don't chase a score of 100.

## Step 6: Ongoing and off-page

- [ ] Directory listings with identical details.
- [ ] Links from customers and suppliers.
- [ ] Add new projects and reviews as you get them, and update the timeline when the new punch arrives.

## Why this order

- **Content first.** You can't launch with 23 placeholder pages, and the build guard would stop you anyway.
- **Performance after launch.** Testing needs a public address, and you'll be changing the pages while you write.

To start Step 1, I'd begin with the six service pages. For each one, what materials, thicknesses and sizes can you state with confidence? Start with CNC punching.
