import CliService from "./CliService.js";
import Installer from "../installers/Installer.js";

export default class Principal {

	constructor() {
		this.service = new CliService();
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
		for (const installer of installers) {
			await installer.install();
		}
	}
}