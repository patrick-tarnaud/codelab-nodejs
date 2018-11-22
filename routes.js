const express = require('express')

const helloRouter = express.Router()
const rootRouter = express.Router()

helloRouter.route('/').get((req, res) => {
	res.send('Hello no one')
})

helloRouter.route('/me').get((req, res) => {
	res.send('Hello me')
})

helloRouter.route('/world').get((req, res) => {
	res.send('Hello world')
})

rootRouter
	.use((req, res, next) => {
		let now = Date.now()
		let method = req.method
		let path = req.path
		console.log(`${now} ${method} ${path}`)
		next()
	})
	.use('/hello', helloRouter)
	.route('/')
	.get((req, res) => {
		res.send('MainPage')
	})

module.exports = rootRouter
