var on = require('component-delegate').bind;
var favicolor = require('favicolor');
var prism = require('prismjs');

// Borrowed from https://github.com/Modernizr/Modernizr/blob/f526d97579d7ab42031bb2b852e8551d7b9f87e2/feature-detects/touchevents.js#L40
if (('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch)) {
    document.body.classList.add('touchevents')
}

var selectedColor;

function selectColor(element) {
    var style = window.getComputedStyle(element);
    var color = style.backgroundColor;
    favicolor(icon, color);
    fauxIcon.src = icon.href;
    element.innerHTML = '&times;';
    if (selectedColor) {
        selectedColor.innerHTML = '';
    }
    selectedColor = element;
}

var colorContainer = document.querySelector('[data-role=color-container]');
var icon = document.querySelector('[rel=icon]');
var fauxIcon = document.querySelector('[data-role=faux-icon]');
var code = document.querySelectorAll('code');

on(colorContainer, '[data-role=color]', 'click', function(event) {
    selectColor(event.target);
});

for (var i = 0; i < code.length; i++) {
    prism.highlightElement(code[i]);
}

selectColor(colorContainer.children[4]);