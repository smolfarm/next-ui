# smol next ui

Shared Next React components used in smol farm projects to standardize various things. Components range from simple to complex and are designed to work with Next.js. This helps create a unified style language that helps aid UX across the smol farm ecosystem.

Be sure to add the CSS in example.css but matched to your color scheme. Everything else is handled with Tailwind.

## Setup

Add the CSS in example.css customized for the color palette of the site.

Add this to `content` in tailwind.config.ts to ensure Tailwind classes are properly picked up:

```
"./node_modules/@smolfarm/next-ui/**/*.{js,ts,jsx,tsx,mdx}"
```

## Tech

-   TypeScript - strong typing for easier debugging
-   React - each component is a React component
-   Tailwind - everything except accent styling is handled with Tailwind classes for simplicity
