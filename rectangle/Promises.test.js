import {describe, expect, test} from "@jest/globals";
let pickFruit = (user) => {
    return new Promise((resolve, reject) => {
        if (user === 'admin') {
            resolve("mango")
        } else {
            reject("chickoo")
        }
    })
}
describe("Promise", () => {
    describe("Resolve", () => {
        test("resolve should be successful", () => {
            return pickFruit("admin").then(fruit => {
                expect(fruit).toBe("mango")
            })
        })
        test("resolve should be successful with Jest shortcut", () => {
            expect(pickFruit("admin")).resolves.toBe("mango")
        })
        test("resolve should be successful with async/await", async () => {
            const fruit = await pickFruit("admin")
            expect(fruit).toBe("mango")
        })
    })
    describe("Reject", () => {
        test("should give chickoo", () => {
            expect.assertions(1)
            return pickFruit().catch(fruit => {
                expect(fruit).toBe("chickoo")
            })
        })
        test("should give chickoo with jest shortcut", () => {
            expect(pickFruit()).rejects.toBe("chickoo")
        })
        test("should give chickoo with async/await", async () => {
            try {
                await pickFruit()
            } catch (ex) {
                expect(ex).toBe('chickoo')
            }
        })
    })
})