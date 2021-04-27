const {curry, filter, test, reduce, flip} = require('ramda')

// replace
const replace = curry((regex, replacement, str) => str.replace(regex, replacement))

const replaceVowels = replace(/[AEIOU]/ig, '0')


console.log(replaceVowels("i have words"))


// split
const split = curry((delimeter, string) => string.split(delimeter))

const words = split(" ") // str => (split(" ", str))

console.log(words("hello world :)"))

// filter qs

const filterQs = filter(test(/q/ig))

console.log(filterQs(["hello", "quick", "quack", "world"]))


// reduce

const isMajor = (x, y) => x > y

const isMinor = (x, y) => x < y

const reduceNumbers = curry((comparator, x, y) => comparator(x, y) ? x : y)

const keepHighest = reduceNumbers(isMajor)

const keepLowest = reduceNumbers(isMinor)

const max = reduce(keepHighest, 0)

const min = reduce(keepLowest, 0)

console.log(max(["1", "2", "3"]), min(["1", "2", "3"]))