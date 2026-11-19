# Srcery for Tailwind CSS

Srcery colors for [Tailwind CSS](https://tailwindcss.com). Class names follow
`srcery-<color>` and `srcery-<color>-<variant>`, for example `bg-srcery-black`,
`text-srcery-white-bright` and `border-srcery-gray-2`.

## Tailwind v4

Tailwind v4 defines colors as CSS variables in `@theme`. Import the variables
from [srcery-palette](https://github.com/srcery-colors/srcery-palette) and map
them to Tailwind colors:

```sh
npm i @srcery-colors/srcery-palette
```

```css
@import "tailwindcss";
@import "@srcery-colors/srcery-palette/srcery.css";

@theme inline {
  --color-srcery-black: var(--srcery-palette-black);
  --color-srcery-black-bright: var(--srcery-palette-bright-black);
  --color-srcery-black-hard: var(--srcery-palette-hard-black);
  --color-srcery-white: var(--srcery-palette-white);
  --color-srcery-white-bright: var(--srcery-palette-bright-white);
  --color-srcery-gray-1: var(--srcery-palette-gray1);
  --color-srcery-gray-2: var(--srcery-palette-gray2);
  --color-srcery-gray-3: var(--srcery-palette-gray3);
  --color-srcery-gray-4: var(--srcery-palette-gray4);
  --color-srcery-gray-5: var(--srcery-palette-gray5);
  --color-srcery-gray-6: var(--srcery-palette-gray6);
  --color-srcery-teal: var(--srcery-palette-teal);
  --color-srcery-red: var(--srcery-palette-red);
  --color-srcery-red-bright: var(--srcery-palette-bright-red);
  --color-srcery-red-dark: var(--srcery-palette-dark-red);
  --color-srcery-orange: var(--srcery-palette-orange);
  --color-srcery-orange-bright: var(--srcery-palette-bright-orange);
  --color-srcery-yellow: var(--srcery-palette-yellow);
  --color-srcery-yellow-bright: var(--srcery-palette-bright-yellow);
  --color-srcery-yellow-dark: var(--srcery-palette-dark-yellow);
  --color-srcery-green: var(--srcery-palette-green);
  --color-srcery-green-bright: var(--srcery-palette-bright-green);
  --color-srcery-green-dim: var(--srcery-palette-dim-green);
  --color-srcery-green-dark: var(--srcery-palette-dark-green);
  --color-srcery-blue: var(--srcery-palette-blue);
  --color-srcery-blue-bright: var(--srcery-palette-bright-blue);
  --color-srcery-blue-dark: var(--srcery-palette-dark-blue);
  --color-srcery-cyan: var(--srcery-palette-cyan);
  --color-srcery-cyan-bright: var(--srcery-palette-bright-cyan);
  --color-srcery-magenta: var(--srcery-palette-magenta);
  --color-srcery-magenta-bright: var(--srcery-palette-bright-magenta);
}
```

Without npm, import the palette from a CDN instead:

```css
@import "https://cdn.jsdelivr.net/npm/@srcery-colors/srcery-palette@2/srcery.css";
```

These colors are added to Tailwind's defaults. To use only Srcery colors, add
`--color-*: initial;` at the top of the `@theme` block. See
[Theme variables](https://tailwindcss.com/docs/theme) and
[Colors](https://tailwindcss.com/docs/colors).

## Tailwind v3

Copy [tailwind.config.js](./tailwind.config.js) into your config. It extends
your theme, so merge it with any existing `theme.extend.colors`.

To use the JS config with v4, load it from your CSS with
`@config "./tailwind.config.js";`.

## Example

```html
<div class="bg-srcery-black">
  <button class="text-srcery-white-bright border-srcery-gray-2">Perform Srcery</button>
</div>
```

`srcery-gray-1` is the darkest gray and `srcery-gray-6` the lightest, the same
as `gray1`–`gray6` in the palette.
