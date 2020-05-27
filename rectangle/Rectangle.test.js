import {describe, expect, test} from "@jest/globals";
import Rectangle from './rectangle'
describe("Rectangle", () => {
    describe("Area calculations", function(){
        test("2x3 rectangle is 6", function() {
            let rectangle = new Rectangle(2, 3);
            expect(rectangle.area()).toBe(6)
        })
        test("4x3 rectangle is 12", function() {
            let rectangle = new Rectangle(4, 3);
            expect(rectangle.area()).toBe(12)
        })
    })
    describe("Perimeter calculations", function(){
        test("2x3 rectangle is 10", function() {
            let rectangle = new Rectangle(2, 3);
            expect(rectangle.perimeter()).toBe(10)
        })
    })
    describe("Square", function() {
        test("area of 2x2 square is 4", function() {
            let square = Rectangle.createSquare(2);
            expect(square.area()).toBe(4)
        })
        test("perimeter of 2x2 square is 4", function() {
            let square = Rectangle.createSquare(2);
            expect(square.perimeter()).toBe(8)
        })
    })
})