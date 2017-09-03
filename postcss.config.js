module.exports = {
  // https://github.com/postcss/postcss-scss
  parser: 'postcss-scss',
  map: false,
  plugins: [
    // https://github.com/TrySound/postcss-easy-import
    require('postcss-easy-import')(),
    // https://github.com/postcss/postcss-simple-vars
    require('postcss-simple-vars')(),
    // http://cssnext.io
    require('postcss-cssnext')(),
  ]
};