const {
    prop,
    filter,
    flip,
    compose,
    last,
    head,
    map,
    join,
    curry,
    add,
    reduce,
    divide,
    length,
    replace,
    toLower,
    sortBy,
    concat
} = require('ramda')
const QUnit = require('qunit')

const log = curry((tag, x) => (console.log(tag, x), x))


// Example Data
const CARS = [{
        name: "Ferrari FF",
        horsepower: 660,
        dollar_value: 700000,
        in_stock: true
    },
    {
        name: "Spyker C12 Zagato",
        horsepower: 650,
        dollar_value: 648000,
        in_stock: false
    },
    {
        name: "Jaguar XKR-S",
        horsepower: 550,
        dollar_value: 132000,
        in_stock: false
    },
    {
        name: "Audi R8",
        horsepower: 525,
        dollar_value: 114200,
        in_stock: false
    },
    {
        name: "Aston Martin One-77",
        horsepower: 750,
        dollar_value: 1850000,
        in_stock: true
    },
    {
        name: "Pagani Huayra",
        horsepower: 700,
        dollar_value: 1300000,
        in_stock: false
    }
];

// Exercise 1:
// ============
// use _.compose() to rewrite the function below. Hint: _.prop() is curried.

const isLastInStock = compose(prop('in_stock'), last)

console.log(isLastInStock(CARS))

// Exercise 2:
// ============
// use _.compose(), _.prop() and _.head() to retrieve the name of the first car

const nameOfFirstCar = compose(prop('name'), head)

console.log(nameOfFirstCar(CARS))


// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition

const average = xs => divide(reduce(add, 0, xs), length(xs))

var averageDollarValue = compose(average, map(prop('dollar_value')))

console.log(averageDollarValue(CARS))

// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored names: e.g: sanitizeNames(["Hello World"]) //=> ["hello_world"].

const _underscore = replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize

const sanitizeNames = map(compose(_underscore, toLower, prop('name')))

console.log(sanitizeNames(CARS))


// Bonus 1:
// ============
// Refactor availablePrices with compose.

// const availablePrices = function(cars) {
//     const available_cars = _.filter(_.prop('in_stock'), cars);
//     return available_cars.map(x => formatMoney(x.dollar_value)).join(', ');
//   }

const formatMoney = xs => `$ ${xs}`

const formatDollarValue = compose(formatMoney, prop('dollar_value'))

const availablePrices = compose(join(', '), map(formatDollarValue), filter(prop('in_stock')))


console.log(availablePrices(CARS))


// Bonus 2:
// ============
// Refactor to pointfree.

// const fastestCar = function(cars) {
//     const sorted = _.sortBy(car => car.horsepower, cars);
//     const fastest = _.last(sorted);
//     return fastest.name + ' is the fastest';
//   }

const append = flip(concat)

const fastestCar = compose(append(" is the fastest"), prop('name'), last, sortBy(prop('horse_power')))


console.log(fastestCar(CARS))