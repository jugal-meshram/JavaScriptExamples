import { describe, test } from "@jest/globals";


class Observable{
    constructor(observer){
        this.observer=observer
    }
    counter=0
    start(){
        setTimeout(()=>{
            this.observer.onCreate(counter++)
            start()
        },1000)

    }
    
}

class ObserverPromise{
    constructor(){
        const observable =new Observable(this)
        observable.start()
    }
    onCreate(count){
        console.log(generatedNumber(count))
    }
    
}

let generatedNumber = (number)=>{
    return new Promise((resolve,reject)=>{
        if(number%2==0){
            resolve(number)
        }else{
            reject(number)
        }
    })
}

describe("Observable",()=>{
    test("Promise",()=>{
        new ObserverPromise()
    })
})