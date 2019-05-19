const plugin = require('./index.js')
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

// const defaultConfig = require('tailwindcss/defaultConfig')
const generatePluginCss = (testConfig = {}, pluginOptions = {}) => {
  const sandboxConfig = {
    theme: { screens: { 'sm': '640px' } },
    corePlugins: false,
    plugins: [ plugin(pluginOptions) ],
  }
  const postcssPlugins =[
    tailwindcss({ ...sandboxConfig, ...testConfig }),
  ]

  return postcss(postcssPlugins)
    .process('@tailwind utilities', { from: undefined })
    .then(result => result.css)
}

expect.extend({ toMatchCss: require('jest-matcher-css') })

test('the plugin generates some utilities and responsive variants by default', () => {
  const testConfig = {}
  const expectedCss = `
    .bg-clip-border { background-clip: border-box }
    .bg-clip-padding { background-clip: padding-box }
    .bg-clip-content { background-clip: content-box }
    .bg-clip-text { background-clip: text }

    .bg-origin-border { background-origin: border-box }
    .bg-origin-padding { background-origin: padding-box }
    .bg-origin-content { background-origin: content-box }

    @media (min-width: 640px) {
      .sm\\:bg-clip-border { background-clip: border-box }
      .sm\\:bg-clip-padding { background-clip: padding-box }
      .sm\\:bg-clip-content { background-clip: content-box }
      .sm\\:bg-clip-text { background-clip: text }

      .sm\\:bg-origin-border { background-origin: border-box }
      .sm\\:bg-origin-padding { background-origin: padding-box }
      .sm\\:bg-origin-content { background-origin: content-box }
    }
  `

  return generatePluginCss(testConfig).then(css => expect(css).toMatchCss(expectedCss))
})

test('variants can be customized', () => {
  const testConfig = {
    variants: {
      backgroundClip: ['hover'],
      backgroundOrigin: ['focus'],
    },
  }
  const expectedCss = `
    .bg-clip-border { background-clip: border-box }
    .bg-clip-padding { background-clip: padding-box }
    .bg-clip-content { background-clip: content-box }
    .bg-clip-text { background-clip: text }

    .hover\\:bg-clip-border:hover { background-clip: border-box }
    .hover\\:bg-clip-padding:hover { background-clip: padding-box }
    .hover\\:bg-clip-content:hover { background-clip: content-box }
    .hover\\:bg-clip-text:hover { background-clip: text }

    .bg-origin-border { background-origin: border-box }
    .bg-origin-padding { background-origin: padding-box }
    .bg-origin-content { background-origin: content-box }

    .focus\\:bg-origin-border:focus { background-origin: border-box }
    .focus\\:bg-origin-padding:focus { background-origin: padding-box }
    .focus\\:bg-origin-content:focus { background-origin: content-box }
  `

  return generatePluginCss(testConfig).then(css => expect(css).toMatchCss(expectedCss))
})
