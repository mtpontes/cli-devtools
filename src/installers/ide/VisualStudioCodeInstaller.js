import Installer from "../Installer.js";
import shell from "shelljs";

export default class VisualStudioCodeInstaller extends Installer {

	#wingetId = "Microsoft.VisualStudioCode";
	// eslint-disable-next-line no-undef
	#path = `${process.env.USERPROFILE}\\AppData\\Local\\Programs\\Microsoft VS Code`;

	constructor() {
		super();
	}

	async install() {
		await shell.exec(
			`winget install ${this.#wingetId}`, 
			{ silent: true }
		);

		return this.#getToolOutput();
	}

	#getToolOutput() {
		return {
			name: "Visual Studio Code",
			path: this.#path,
			timestamp: new Date().toISOString()
		};
	}
}