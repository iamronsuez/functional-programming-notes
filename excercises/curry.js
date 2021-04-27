const {curry} = require('ramda')

let dragons = [
    {name: 'red', element: 'fire'},
    {name: 'lava', element: 'fire'},
    {name: 'aqua', element: 'water'},
    { name: 'crystal', element: 'ice'},
    { name: 'storm', element: 'wind'}
]

let isTypeOf = (element, obj) => {
    return element === obj.element
}

let fireDragons = dragons.filter(dragon => isTypeOf('fire', dragon))

console.log("fire dragons -> ", fireDragons)

/// curried version

isTypeOf = curry(isTypeOf)

isFireDragon = isTypeOf('fire')

fireDragons = dragons.filter(isFireDragon)

console.log("fire dragons -> ", fireDragons)
