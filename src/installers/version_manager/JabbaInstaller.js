import Installer from "../Installer.js";
import shell from "shelljs";

export default class JabbaInstaller extends Installer {

	// eslint-disable-next-line no-undef
	#path = `${process.env.USERPROFILE}\\.jabba`;
    
	constructor() {
		super();
	}

	async install() {
		await shell.exec(`
            [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
        Invoke-Expression (
          Invoke-WebRequest https://github.com/shyiko/jabba/raw/master/install.ps1 -UseBasicParsing
        ).Content`);

		return this.#getToolOutput();
	}

	#getToolOutput() {
		return {
			name: "Jabba",
			path: this.#path,
			timestamp: new Date().toISOString()
		};
	}
}