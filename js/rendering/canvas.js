var Renderer = function(context) {
    this.context = context;
};

Renderer.prototype = {
    init: function(pixel_ratio) {
        this.defaults();
        // this.context.setTransform(pixel_ratio, 0, 0, pixel_ratio, 0, 0);
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
    }
};

module.exports = Renderer;