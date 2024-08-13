import shell from "shelljs";
import Installer from "../Installer.js";
import PathResolver from "../../util/PathResolver.js";

export default class JavaInstaller extends Installer {

	#wingetId;
	#path;
	#mainDir;

	constructor(wingetId, path, mainDir) {
		super();
		this.#wingetId = wingetId;
		this.#path = path;
		this.#mainDir = mainDir;
	}

	async install() {
		console.log("Starting installation for:", this);

		await shell.exec(
			`winget install ${this.#wingetId}`, 
			{ silent: false }
		);
		console.log("Completed installation for:", this);

		return this.#getToolOutput();
	}

	#getToolOutput() {
		const java = "Java";

		const completePath = PathResolver.getInstallationPath(
			this.#path, 
			this.#mainDir, 
			java
		);

		const version = completePath
			.split("Adoptium\\")[1]
			.replace("-hotspot", "");

		return {
			name: java,
			version: version,
			path: completePath,
			timestamp: new Date().toISOString()
		};
	}
}