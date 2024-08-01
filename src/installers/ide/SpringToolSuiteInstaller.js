import Installer from "../Installer.js";
import shell from "shelljs";

export default class SpringToolSuiteInstaller extends Installer {

	static CHOCOLATEY_NAME = "springtoolsuite";

	constructor() {
		super();
	}

	install() {
		shell.exec(
			`choco install ${SpringToolSuiteInstaller.CHOCOLATEY_NAME} -y`, 
			{ silent: true }
		);
	}
}