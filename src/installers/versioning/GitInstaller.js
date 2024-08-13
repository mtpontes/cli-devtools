import Installer from "../Installer.js";
import shell from "shelljs";

export default class GitInstaller extends Installer {

	#wingetId = "Git.Git";
	#path = "C:\\Program Files\\Git\\cmd";

	constructor() {
		super();
	}

	async install() {
		await shell.exec(
			`winget install ${this.#wingetId}`, 
			{ silent: true }
		);
		
		console.log("Git installed successfully");

		return this.#getToolOutput();
	}

	#getToolOutput() {
		const version = this.#path.split("maven-")[1];

		return {
			name: "Maven",
			version: version,
			path: this.#path,
			timestamp: new Date().toISOString()
		};
	}
}