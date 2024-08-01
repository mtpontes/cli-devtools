import Installer from "../Installer.js";
import shell from "shelljs";

export default class GitInstaller extends Installer {

	static WINGET_ID = "Git.Git";
	static EXEC_PATH = "C:\\Program Files\\Git\\cmd";

	constructor() {
		super();
	}

	install() {
		shell.exec(
			`winget install ${GitInstaller.WINGET_ID}`, 
			{ silent: true }
		);

		this.configure();
	}

	configure() {
		shell.exec(
			`setx PATH "%PATH%;${GitInstaller.EXEC_PATH}`, 
			{ silent: true }
		);
	}
}