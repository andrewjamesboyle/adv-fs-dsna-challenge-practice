function changeEnough(coins, amount) {
    
    let counter = 0

    for (let i = 0; i < coins.length; i++ ) {
        if (i === 0) {
            counter += coins[i] * 25
        } else if (i === 1) {
            counter += coins[i] * 10
        } else if (i === 2) {
            counter += coins[i] * 5
        } else if (i === 3) {
            counter += coins[i]
        }
    }
    
    return counter >= amount * 100

}


function changeEnoughReduce(coins, amount) {
    
    const total = coins.reduce((acc, currentValue, currentIndex) => {
        
        if (currentIndex === 0) {
            acc += currentValue * 25
        } else if (currentIndex === 1) {
            acc += currentValue * 10
        } else if (currentIndex === 2) {
            acc += currentValue * 5
        } else if (currentIndex === 3) {
            acc += currentValue
        }
        
        return acc
    }, 0)
    
    return total >= amount * 100
    
}

console.log(changeEnoughReduce([4, 0, 0, 7], 4.50));
