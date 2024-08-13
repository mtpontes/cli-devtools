import Installer from "../Installer.js";
import shell from "shelljs";

export default class EclipseInstaller extends Installer {

  #chocolateyName = "eclipse";
  #path = "C:\\ProgramData\\chocolatey\\lib\\eclipse";

  constructor() {
    super();
  }

  async install() {
    await shell.exec(
      `choco install ${this.#chocolateyName} -y`, 
      { silent: false }
    );

    return this.#getToolOutput();
  }

  #getToolOutput() {
    return {
      name: "Eclipse IDE",
      path: this.#path,
      timestamp: new Date().toISOString()
    };
  }
}	