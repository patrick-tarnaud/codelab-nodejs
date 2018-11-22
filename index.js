const chalk = require('chalk')
const service = require('./service')
const express = require('express')
const controller = require('./controller')
const rootRouter = require('./routes')

console.log(chalk.blue('Hello World!'))

console.log(chalk.red(service.sayHello() + ' ' + service.sayWorld() + ' !!!'))

service.log('Ma trace 1\n')
service.log('Ma trace 2\n')
service.log('Ma trace 3\n')

// (async () => {
// 	let fileContent = await serv.readLog()
// 	console.log(chalk.green(fileContent))
// })()

service.readLog().then(data => console.log(chalk.green(data)))

let app = express()

app.use('/', rootRouter)

app.listen(4000)
