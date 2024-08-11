import Installer from "../Installer.js";
import shell from "shelljs";

export default class ChocolateyInstaller extends Installer {

	static WINGET_ID = "Chocolatey.Chocolatey";
	static EXEC_PATH = "C:\\ProgramData\\chocolatey";

	constructor() {
		super();
	}

	install() {
		shell.exec(
			`winget install ${ChocolateyInstaller.WINGET_ID}`,
			{ silent: true }
		);

		this.#configure();

		console.log("Chocolatey installed successfully");
	}

	#configure() {
		shell.exec(
			`setx PATH "%PATH%;${ChocolateyInstaller.EXEC_PATH}"`, 
			{ silent: true });
	}
}