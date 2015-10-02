var react = require('react');
var CanvasRenderer = require('../rendering/canvas');

var $canvas = document.getElementById('canvas');
var renderer = new CanvasRenderer($canvas);
var $container = document.getElementById('container')

var getWidth = function() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
};

var getHeight = function() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
};

var draw = function() {
    renderer.context.fillStyle = "#F00";
    renderer.context.fillText('Hello!', getWidth() / 2, getHeight() / 2);
};

renderer.init();
renderer.scaleCanvas($container, getWidth(), getHeight());
draw();

window.addEventListener('resize', function(event) {
    renderer.scaleCanvas($container, getWidth(), getHeight());
    draw();
 }, false);
