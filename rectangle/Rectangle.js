class Rectangle {
    constructor(length, width) {
        this.length = length
        this.width = width
    }
    area = () => this.length * this.width
    perimeter = () => 2 * (this.length + this.width)
    static createSquare = (side) => new Rectangle(side, side)
}
export default Rectangle