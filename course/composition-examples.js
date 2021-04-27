const {
    compose,
    curry,
    flip
} = require('ramda')

// const compose = (f, g) => x => f(g(x))

const append = curry((x, y) => x + y)

const toUpper = str => str.toUpperCase()

const exclaim = str => append(str, "!")

const first = xs => xs[0]

const log = curry((tag, x) => (console.log(tag, x), x))

const shout = compose(log('exclaim:'), exclaim, log('toUpper:'), toUpper, log('first:'), first, log('start:'))

console.log(shout("tears"))



