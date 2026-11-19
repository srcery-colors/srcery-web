# Srcery Palettes

This folder contains prefilled color palettes for various languages.

## Implementations

* CSS
* EDN
* JavaScript
* JSON

## CSS variables

CSS variables come from
[srcery-palette](https://github.com/srcery-colors/srcery-palette). Install
`@srcery-colors/srcery-palette` and import `srcery.css`, or use the CDN:

```css
@import "https://cdn.jsdelivr.net/npm/@srcery-colors/srcery-palette@2/srcery.css";
```

The variables are named `--srcery-palette-<name>`, for example
`--srcery-palette-red` and `--srcery-palette-gray1`. The old
`--srcery-xgray1`–`6` are now `--srcery-palette-gray1`–`6`. The
`--srcery-xgray7`–`12` grays aren't palette colors and have no replacement.
