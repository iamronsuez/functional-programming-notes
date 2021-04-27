const Box = x =>
    ({
        map: f => Box(f(x)),
        fold: f => f(x),
        chain: f => f(x),
        toString: () => `Box(${x})`
    })

// Exercise: Box
// Goal: Refactor each example using Box
// Keep these tests passing!
// Bonus points: no curly braces


// Ex1: Using Box, refactor moneyToFloat to be unnested.
// =========================
const moneyToFloat_ = str =>
    parseFloat(str.replace(/\$/, ''))


const moneyToFloat = str =>
    Box(str)
    .map(str => str.replace(/\$/, ''))
    .fold(str => parseFloat(str))


console.log("moneyToFloat_", moneyToFloat("$20"), 20)

// Ex2: Using Box, refactor percentToFloat to remove assignment
// =========================
const percentToFloat_ = str => {
    const float = parseFloat(str.replace(/\%/, ''))
    return float * 0.0100
}

const percentToFloat = str =>
    Box(str)
    .map(str => str.replace(/\%/, ''))
    .map(str => parseFloat(str))
    .fold(f => f * 0.0100)

console.log("percentToFloat_", percentToFloat("20%"), 0.2)

// Ex3: Using Box, refactor applyDiscount (hint: each variable introduces a new Box)
// =========================
const applyDiscount_ = (price, discount) => {
    const cents = moneyToFloat(price)
    const savings = percentToFloat(discount)
    return cents - (cents * savings)
}

// monad use case  

const applyDiscountWithFold = (price, discount) =>
    Box(moneyToFloat(price))
    .fold(cents => Box(percentToFloat(discount)).fold(savings => cents - (cents * savings)))

const applyDiscountWithChain = (price, discount) =>
    Box(moneyToFloat(price))
    .chain(cents => 
        Box(percentToFloat(discount))
        .map(savings => cents - (cents * savings)))
    .fold(x => x)

console.log("applyDiscount_", applyDiscountWithFold("$5.00", "20%"), 4)