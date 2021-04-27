const add = (x, y) => x + y

const toPair =  f => ([x, y]) => f(x,y) 

const fromPair = f => (x, y) => f([x,y]) 

const flip = f => (x, y) => f(y, x)


console.log(fromPair(toPair(add))(1, 2))

console.log(flip(add)(1, 3) == flip(add)(3, 1))


// currying

const curry = f => x => y => f(x, y)

const unCurry =  f => (x, y) => f(x)(y)


// example

const modulo = curry(flip((x, y) => x % y)) 

const isOdd = modulo(2)


console.log(isOdd(0)) // modulo(0 % 2)

console.log(isOdd(3)) // modulo(3 % 2)


const filter = curry((f, xs) => xs.filter(f))

const filterOdds = filter(isOdd)

console.log(filterOdds([0, 1, 2, 3, 4, 5]))
