import Installer from "../Installer.js";
import shell from "shelljs";
import PathResolver from "../../util/PathResolver.js";

export default class MavenInstaller extends Installer {

  #chocolateyName = "maven";
  #path = PathResolver.getInstallationPath(
    "C:\\ProgramData\\chocolatey\\lib\\maven", 
    "apache-maven", 
    "Maven"
  );

  constructor() {
    super();
  }

  async install() {
    await shell.exec(`choco install ${this.#chocolateyName} -y`);
		
    return this.#getToolOutput();
  }

  #getToolOutput() {
    const version = this.#path.split("maven-")[1];

    return {
      name: "Maven",
      version: version,
      path: this.#path,
      timestamp: new Date().toISOString()
    };
  }
}