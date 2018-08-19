module.exports = function (variants) {
  return function ({ addUtilities }) {
    addUtilities(
      {
        // Background

        // Background Attachment
        '.bg-scroll': { backgroundAttachment: 'scroll' },
        '.bg-fixed': { backgroundAttachment: 'fixed' },
        '.bg-local': { backgroundAttachment: 'local' },

        // Background Clip
        '.bg-clip-border': { backgroundClip: 'border-box' },
        '.bg-clip-padding': { backgroundClip: 'padding-box' },
        '.bg-clip-content': { backgroundClip: 'content-box' },
        '.bg-clip-text': { backgroundClip: 'text' },

        // Background Color
        // Background Image

        // Background Origin
        '.bg-origin-border': { backgroundOrigin: 'border-box' },
        '.bg-origin-padding': { backgroundOrigin: 'padding-box' },
        '.bg-origin-content': { backgroundOrigin: 'content-box' },

        // Background Position
        // Background Position X
        // Background Position Y

        // Background Repeat
        // '.bg-repeat-x': { backgroundRepeat: 'repeat-x' },
        // '.bg-repeat-y': { backgroundRepeat: 'repeat-y' },
        // '.bg-repeat': { backgroundRepeat: 'repeat' },
        '.bg-space': { backgroundRepeat: 'space' },
        '.bg-round': { backgroundRepeat: 'round' },
        // '.bg-no-repeat': { backgroundRepeat: 'no-repeat' },

        // Background Size

      },
      variants
    )
  }
}
