const fsPromises = require('fs').promises

exports.sayHello = () => {
	return 'Hello'
}

exports.sayWorld = () => {
	return 'World'
}

exports.log = async dataStr => {
	try {
		await fsPromises.appendFile('out.log', dataStr)
	} catch (error) {
		console.log("Erreur d'écriture dans fichier de log")
	}
}

exports.readLog = async () => {
	return await fsPromises.readFile('out.log')
}

// module.exports = MaFonction
// module.exports.MaFonction1 = MaFonction1
// module.exports.MaFonction2 = MaFonction2
