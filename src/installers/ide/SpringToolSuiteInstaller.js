import Installer from "../Installer.js";
import shell from "shelljs";

export default class SpringToolSuiteInstaller extends Installer {

	#chocolateyName = "springtoolsuite";
	#path = "C:\\ProgramData\\chocolatey\\lib\\springtoolsuite";

	constructor() {
		super();
	}

	async install() {
		await shell.exec(
			`choco install ${this.#chocolateyName} -y`, 
			{ silent: true }
		);

		return this.#getToolOutput();
	}

	#getToolOutput() {
		return {
			name: "Spring Tool Suite",
			path: this.#path,
			timestamp: new Date().toISOString()
		};
	}
}