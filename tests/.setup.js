/*
 * Package Import
 */
var babelRegister = require('babel-register');
var JSDOM = require('jsdom').JSDOM;
var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

/*
 * Babel
 */
babelRegister();

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
