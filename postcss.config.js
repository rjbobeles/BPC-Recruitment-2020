/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */

module.exports = {
  plugins: [require('postcss-import'), require('tailwindcss')('tailwind.config.js')],
}
