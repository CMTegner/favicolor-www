var on = require('component-delegate').bind;
var favicolor = require('favicolor');

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

on(colorContainer, '[data-role=color]', 'click', function(event) {
    selectColor(event.target);
});

selectColor(colorContainer.children[4]);