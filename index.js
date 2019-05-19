var _ = require('lodash')
var flatten = require('flat')

module.exports = function () {
  return function ({
    addUtilities, addComponents, addBase, addVariant,
    e, prefix, theme, variants, config,
  }) {
    const pluginUtilities = {
        // '.bg': {},
        // '.bg-image': {},

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

    Object.entries(pluginUtilities).forEach(([ modifier, values ]) => {
      const variantName = _.camelCase(`background-${modifier}`)
      const utilities = flatten(
        { [`.${e(`bg-${modifier}`)}`]: values },
        { delimiter: '-', maxDepth: 2 },
      )

      addUtilities(utilities, variants(variantName, ['responsive']))
    })
  }
}
