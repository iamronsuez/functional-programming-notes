const fs = require('fs')

const {Right, Left} = require('../course/monad')

const getProperty = (fileName, propertyName) => {
    try {
        console.log('hello ?')
        const str = fs.readFileSync(fileName)
        const config = JSON.parse(str)
        console.log(config)
        return config[propertyName]
    } catch (error) {
        return 'cannot retrieve property ' + propertyName + ' due ' + error
    }
}

const propertyValue = getProperty('./config.json', 'port')

console.log(propertyValue)


// try - catch example

const tryCatch = (f) => {
    try {
        return Right(f()) 
    } catch (error) {
        return Left(error)
    }
}


const getPropertyFunc = (path, property) =>
    tryCatch(() => fs.readFileSync(path))
    .chain(str => tryCatch(() => JSON.parse(str)))
    .map(config => config[property])
    .fold( x => console.log("failed due: " + x), propValue => console.log( 'propValue is ' +propValue))


getPropertyFunc('./config.json', 'port')
getPropertyFunc('./configf.json', 'port')
