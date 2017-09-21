function ColorPicker(pen) {
    this.canvas = document.querySelector('#picker');
    this.context = this.canvas.getContext('2d');
    $('#picker').on('click', this.onColorPickerSelect.bind(this));
    this.pen = pen;

    var gradient;

    gradient = this.context.createLinearGradient(0, 0, this.canvas.width, 0);

    //  Horizontal red-> green -> blue gradientas
    gradient.addColorStop(0,    'rgb(255,   0,   0)');
    gradient.addColorStop(0.15, 'rgb(255,   0, 255)');
    gradient.addColorStop(0.32, 'rgb(0,     0, 255)');
    gradient.addColorStop(0.49, 'rgb(0,   255, 255)');
    gradient.addColorStop(0.66, 'rgb(0,   255,   0)');
    gradient.addColorStop(0.83, 'rgb(255, 255,   0)');
    gradient.addColorStop(1,    'rgb(255,   0,   0)');

    this.context.fillStyle = gradient;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);


    gradient = this.context.createLinearGradient(0, 0, 0, this.canvas.height);

    //Vertikaliai sudelioja gradianta
    gradient.addColorStop(0,   'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
    gradient.addColorStop(0.5, 'rgba(0,     0,   0, 0)');
    gradient.addColorStop(1,   'rgba(0,     0,   0, 1)');

    this.context.fillStyle = gradient;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);   
}
//Gauna location
ColorPicker.prototype.getLocation = function(event) {
    var rectangle = this.canvas.getBoundingClientRect();
    var location = {
        x: event.clientX - rectangle.left,
        y: event.clientY - rectangle.top
    }
    return location;
}
//Gauna location is location paima spalva ir priskiria piestukui
ColorPicker.prototype.onColorPickerSelect = function() {
    var location = this.getLocation(event);
    var palette = this.context.getImageData(location.x, location.y, 1, 1).data;
    this.pen.color = 'rgb(' + palette[0] + ', ' + palette[1] + ', ' + palette[2] +')';
}