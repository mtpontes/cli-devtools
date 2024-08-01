import Installer from "../Installer.js";
import shell from "shelljs";

export default class EclipseInstaller extends Installer {

	static CHOCOLATEY_NAME = "eclipse";

	constructor() {
		super();
	}

	install() {
		shell.exec(
			`choco install ${EclipseInstaller.CHOCOLATEY_NAME} -y`, 
			{ silent: true }
		);
	}
}