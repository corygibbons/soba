# Soba
Soba is a starter theme for [Kirby](http://getkirby.com) that uses Stylus, Twig, and Browsersync.

## Get Started

Make sure you have [Node.js/NPM](https://nodejs.org/en/) & [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) installed, then download all of Soba's dependencies by running:
```
$ npm install
```

You'll need to change the `proxy` option on line 12 in `gulpfile.js` to match your setup.
```js
browserSync.init({
  proxy: "so.ba"
});
```

Once that's set you can let Gulp handle the rest by running:
```
$ gulp
```