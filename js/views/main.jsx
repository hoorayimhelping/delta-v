var react = require('react');

console.log('sup');

var canvas = document.getElementById('canvas');
canvas.width = 1200;
canvas.height = 1200;

var context = canvas.getContext('2d');
context.scale(2, 2);
context.fillStyle = "#000";
context.fillText('Hello!', 300, 300);