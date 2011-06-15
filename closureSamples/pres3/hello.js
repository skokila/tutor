goog.provide('example');

goog.require('example.templates');
goog.require('goog.dom');

example.sayHello = function(message) {
  var data = {greeting: message, year: new Date().getFullYear()};
  var html = example.templates.welcome(data);
  goog.dom.getElement('hello').innerHTML = html;
};