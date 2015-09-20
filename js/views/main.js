var react = require('react');
var CanvasRenderer = require('../rendering/canvas');

var $canvas = document.getElementById('canvas');
var renderer = new CanvasRenderer($canvas);
var $container = document.getElementById('container')

var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

var draw = function() {
    renderer.init();
    renderer.context.fillStyle = "#F00";
    renderer.context.fillText('Hello!', 300, 300);
};

renderer.scaleCanvas($container, width, height);
draw();

window.addEventListener('resize', function(event) {
    renderer.scaleCanvas($container, width, height);
    draw();
 }, false);
