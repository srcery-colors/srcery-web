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
            bright: 'rgb(145, 129, 117)',
            DEFAULT: 'rgb(28, 27, 25)',
            hard: 'rgb(18, 18, 18)',
          },
          white: {
            bright: 'rgb(252, 232, 195)',
            DEFAULT: 'rgb(208, 191, 161)',
          },
          gray: {
            1: 'rgb(88, 88, 88)',
            2: 'rgb(78, 78, 78)',
            3: 'rgb(68, 68, 68)',
            4: 'rgb(58, 58, 58)',
            5: 'rgb(48, 48, 48)',
            6: 'rgb(38, 38, 38)',
          },
          red: {
            bright: 'rgb(247, 83, 65)',
            DEFAULT: 'rgb(239, 47, 39)',
          },
          orange: {
            bright: 'rgb(255, 135, 0)',
            DEFAULT: 'rgb(215, 95, 0)',
          },
          yellow: {
            bright: 'rgb(254, 208, 110)',
            DEFAULT: 'rgb(251, 184, 41)',
          },
          green: {
            bright: 'rgb(152, 188, 55)',
            DEFAULT: 'rgb(81, 159, 80)',
          },
          blue: {
            bright: 'rgb(104, 168, 228)',
            DEFAULT: 'rgb(44, 120, 191)',
          },
          cyan: {
            bright: 'rgb(83, 253, 233)',
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
