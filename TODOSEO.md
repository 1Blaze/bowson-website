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

<!-- CHAT GPT -->

1. The SEO review I'd carry out
   I'd split it into six areas, each with a different purpose.

1. Keyword research and competitor analysis

I'd identify exactly what potential customers search for and which competitors currently dominate those searches.

For Bowson, I'd investigate:

- Sheet metal fabrication Stoke-on-Trent
- Sheet metal fabrication Staffordshire
- CNC punching services UK
- CNC metal bending
- Metal fabrication companies
- Industrial powder coating
- Bespoke metal enclosures
- Steel workbench manufacturers
  I'd compare Bowson against at least 5–10 genuine competitors, looking at their ranking keywords, page structures, content, backlinks and local presence.

Deliverable: A prioritised keyword map showing which page should target which searches.

2. On-page SEO audit

I'd inspect every page individually:

- SEO title and meta description.
- H1, H2 and H3 structure.
- Keyword targeting and search intent.
- Content quality and depth.
- Internal linking.
- Image alt text and filenames.
- Duplicate or competing content.
- Calls to action and enquiry opportunities.
  I'd give every page a score and a list of specific improvements.

Deliverable: A page-by-page SEO improvement report.

3. Technical SEO audit

This is particularly important because you're developing the website yourself.

I'd inspect:

- Astro page rendering and crawlability.
- HTML output and semantic structure.
- Canonical URLs.
- XML sitemap.
- Robots.txt.
- Broken links and redirects.
- Structured data / Schema.org.
- Mobile responsiveness.
- Core Web Vitals.
- Image optimisation and loading.
- Duplicate URLs and indexing issues.
  I'd also check that Google can actually see all your dynamically generated service and portfolio content.

Deliverable: A technical issues list with severity and suggested fixes.

4. Local SEO

I want Bowson to become a recognised result for relevant engineering and fabrication searches around Stoke-on-Trent and Staffordshire.

I'd inspect:

- Google Business Profile.
- Business name, address and telephone consistency.
- Local directories and citations.
- Customer reviews.
- Local landing-page content.
- Local business structured data.
- Local competitors and their visibility.
  Google's local results are influenced by relevance, distance and prominence, so this needs to be approached separately from normal website SEO.
  Google Business Profile Help

Deliverable: A local SEO action plan.

5. Authority and backlink analysis

I'd investigate which websites link to your competitors and identify opportunities for Bowson to earn relevant links.

Potential opportunities include:

- Engineering and manufacturing directories.
- Local Stoke-on-Trent business organisations.
- Industry associations.
- Supplier and customer partnerships.
- Relevant trade publications.
- Genuine project features and case studies.
  Deliverable: A list of realistic backlink opportunities, prioritised by relevance and quality.

6. Ongoing SEO performance

Once the website launches, I'd want to measure what is actually happening.

I'd configure:

- Google Search Console.
- Google Analytics 4.
- Bing Webmaster Tools.
- Search performance monitoring.
- Keyword position tracking.
- Organic enquiry tracking.
  Then review which searches generate impressions, clicks and, most importantly, quotation enquiries.

Deliverable: A monthly SEO performance report and prioritised improvements.

2. Particularly important: your data-driven Astro templates
   Because you're using a reusable template populated from data objects, I'd want to inspect the actual rendered HTML of every page type.

For example, your six service pages should each have their own:
SEO field Example
URL /services/cnc-punching
SEO title CNC Punching Services | Bowson Engineering
Meta description Precision CNC turret punching of steel, stainless steel and aluminium sheet metal components. Based in Stoke-on-Trent.
H1 CNC Punching Services
Canonical Unique self-referencing URL
Schema Appropriate organisation and service information
Content Unique capabilities, specifications, applications and FAQs

I'd also make sure your template supports optional sections without creating empty headings or duplicate content.

One warning: Don't generate 30 pages just by swapping keywords in the same paragraph. Google's guidance specifically favours original, useful content demonstrating real expertise. Your actual machinery specifications, manufacturing photographs, products and capabilities are exactly the sort of information that can differentiate Bowson.
Google for Developers+1

3. The tools I'd use
   These would be my core SEO toolkit:

Google Search Console

Essential – indexing, search queries, clicks, impressions and technical issues.
Open Search Console

Google Analytics 4

Understand visitors and track quotation enquiries.
Open Google Analytics

Ahrefs

Competitor keywords, backlinks and keyword research. Paid features are available.
Visit Ahrefs

Screaming Frog SEO Spider

Crawl the entire website and identify missing titles, headings, broken links and duplicate content.
Visit Screaming Frog

PageSpeed Insights

Performance, mobile experience and Core Web Vitals.
Visit PageSpeed Insights

You don't necessarily need to pay for all of these. Search Console, Analytics, PageSpeed Insights and the free Screaming Frog allowance are a good starting point. 4. What I'd actually want you to give me when the website is finished
This is how I'd get the most comprehensive review possible.
Bowson Engineering – SEO audit checklist
Ideally, have these ready before the review.
Preparation progress
0/10

[ ] Live website URL
[ ] Full list of website URLs / sitemap.xml
[ ] Google Search Console access or exported performance data
[ ] Google Business Profile URL
[ ] List of 5–10 main competitors
[ ] All six service pages completed
[ ] Portfolio and product pages completed
[ ] Confirmed machinery specifications and materials
[ ] Real workshop and product photographs
[ ] Current Google rankings, if available

I'd then conduct the audit in stages:

1. Crawl the website and identify technical problems.
2. Research the actual search market and competitors.
3. Map keywords to every page.
4. Review and improve all website content.
5. Review local SEO and authority.
6. Produce a prioritised implementation report.
7. Recheck everything after changes.
8. What I want Bowson to rank for
   I'd separate your SEO goals into three groups.
   Priority Search examples Objective
   High Sheet metal fabrication Stoke-on-Trent, metal fabrication Staffordshire Local enquiries
   Medium CNC punching services, press brake bending, powder coating Service enquiries
   Long-term Steel workbench manufacturer, bespoke deer towers, industrial kiln components Product-specific enquiries

I'd initially concentrate on the first two groups. Product-specific searches can become a valuable additional source of enquiries as your portfolio grows.

One important point: don't measure success purely by getting Bowson to number one for a keyword. Getting ten highly relevant manufacturing enquiries is more valuable than getting thousands of visitors who aren't potential customers.
