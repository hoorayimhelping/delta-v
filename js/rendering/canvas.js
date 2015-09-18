var Renderer = function(canvas) {
    this.$canvas = canvas;
    this.$canvas.width = 1200;
    this.$canvas.height = 1200;
    this.$canvas.style.width = "100%";
    this.$canvas.style.height = "100%";
};

Renderer.prototype = {
    init: function(pixel_ratio) {
        this.context = this.$canvas.getContext('2d');
        this.context.scale(2, 2);

        this.defaults();
        this.context.setTransform(pixel_ratio, 0, 0, pixel_ratio, 0, 0);
    },

    render: function() {
        this.context.fillRect(0, 0, this.context.canvas.clientWidth, this.context.canvas.clientHeight);
    },

    options: function(options) {
        this.defaults();
        if (options.hasOwnProperty('lineWidth')) {
            this.context.lineWidth = options.lineWidth;
        }

        if (options.hasOwnProperty('strokeStyle')) {
            this.context.strokeStyle = options.strokeStyle;
        }
    },

    defaults: function() {
        this.context.fillStyle = "#FFF";
        this.context.strokeStyle = "#000";
        this.context.lineWidth = 5;
    },

    circle: function(x, y, radius, options) {
        this.options(options);

        this.context.beginPath();
        this.context.arc(x, y, radius, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.closePath();
    },

    line: function(start_x, start_y, end_x, end_y, options) {
        this.options(options);

        this.context.beginPath();
        this.context.moveTo(start_x, start_y);
        this.context.lineTo(
            end_x,
            end_y
        );

        this.context.stroke();
        this.context.closePath();
    },

    scaleCanvas: function($container) {
        var border_width = parseInt(getComputedStyle($container)['border-left-width'], 10) + parseInt(getComputedStyle($container)['border-right-width'], 10);

        var pixel_ratio = 2;

        this.$canvas.width = ($container.offsetWidth - border_width) * pixel_ratio;
        this.$canvas.height = ($container.offsetHeight - border_width) * pixel_ratio;

        this.$canvas.style.width = $container.offsetWidth;
        this.$canvas.style.height = $container.offsetHeight;

        // changing the canvas width or height re-initializes the canvas' state, including transforms and fill colors
        this.init(pixel_ratio);
    }
};

module.exports = Renderer;