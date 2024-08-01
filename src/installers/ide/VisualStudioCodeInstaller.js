import Installer from "../Installer.js";
import shell from "shelljs";

export default class VisualStudioCodeInstaller extends Installer {

	static WINGET_ID = "Microsoft.VisualStudioCode";
	static EXEC_PATH = `C:\\Users\\${shell.env.USERNAME}\\AppData\\Local\\Programs\\Microsoft VS Code\\bin`;

	constructor() {
		super();
	}

	install() {
		shell.exec(
			`winget install ${VisualStudioCodeInstaller.CHOCOLATEY_NAME}`, 
			{ silent: true }
		);

		this.configure();
	}

	configure() {
		shell.exec(
			`setx PATH "%PATH%;${VisualStudioCodeInstaller.EXEC_PATH}"`, 
			{ silent: true }
		);
	}
}