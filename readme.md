# Tailwind CSS Background Extended Plugin

This plugin adds all of the missing background utilities to Tailwind CSS.

## Installation

Add this plugin to your project:

```bash
# Install using pnpm
pnpm install --save-dev tailwindcss-background-extended

# Install using npm
npm install --save-dev tailwindcss-background-extended

# Install using yarn
yarn add -D tailwindcss-background-extended
```

## Usage

```js
// tailwind.config.js
{
  theme: {
    backgroundImage: { // defaults to {}
      tailwindcss: "url('https://avatars0.githubusercontent.com/u/30317862')",
    },
  },

  variants: { // all the following default to ['responsive']
    backgroundImage: ['responsive'],
    backgroundClip: ['responsive'],
    backgroundOrigin: ['responsive'],
  },

  plugins: [
    require('tailwindcss-background-extended'), // no options to configure
  ],
}
```

```css
.bg-image-tailwindcss { background-image: url('https://avatars0.githubusercontent.com/u/30317862'); }

.bg-clip-border { background-clip: border-box; }
.bg-clip-padding { background-clip: padding-box; }
.bg-clip-content { background-clip: content-box; }
.bg-clip-text { background-clip: text; }

.bg-origin-border { background-origin: border-box; }
.bg-origin-padding { background-origin: padding-box; }
.bg-origin-content { background-origin: content-box; }
```
