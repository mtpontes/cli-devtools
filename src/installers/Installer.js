export default class Installer {

	constructor() {
		if (new.target === Installer) 
			throw new TypeError("Cannot construct Installer instances directly");
	}


	install() {
		throw new Error("Method 'install() must be implemented");
	}
}