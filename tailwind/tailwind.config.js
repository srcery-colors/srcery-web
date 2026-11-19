/**
 * Example configuration.
 *
 * Formats:
 *
 * - srcery-black
 * - srcery-black-hard
 * - srcery-white-bright
 * - srcery-gray-2
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        srcery: {
          black: {
            bright: 'rgb(145, 126, 107)',
            DEFAULT: 'rgb(18, 17, 16)',
            hard: 'rgb(14, 13, 12)',
          },
          white: {
            bright: 'rgb(252, 232, 195)',
            DEFAULT: 'rgb(197, 176, 136)',
          },
          gray: {
            1: 'rgb(28, 27, 25)',
            2: 'rgb(38, 37, 34)',
            3: 'rgb(49, 47, 44)',
            4: 'rgb(59, 57, 53)',
            5: 'rgb(69, 67, 62)',
            6: 'rgb(80, 77, 71)',
          },
          teal: {
            DEFAULT: 'rgb(0, 128, 128)',
          },
          red: {
            bright: 'rgb(247, 83, 65)',
            DEFAULT: 'rgb(239, 47, 39)',
            dark: 'rgb(79, 35, 33)',
          },
          orange: {
            bright: 'rgb(255, 135, 0)',
            DEFAULT: 'rgb(255, 95, 0)',
          },
          yellow: {
            bright: 'rgb(254, 208, 110)',
            DEFAULT: 'rgb(251, 184, 41)',
            dark: 'rgb(67, 53, 25)',
          },
          green: {
            bright: 'rgb(152, 188, 55)',
            DEFAULT: 'rgb(81, 159, 80)',
            dim: 'rgb(46, 92, 46)',
            dark: 'rgb(41, 66, 41)',
          },
          blue: {
            bright: 'rgb(104, 168, 228)',
            DEFAULT: 'rgb(44, 120, 191)',
            dark: 'rgb(30, 81, 129)',
          },
          cyan: {
            bright: 'rgb(43, 228, 208)',
            DEFAULT: 'rgb(10, 174, 179)',
          },
          magenta: {
            bright: 'rgb(255, 92, 143)',
            DEFAULT: 'rgb(224, 44, 109)',
          },
        },
      },
    },
  },
}
