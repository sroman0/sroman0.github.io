# simoneromano.github.io

Personal portfolio for Simone Romano: computer engineering, cybersecurity, Linux security research, digital forensics, and secure systems.

The site is deliberately dependency-free. It uses semantic HTML, custom CSS, and a small amount of vanilla JavaScript, and is deployed as static assets on Cloudflare Workers.

## Local preview

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Structure

- `index.html` - one-sentence introduction, three brief project summaries, background, and contact
- `projects.html` - complete index of six case studies and five further projects
- `case-studies/` - long-form project write-ups
- `styles.css` - design system and responsive layouts
- `script.js` - accessible theme control, preference persistence, and footer year
- `privacy.html` - browser storage, hosting, email, and external-link privacy notice
- `terms.html` - portfolio use, source-code licenses, research, and demo terms
- `wrangler.jsonc` - Cloudflare Workers deployment configuration

[Visit the portfolio](https://sromano-digital-portfolio.simoneromano221.workers.dev/)

## Content maintenance

Project summaries distinguish individual contributions, team outcomes, and research limitations. Keep homepage/index summaries aligned with their case studies when updating results. Navigation and core content work without JavaScript.

The homepage and project index use short descriptions and direct evidence links. Detailed contributions, results, and limitations live in the case studies. Awards and memberships are available in an expandable section.

The canonical host follows the current Workers deployment; update canonical, Open Graph, identity data, and sitemap URLs together if moving hosts. Case-study paths have been preserved.

The education timeline records graduation on 2 October 2026 and 110/110 cum laude, as supplied by Simone. The downloadable CV is a separate existing artifact and still needs its education/location wording brought into alignment.

Photos are intentionally omitted from page content and sharing metadata at Simone's request. The original image assets remain available for a future manual update.

The design uses Georgia headings, Arial body text, warm neutral surfaces, plain text links, and square edges. It has no icon library, external font requests, gradients, shadows, rounded components, decorative animation, or colored callout stripes. Case-study results are presented as rows. Static page content is available immediately without a loading screen.

Privacy and terms pages describe the current portfolio, including the local `theme` preference and external hosting/project links. Keep them aligned with actual data handling when adding forms, analytics, embeds, or other services. These pages do not claim legal certification.

Vesuvius's supplied source repository returned not found during this review, so the case study remains accessible without a public code link. Restore the link when the repository becomes publicly available.

## Redesign validation

The October 2026 redesign passed 184 local headless Chrome checks across eleven pages, including privacy and terms, at 320, 390, 768, and 1440 CSS pixels in both themes. Checks covered overflow, typography, headings, browser errors, keyboard skip navigation, text theme controls, preference persistence, and core reading without JavaScript. A source check validated 149 local link/asset references and sitemap targets.

Review both themes and run the local preview after future layout changes. Validate all local links and page anchors, and check external evidence links when revising project content. The repository has no build dependencies or test runner.
