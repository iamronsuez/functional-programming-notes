const {Task} = require('../resources/types')

Task.of(2).map(two => two * 2).fork(console.error, console.log)

