import CliService from "./CliService.js";

export default class Principal {

	constructor() {
		this.service = new CliService();
	}

	async showMenu() {
		await this.service.packageManagerMenu();
		await this.service.versioningMenu();
		await this.service.codeMenu();
		await this.service.buildMenu();
		await this.service.ideMenu();
		await this.service.containerMenu();
	}
}