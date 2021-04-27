const Task = require('data.task')

const fetch = require('node-fetch')


const apiKey = 'd544d064dd5b5ad54a1bdd332ab16a43'

const zip = "55455"

const CALL = `http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=${apiKey}`


const fetchIt = url =>
    new Task((reject, resolve) =>
        fetch(url)
        .then(res => res.json())
        .then(resolve)
        .catch(reject)
    )


fetchIt(CALL)
.map(res => res.city)
.map(res => res)
.fork(console.error, res => console.log(res))