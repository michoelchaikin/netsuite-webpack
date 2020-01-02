# NetSuite Webpack Build Config

This is a basic POC (proof of concept) for an experiment to build NetSuite SS2.0 scripts using Webpack / TypeScript / Babel.

## Motivation

- Ability to use virtually any npm package just by `npm install`ing and `import`ing
- Ability to use latest ECMA script features with babel transpiling including automatic polyfilling
- Type safety and convenient IntelliSense autocomplete with TypeScript and NetSuite typings (using https://www.npmjs.com/package/@hitc/netsuite-types)
- Possible performance benefits (still need to be benchmarked) due to automatic minification, single file rollup, tree shaking etc..

Obviously using the generated build artifacts in a real project would make debugging very difficult. Possible avenues for real world usage would be to somehow generate / use source maps, or alternatively a hybrid approach were only the vendor libraries are built with webpack but project code is uploaded regularly.

## Usage

- Add a script file to the `./src` directory
- Run `npm run build`
- The generated file will be output in the `./dist` directory to be uploaded to NetSuite

## Libraries Tested

The example scripts use the following libraries. If there are any other npm libraries you would you have liked to use with SuiteScript but struggled to get working, please let me know (or try yourself using this build script and if it works create a push request).

- [Moment.JS](https://momentjs.com/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [Lodash](https://lodash.com/)
- [SheetJS](https://sheetjs.com/)
- [Numeral.js](http://numeraljs.com/)

## Author

Michoel Chaikin <[micholi@gmail.com](mailto:micholi@gmail.com)>

## License

The MIT License (MIT)

Copyright (c) 2020 Michoel Chaikin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
