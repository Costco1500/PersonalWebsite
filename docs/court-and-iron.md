# Court & Iron

## Editing the content

- `data/interests.ts`: tennis and weightlifting titles, summaries, descriptions, details, and goals. Empty `details` and `goals` arrays are hidden. Only add personal information Alexander has confirmed.
- `barbellConfig` in that same file: illustration-only bar weight, plate weight, maximum matching pairs, and units. These numbers do not represent personal records.
- `data/portfolio.ts`: existing research, experience, projects, publications, education, and skills. Project filter categories are derived automatically from the project data.
- `app/globals.css`: palette, editorial typography, illustration placement, and responsive layouts.

## Interactions

The labeled hero controls open short interest panels or navigate to Projects. In the Interests section, Start rally focuses the Hit ball button. Tapping it or using native Enter/Space activation sends the ball across the court. Reset ends the session and clears its count. There is no timer or keyboard listener outside that button. The barbell controls add or remove one matching pair at a time, up to the configured limit.

All illustrations are original SVG compositions. Project previews are conceptual illustrations, not screenshots of the applications. Motion respects reduced-motion preferences. No audio or continuous decorative animation is used.

## Validation

Run from the repository root:

```sh
npm run lint
npm run build
node --experimental-strip-types --test tests/portfolio.test.mjs
```

The tests validate calculation and trajectory helpers, content references, and generated production HTML. They do not replace browser interaction tests.

Browser QA remains outstanding because the browser tool rejected access to the local preview. Before publishing, check at 375px, 768px, and 1440px: all three hero controls, mobile navigation, rally start/hit/reset (including Space), both plate limits, all project filters, poster open/zoom/Escape/focus restoration, and reduced-motion behavior. No screenshot baseline or Core Web Vitals measurements were captured.
