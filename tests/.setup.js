/*
 * Package Import
 */
var path = require('path');
var babelRegister = require('babel-register');
var babelResolver = require('babel-resolver');
var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
var JSDOM = require('jsdom').JSDOM;

/*
 * Babel
 */
const app = path.join(__dirname, '..', 'app');
const resolveModuleSource = babelResolver(app);
babelRegister({ resolveModuleSource });

/*
 * Enzyme
 */
Enzyme.configure({ adapter: new Adapter() });

/*
 * Global stuff
 */
var exposedProperties = ['window', 'navigator', 'document'];
var js = new JSDOM();
global.window = js.window;
global.document = js.window.document;
global.HTMLElement = js.window.HTMLElement;
Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});
