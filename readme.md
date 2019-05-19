# Tailwind CSS Background Extended Plugin

This plugin adds all of the missing background utilities to Tailwind CSS.

## Installation

Add this plugin to your project:

```bash
# Install using npm
npm install --save-dev tailwindcss-background-extended

# Install using yarn
yarn add -D tailwindcss-background-extended
```

## Notes

I will be adding support for creating classes for `background` and `background-image` soon-ish. Feel free to open an issue if you need it before I get to it.

## Usage

```js
require('tailwindcss-background-extended')(['responsive'])
```

```css
.bg-clip-border { background-clip: border-box; }
.bg-clip-padding { background-clip: padding-box; }
.bg-clip-content { background-clip: content-box; }
.bg-clip-text { background-clip: text; }

.bg-origin-border { background-origin: border-box; }
.bg-origin-padding { background-origin: padding-box; }
.bg-origin-content { background-origin: content-box; }
```
