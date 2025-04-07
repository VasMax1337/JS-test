function makeCounter() {
    let count = 0

    return function(){
        count++
        console.log(count)
    }
}

const counter = makeCounter()

counter()

counter()

counter()


function createMultiplier(factor) {

    return function(a) {
        return  a * factor
    }
}

const multiplier = createMultiplier(4)

console.log(multiplier(8))