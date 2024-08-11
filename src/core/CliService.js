import { checkbox, select } from "@inquirer/prompts";
import shell from "shelljs";
import JavaCommand from "../command/JavaCommand.js";
import JavaConstants from "../constants/JavaConstants.js";
import MavenInstaller from "../installers/build/MavenInstaller.js";
import ChocolateyInstaller from "../installers/package_manager/ChocolateyInstaller.js";
import GitInstaller from "../installers/versioning/GitInstaller.js";

export default class CliService {

	async installPackageManager() {
		if (shell.which("choco") === null) {
			new ChocolateyInstaller().install();
		}
	}

	async versioningMenu() {
		const result = await select({
			message: "Do you want to install git?",
			choices: [
				{ name: "Yes", value: new GitInstaller() },
				{ name: "No", value: null }
			]
		});

		return result;
	}
	
	async codeMenu() {
		const result =  await checkbox({
			message: "Choose a programming language",
			choices: [
				{ name: JavaConstants.NAME, value: new JavaCommand() },
				{ name: "None", value: null }
			]
		});

		if (result === null) {
			return;
		}

		const languagesConfigs = [];
		for (let index = 0; index < result.length; index++) {
 			const languageData = await result[index].execute();
			languagesConfigs.push(languageData);
		}

		return languagesConfigs;
	}

	async buildMenu() {
		return await checkbox({
			message: "Choose a build tool",
			choices: [
				{ name: "Maven", value: new MavenInstaller() },
				{ name: "None", value: null }
			]
		});
	}

	async containerMenu() {
		return null;
	}
	
	async ideMenu() {
		return null;
	}
}