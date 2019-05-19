module.exports = function (variants) {
  return function ({ addUtilities }) {
    addUtilities(
      {
        // Background
        // Background Image

        // Background Clip
        '.bg-clip-border': { backgroundClip: 'border-box' },
        '.bg-clip-padding': { backgroundClip: 'padding-box' },
        '.bg-clip-content': { backgroundClip: 'content-box' },
        '.bg-clip-text': { backgroundClip: 'text' },

        // Background Origin
        '.bg-origin-border': { backgroundOrigin: 'border-box' },
        '.bg-origin-padding': { backgroundOrigin: 'padding-box' },
        '.bg-origin-content': { backgroundOrigin: 'content-box' },
      },
      variants
    )
  }
}
