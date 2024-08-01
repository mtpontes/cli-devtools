import Installer from "../Installer.js";
import shell from "shelljs";

export default class PythonInstaller extends Installer {

	constructor(wingetId, execPath) {
		super();
		this.WINGET_ID = wingetId;
		this.EXEC_PATH = execPath;
	}

	install() {
		shell.exec(
			`winget install ${PythonInstaller.WINGET_ID}`, 
			{ silent: true }
		);

		this.configure();
	}

	configure() {
		shell.exec(
			`setx PATH "%PATH%;${PythonInstaller.EXEC_PATH}"`, 
			{ silent: true }
		);
	}
}