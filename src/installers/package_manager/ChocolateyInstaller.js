import Installer from "../Installer.js";
import shell from "shelljs";

export default class ChocolateyInstaller extends Installer {

	#wingeId = "Chocolatey.Chocolatey";
	#path = "C:\\ProgramData\\chocolatey";

	constructor() {
		super();
	}

	async install() {
		await shell.exec(
			`winget install ${this.#wingeId}`,
			{ silent: true }
		);

		this.#configure();

		console.log("Chocolatey installed successfully");

		return this.#getToolOutput();
	}

	#configure() {
		shell.exec(
			`setx PATH "%PATH%;${this.#path}"`, 
			{ silent: true });
	}

	#getToolOutput() {
		return {
			name: "Chocolatey",
			path: this.#path,
			timestamp: new Date().toISOString()
		};
	}
}