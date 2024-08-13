import CliService from "./CliService.js";
import Installer from "../installers/Installer.js";
import LogManager from "../util/LogManager.js";

export default class Principal {

  constructor() {
    this.service = new CliService();
    this.logger = new LogManager();
  }

  async showMenu() {
  	let installers = [];
  	await this.service.installPackageManager();
  	const versioningInstaller = await this.service.versioningMenu();
  	const codeInstaller = await this.service.codeMenu();
  	const buildInstaller = await this.service.buildMenu();
  	const ideInstaller = await this.service.ideMenu();
  	const containerInstaller = await this.service.containerMenu();

  	installers.push(
  		versioningInstaller,
  		codeInstaller,
  		buildInstaller,
  		ideInstaller,
  		containerInstaller
  	);

  	installers = installers
  		.flat()
  		.filter(i => i instanceof Installer);

  	const logData = [];
  	for (const installer of installers) {
  		logData.push(await installer.install());
  	}
  }
}