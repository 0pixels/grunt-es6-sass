# Grunt: ES6 + Sass task

This Grunt task compiles/transpiles ES6 Javascript to ES5, while also compiling Sass to CSS.

## Getting started

1. Clone this repo: `https://github.com/0pixels/grunt-es6-sass.git`
2. Run `cd grunt-es6-sass/`
3. Run `npm install`
4. Test that everything is working with `npm run start`:
    * Grunt will watch any Sass `.scss` or JavaScript `.js` files in the `src/` directory for changes. Once it notices any changes, it will run the compilation tasks.
    * Generally, Grunt will look for a master file `main.js / main.scss` compile/transpile from. You can change this by editing `Gruntfile.js` and changing the `projectName` variable to whatever you want.

