var _ = require('lodash')
var flatten = require('flat')

module.exports = function () {
  return function ({
    addUtilities, addComponents, addBase, addVariant,
    e, prefix, theme, variants, config,
  }) {
    const buildObjectFromTheme = themeKey => {
      const buildObject = ([ modifier, value ]) => [ modifier, { [themeKey]: value } ]
      const themeEntries = Object.entries(theme(themeKey, {})).map(entry => buildObject(entry))
      return _.fromPairs(themeEntries)
    }

    const pluginUtilities = {
        image: buildObjectFromTheme('backgroundImage'),
        clip: {
          border: { backgroundClip: 'border-box' },
          padding: { backgroundClip: 'padding-box' },
          content: { backgroundClip: 'content-box' },
          text: { backgroundClip: 'text' },
        },
        origin: {
          border: { backgroundOrigin: 'border-box' },
          padding: { backgroundOrigin: 'padding-box' },
          content: { backgroundOrigin: 'content-box' },
        },
    }

    Object.entries(pluginUtilities)
      .filter(([ modifier, values ]) => !_.isEmpty(values))
      .forEach(([ modifier, values ]) => {
        const variantName = Object.keys(Object.entries(values)[0][1])[0]
        const utilities = flatten(
          { [`.${e(`bg-${modifier}`)}`]: values },
          { delimiter: '-', maxDepth: 2 },
        )

        addUtilities(utilities, variants(variantName, ['responsive']))
      })
  }
}
