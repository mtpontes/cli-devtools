import Installer from "../Installer.js";
import shell from "shelljs";

export default class JavaInstaller extends Installer {

	constructor(wingetId, execPath) {
		super();
		this.WINGET_ID = wingetId;
		this.EXEC_PATH = execPath;
	}

	install() {
		shell.exec(
			`winget install ${JavaInstaller.WINGET_ID}`, 
			{ silent: true }
		);

		this.configure();
	}

	configure() {
		shell.exec(
			`setx PATH "%PATH%;${JavaInstaller.EXEC_PATH}"`, 
			{ silent: true }
		);
	}
}