# Tailwind CSS Fade Plugin

An open sourced plugin for Tailwind CSS that adds utilities for creating fading effects on elements without using an overlay.

## Installation

```bash
npm install @eioluseyi/tailwind-fade
```

```bash
yarn install @eioluseyi/tailwind-fade
```

## Usage

Add the plugin to your `tailwind.config.js` file:

```javascript
module.exports = {
  // ...
  plugins: [
    require("@eioluseyi/tailwind-fade"),
    // ...
  ],
};
```

Then use the utilities in your HTML:

```html
<div class="fade-x-4 bg-blue-500 p-4 text-white">
  <p>This text fades on both sides</p>
</div>
```

This will create a div with a blue background that fades on both sides. The `fade-x-4` class applies a horizontal fade with a strength of 4 (which is typically `16px`/`1rem`).

#### Fade Directions

The following directions are available:

- `fade-x-`
- `fade-y-`
- `fade-t-`
- `fade-b-`
- `fade-l-`
- `fade-r-`

## Want to know the story behind this plugin?

Read my journey of creating the `tailwind-fade` plugin [here ↗](https://dev.to/eioluseyi/creating-a-tailwind-css-fade-plugin-my-journey-20ij).

## Contributing

Contributions are highly welcome! Please see the [Contributing Guide](https://github.com/eioluseyi/tailwind-fade#contributing) for more details on how you can contribute to this project.

![NPM Version](https://img.shields.io/npm/v/@eioluseyi/tailwind-fade)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/eioluseyi/tailwind-fade/issues)

## Keywords

tailwindcss, tailwind, css, plugin, fade, fading, mask, mask-image, gradient, linear-gradient, utility, utilities, classes, styling, ui, ux, web-development, frontend, customization, effect, visual-effect, opacity, transparency, vignette, edge-fading, content-fading, text-fade, image-fade, background-fade, element-fade, fade-in, fade-out, horizontal-fade, vertical-fade, directional-fade, custom-fade, dynamic-fade, adaptive-fade, responsive-fade, css-mask, webkit-mask, mask-property, css-effects, visual-design, web-design, css-utility, tailwind-extension, tailwind-addon, utility-first, atomic-css, composable, modular, flexible, customizable, configurable, npm-package
