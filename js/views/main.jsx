var react = require('react');
var CanvasRenderer = require('../canvas/renderer');

var $canvas = document.getElementById('canvas');
var renderer = new CanvasRenderer($canvas);
var $container = document.getElementById('container');

var getWidth = function() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
};

var getHeight = function() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
};

var getCanvasWidthAndHeight = function($container) {
    var border_width = parseInt(getComputedStyle($container)['border-left-width'], 10) + parseInt(getComputedStyle($container)['border-right-width'], 10);
    var border_height = parseInt(getComputedStyle($container)['border-top-width'], 10) + parseInt(getComputedStyle($container)['border-bottom-width'], 10);

    var padding_width = parseInt(getComputedStyle($container)['padding-left'], 10) + parseInt(getComputedStyle($container)['padding-right'], 10);
    var padding_height = parseInt(getComputedStyle($container)['padding-top'], 10) + parseInt(getComputedStyle($container)['padding-bottom'], 10);

    var pixel_ratio = 2;

    var total_width = border_width + padding_width;
    var total_height = border_height + padding_height;

    return { width: getWidth() - total_width, height: getHeight() - total_height };
};

var draw = function() {
    renderer.context.fillStyle = "#F00";
    renderer.context.fillText('Hello!', getWidth() / 2, getHeight() / 2);
};

var content_size = getCanvasWidthAndHeight($container);

renderer.init();
renderer.setDimensions(content_size.width, content_size.height);
draw();

window.addEventListener('resize', function(event) {
    var content_size = getCanvasWidthAndHeight($container);
    renderer.setDimensions(content_size.width, content_size.height);
    draw();
 }, false);

window.react = react;
