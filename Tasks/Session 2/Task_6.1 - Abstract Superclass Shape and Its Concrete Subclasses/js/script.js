// Design Level
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        if (color === void 0) { color = "red"; }
        if (filled === void 0) { filled = true; }
        this.color = color;
        this.filled = filled;
    }
    return Shape;
}());
// Implementation Level For Circle
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, filled, radius) {
        if (radius === void 0) { radius = 1.0; }
        var _this = _super.call(this, color, filled) || this;
        _this.radius = radius;
        return _this;
    }
    // Override Methods
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.isFilled = function () {
        return this.filled;
    };
    Circle.prototype.setIsFilled = function (filled) {
        this.filled = filled;
    };
    Circle.prototype.getArea = function () {
        var pi = 3.14159;
        var area = pi * this.radius * this.radius;
        return area;
    };
    Circle.prototype.getPerimeter = function () {
        var pi = 3.14159;
        var circumference = 2 * pi * this.radius;
        return circumference;
    };
    // Belongs To Circle
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    // Override Method
    Circle.prototype.toString = function () {
        return "\n    Latest Color : ".concat(this.color, "\n    Latest Is Filled : ").concat(this.filled, "\n    Latest Radius : ").concat(this.radius, "\n   ");
    };
    return Circle;
}(Shape));
// Implementation Level For Rectangle
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, filled, width, length) {
        if (width === void 0) { width = 1.0; }
        if (length === void 0) { length = 1.0; }
        var _this = _super.call(this, color, filled) || this;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    // Override Methods
    Rectangle.prototype.getColor = function () {
        return this.color;
    };
    Rectangle.prototype.setColor = function (color) {
        this.color = color;
    };
    Rectangle.prototype.isFilled = function () {
        return this.filled;
    };
    Rectangle.prototype.setIsFilled = function (filled) {
        this.filled = filled;
    };
    Rectangle.prototype.getArea = function () {
        var area = this.width * this.length;
        return area;
    };
    Rectangle.prototype.getPerimeter = function () {
        var circumference = 2 * (this.width + this.length);
        return circumference;
    };
    // Belongs To Circle
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    Rectangle.prototype.getLength = function () {
        return this.length;
    };
    Rectangle.prototype.seLength = function (length) {
        this.length = length;
    };
    // Override Method
    Rectangle.prototype.toString = function () {
        return "\n    Latest Color : ".concat(this.color, "\n    Latest Is Filled : ").concat(this.filled, "\n    Latest Width : ").concat(this.width, "\n    Latest Length : ").concat(this.length, "\n   ");
    };
    return Rectangle;
}(Shape));
// Implementation Level For Square
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, filled, side) {
        var _this = _super.call(this, color, filled) || this;
        _this.side = side;
        return _this;
    }
    // Override Methods
    Square.prototype.setWidth = function (side) {
        this.width = side;
    };
    Square.prototype.seLength = function (side) {
        this.length = side;
    };
    Square.prototype.getArea = function () {
        var area = this.side * this.side;
        return area;
    };
    Square.prototype.getPerimeter = function () {
        var circumference = 4 * this.side;
        return circumference;
    };
    // Belongs To Circle
    Square.prototype.getSide = function () {
        return this.side;
    };
    Square.prototype.setSide = function (side) {
        this.side = side;
    };
    // Override Method
    Square.prototype.toString = function () {
        return "\n    Latest Color : ".concat(this.color, "\n    Latest Is Filled : ").concat(this.filled, "\n    Latest Width : ").concat(this.width, "\n    Latest Length : ").concat(this.length, "\n   ");
    };
    return Square;
}(Rectangle));
// Circle
var circle = new Circle("Red", true);
// Output For Circle
console.log("Circle Output");
console.log("===============");
console.log("Initial Radius ==> ", circle.getRadius());
console.log("Color ==> ", circle.getColor());
console.log("Is Filled ==> ", circle.isFilled());
// Set Radius
circle.setRadius(5);
// Output
console.log("Area ==> ", circle.getArea());
console.log("Perimeter ==> ", circle.getPerimeter());
console.log("all data as string after new setting ==> ", circle.toString());
// Rectangle
var rectangle = new Rectangle("blue", true);
// Output For Rectangle
console.log("Rectangle Output");
console.log("===============");
console.log("Color ==> ", rectangle.getColor());
console.log("Is Filled ==> ", rectangle.isFilled());
console.log("Width ==> ", rectangle.getWidth());
// Set Width For Rectangle
rectangle.setWidth(15);
// Output
console.log("Length ==> ", rectangle.getLength());
// Set Length For Rectangle
rectangle.seLength(5);
// Output
console.log("Area ==> ", rectangle.getArea());
console.log("Perimeter ==> ", rectangle.getPerimeter());
console.log("all data as string after new setting ==> ", rectangle.toString());
// Square
var square = new Square("green", true, 2);
console.log("Square Output");
console.log("===============");
console.log("Color ==> ", square.getColor());
console.log("Is Filled ==> ", square.isFilled());
console.log("Side ==> ", square.getSide());
// Set Side For Square
square.setSide(5);
// Set Width For Square
square.setWidth(7);
// Set Length For Square
square.seLength(3);
// Output
console.log("Area ==> ", square.getArea());
console.log("Perimeter ==> ", square.getPerimeter());
console.log("all data as string after new setting ==> ", square.toString());
