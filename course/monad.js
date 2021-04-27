// subclasses of either

const Right = x =>
    ({
        map: f => Right(f(x)), // returns a Box with the value trasformed
        fold: (f, g) => g(x),
        chain: f => f(x),
        toString: () => `Right(${x})`
    })

const Left = x =>
    ({
        map: f => Left(x), // returns a Box with the original value 
        fold: (f, g) => f(x),
        chain: f => Left(x),
        toString: () => `Left(${x})`
    })


const findColor = name => {
    const found = {
        red: 'red',
        blue: 'blue',
        yellow: 'yellow'
    } [name]
    return found ? Right(found) : Left(name + ' not found')
}

findColor('red')
    .map(x => x.toUpperCase())
    .map(x => (`color: ${x}`))
    .map(x => (`${x} and this is nice`))
    .fold(() => 'no color', color => console.log(color))


findColor('green')
    .map(x => x.toUpperCase())
    .map(x => (`color: ${x}`))
    .fold(err => console.log(err), color => console.log(color))



// application with fromNullable

const fromNullable = x => x != null ? Right(x) : Left()

const findColor2 = name => fromNullable({
    red: 'red',
    blue: 'blue',
    yellow: 'yellow'
} [name])



findColor2('red')
    .map(x => x.toUpperCase())
    .map(x => (`color: ${x}`))
    .map(x => (`${x} and this is nice`))
    .fold(() => 'no color', color => console.log(color))


const traverseColor = color => findColor2(color)
    .map(x => x.toUpperCase())
    .map(x => (`color: ${x}`))
    .fold((x) => console.log(color + ' not found'), traversedColor => console.log(traversedColor))

traverseColor('red')
traverseColor('green')



module.exports = {
    Right,
    Left
}
