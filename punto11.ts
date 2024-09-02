interface Shape {
    area(): number;
}

class Circle implements Shape {
        radius: number;
        constructor(radius: number) {
            this.radius = radius;
        }
        area() {
            return Math.PI * (this.radius * this.radius);
        }
    }