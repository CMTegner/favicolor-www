var on = require('component-delegate').bind;
var favicolor = require('favicolor');
var highlight = require('highlight.js');

// Borrowed from https://github.com/Modernizr/Modernizr/blob/f526d97579d7ab42031bb2b852e8551d7b9f87e2/feature-detects/touchevents.js#L40
if (('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch)) {
    document.body.classList.add('touchevents')
}

function selectColor(element) {
    var style = window.getComputedStyle(element);
    var color = style.backgroundColor;
    favicolor(icon, color);
    fauxIcon.src = icon.href;
    for (var i = 0; i < colors.length; i++) {
        colors[i].classList.remove('active');
    }
    element.classList.add('active');
}

var colorContainer = document.querySelector('[data-role=color-container]');
var colors = colorContainer.querySelectorAll('[data-role=color]');
var icon = document.querySelector('[rel=icon]');
var fauxIcon = document.querySelector('[data-role=faux-icon]');
var code = document.querySelectorAll('code');

on(colorContainer, '[data-role=color]', 'click', function(event) {
    selectColor(event.target);
});

for (var i = 0; i < code.length; i++) {
    highlight.highlightBlock(code[i])
}

selectColor(colorContainer.children[4]);