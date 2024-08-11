import Installer from "../Installer.js";
import shell from "shelljs";

export default class JabbaInstaller extends Installer {

	static EXEC_PATH = "C:\\Users\\Conquer\\.jabba\\bin";
    
	constructor() {
		super();
	}

	install() {
		shell.exec(`
            [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
        Invoke-Expression (
          Invoke-WebRequest https://github.com/shyiko/jabba/raw/master/install.ps1 -UseBasicParsing
        ).Content`);

		this.#configure();
	}

	#configure() {
		shell.exec(
			`setx PATH "%PATH%;${JabbaInstaller.EXEC_PATH}"`, 
			{ silent: true }
		);
	}
}