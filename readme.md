# Soba
Starter theme for [Kirby](http://getkirby.com) that uses Twig, PostCSS, and Browsersync.

## Get Started

Make sure you have [node & npm](https://nodejs.org/en/) installed then download all of Soba's dependencies by running:
```sh
$ npm install
```

By default Soba will try to start PHP via command line with `php -S` then proxy it with Browsersync.
```sh
# Start PHP, PostCSS watcher, and Browsersync
$ npm start
```

If this doesn't work or you'd like a different PHP environment (Vagrant, MAMP, etc.) you can adjust the [Browsersync config](https://github.com/corygibbons/soba/blob/master/browsersync.config.js) manually to fit your setup (likely just changing the proxy).

To run without starting PHP:
```sh
# Start PostCSS watcher and Browsersync
$ npm watch
```

## Customization

### CSS Syntax
Soba uses [postcss-scss](https://github.com/postcss/postcss-scss) syntax but it can easily be switched out for something else. _[See available syntaxes](https://github.com/postcss/postcss#syntaxes)_.

To switch to [sugarss](https://github.com/postcss/sugarss) for example:
```sh
$ npm install --save-dev sugarss
```
Edit parser in `postcss.config.js`:
```js
module.exports = {
  ...
  parser: 'sugarss'
  ...
}
```