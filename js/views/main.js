var react = require('react');
var CanvasRenderer = require('../rendering/canvas');

var $canvas = document.getElementById('canvas');
var renderer = new CanvasRenderer($canvas);
var $container = document.getElementById('container')

renderer.init();
renderer.context.fillStyle = "#F00";
renderer.context.fillText('Hello!', 300, 300);

window.addEventListener('resize', function(event) {
    renderer.scaleCanvas($container);
 }, false);
