goog.require('goog.testing.jsunit');

goog.require('example');
goog.require('goog.dom');
goog.require('goog.dom.NodeType');

var testHtmlEscaping = function() {
  example.sayHello('<b>greeting</b>');
  var greetingEl = goog.dom.getElement('greeting');
  assertEquals('The <h1 id="greeting"> element should only have one child node',
      1, greetingEl.childNodes.length);
  assertEquals('The <h1 id="greeting"> element should only contain text',
      goog.dom.NodeType.TEXT, greetingEl.firstChild.nodeType);
};
