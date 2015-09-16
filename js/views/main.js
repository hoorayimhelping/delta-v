var react = require('react');
var CanvasRenderer = require('../rendering/canvas');

console.log('sup');

var canvas = document.getElementById('canvas');
canvas.width = 1200;
canvas.height = 1200;

var context = canvas.getContext('2d');
context.scale(2, 2);

var renderer = new CanvasRenderer(context);
renderer.init();
renderer.context.fillStyle = "#F00";
renderer.context.fillText('Hello!', 300, 300);
