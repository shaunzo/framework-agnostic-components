
const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/angular-elements/runtime.js',
    './dist/angular-elements/polyfills.js',
    './dist/angular-elements/scripts.js',
    './dist/angular-elements/main.js'
  ];

  await fs.ensureDir('dist/elements');
  await concat(files, 'dist/elements/card-element.js');
})();
