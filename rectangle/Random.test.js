import { describe, test, expect } from "@jest/globals";


describe("random",()=>{
    test("filter odd numbers",()=>{
        const arr=[1,2,3,4,5,6,7,8,9,10]
        const oddNumbers=[1,3,5,7,9]
        const actual=arr.filter((element)=>element%2!=0)
        expect(actual).toStrictEqual(oddNumbers)

    })
    test("filter numbers greater than 7",()=>{
        const arr=[1,2,3,4,5,6,7,8,9,10]
        const expected=[8,9,10]
        const actual=arr.filter((element)=>element>7)
        expect(actual).toStrictEqual(expected)
    })
    test("calculate square of first 5 elements",()=>{
        const arr=[1,2,3,4,5]
        const expected=[1,4,9,16,25]
        const actual=arr.map((element)=>element*element)
        expect(actual).toStrictEqual(expected)
      })
      test("insert element in array at 2nd position",()=>{
        const arr=[1,2,3,4,5]
        arr.splice(1,0,10)
        expect(arr.length).toBe(6)
        expect(arr[1]).toBe(10)
      })

})