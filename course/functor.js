
// identity functor 
// kind of array
// * map <- run the function but keep it on the Box to be chainable 


const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    toString: `Box(${x})`
})


const toUpper = (str) => {
    return Box(str)
    .map(x => x.toUpperCase())
    .fold(x => x)
}


console.log(toUpper("hola"))


