// Design Level

abstract class Shape {
  protected color: string;
  protected filled: boolean;

  constructor(color: string = "red", filled: boolean = true) {
    this.color = color;
    this.filled = filled;
  }

  abstract getColor(): string;

  abstract setColor(color: string): void;

  abstract isFilled(): boolean;

  abstract setIsFilled(filled: boolean): void;

  abstract getArea(): number;

  abstract getPerimeter(): number;

  abstract toString(): string;
}

// Implementation Level For Circle

class Circle extends Shape {
  private radius: number;

  constructor(color: string, filled: boolean, radius: number = 1.0) {
    super(color, filled);
    this.radius = radius;
  }

  // Override Methods

  getColor(): string {
    return this.color;
  }

  setColor(color: string): void {
    this.color = color;
  }

  isFilled(): boolean {
    return this.filled;
  }

  setIsFilled(filled: boolean): void {
    this.filled = filled;
  }

  getArea(): number {
    const pi = 3.14159;
    let area = pi * this.radius * this.radius;
    return area;
  }

  getPerimeter(): number {
    const pi = 3.14159;
    let circumference = 2 * pi * this.radius;
    return circumference;
  }

  // Belongs To Circle

  getRadius(): number {
    return this.radius;
  }

  setRadius(radius: number): void {
    this.radius = radius;
  }

  // Override Method

  toString(): string {
    return `
    Latest Color : ${this.color}
    Latest Is Filled : ${this.filled}
    Latest Radius : ${this.radius}
   `;
  }
}

// Implementation Level For Rectangle

class Rectangle extends Shape {
  protected width: number;
  protected length: number;

  constructor(
    color: string,
    filled: boolean,
    width: number = 1.0,
    length: number = 1.0
  ) {
    super(color, filled);
    this.width = width;
    this.length = length;
  }

  // Override Methods

  getColor(): string {
    return this.color;
  }

  setColor(color: string): void {
    this.color = color;
  }

  isFilled(): boolean {
    return this.filled;
  }

  setIsFilled(filled: boolean): void {
    this.filled = filled;
  }

  getArea(): number {
    let area = this.width * this.length;
    return area;
  }

  getPerimeter(): number {
    let circumference = 2 * (this.width + this.length);
    return circumference;
  }

  // Belongs To Circle

  getWidth(): number {
    return this.width;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  getLength(): number {
    return this.length;
  }

  seLength(length: number): void {
    this.length = length;
  }

  // Override Method

  toString(): string {
    return `
    Latest Color : ${this.color}
    Latest Is Filled : ${this.filled}
    Latest Width : ${this.width}
    Latest Length : ${this.length}
   `;
  }
}

// Implementation Level For Square

class Square extends Rectangle {
  private side: number;

  constructor(color: string, filled: boolean, side: number) {
    super(color, filled);
    this.side = side;
  }

  // Override Methods

  setWidth(side: number): void {
    this.width = side;
  }

  seLength(side: number): void {
    this.length = side;
  }

  getArea(): number {
    let area = this.side * this.side;
    return area;
  }

  getPerimeter(): number {
    let circumference = 4 * this.side;
    return circumference;
  }

  // Belongs To Circle

  getSide(): number {
    return this.side;
  }

  setSide(side: number): void {
    this.side = side;
  }

  // Override Method

  toString(): string {
    return `
    Latest Color : ${this.color}
    Latest Is Filled : ${this.filled}
    Latest Width : ${this.width}
    Latest Length : ${this.length}
   `;
  }
}

// Circle

let circle = new Circle("Red", true);

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

let rectangle = new Rectangle("blue", true);

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

let square = new Square("green", true, 2);

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
