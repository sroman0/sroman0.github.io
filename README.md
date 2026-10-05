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
- `wrangler.jsonc` - Cloudflare Workers deployment configuration

[Visit the portfolio](https://sromano-digital-portfolio.simoneromano221.workers.dev/)

## Content maintenance

Project summaries distinguish individual contributions, team outcomes, and research limitations. Keep homepage/index summaries aligned with their case studies when updating results. Navigation and core content work without JavaScript.

The homepage and project index use short descriptions and direct evidence links. Detailed contributions, results, and limitations live in the case studies. Awards and memberships are available in an expandable section.

The canonical host follows the current Workers deployment; update canonical, Open Graph, identity data, and sitemap URLs together if moving hosts. Case-study paths have been preserved.

The education timeline records graduation on 2 October 2026 and 110/110 cum laude, as supplied by Simone. The downloadable CV is a separate existing artifact and still needs its education/location wording brought into alignment.

Photos are intentionally omitted from page content and sharing metadata at Simone's request. The original image assets remain available for a future manual update.

Vesuvius's supplied source repository returned not found during this review, so the case study remains accessible without a public code link. Restore the link when the repository becomes publicly available.

## Redesign validation

Local headless Chrome checks covered the homepage, project index, all six case studies, and the 404 page at 320, 360, 390, 768, and 1440 CSS pixels in both themes. Checks included overflow, image loading, main-content visibility, keyboard skip navigation, theme persistence, sticky-header anchors, reduced motion, desktop reflow, mobile landscape, and core reading/navigation without JavaScript.

Review both themes and run the local preview after future layout changes. Validate all local links and page anchors, and check external evidence links when revising project content. The repository has no build dependencies or test runner.
