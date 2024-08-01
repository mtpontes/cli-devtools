import { checkbox } from "@inquirer/prompts";
import JavaConstants from "../constants/JavaConstants.js";
import JavaCommand from "../command/JavaCommand.js";
import PythonCommand from "../command/PythonCommand.js";
import PythonConstants from "../constants/PythonConstants.js";

export default class CliService {

	async codeMenu() {
		const result =  await checkbox({
			message: "Choose a programming language",
			choices: [
				{ name: JavaConstants.NAME, value: new JavaCommand() },
				{ name: PythonConstants.NAME, value: new PythonCommand() }
			]
		});

		const languagesConfigs = [];
		for (let index = 0; index < result.length; index++) {
			const languageData = await result[index].execute();
			languagesConfigs.push(languageData);
		}

		return languagesConfigs;
	}

	async versioningMenu() {
	}

	async packageManagerMenu() {
	}

	async buildMenu() {
	}

	async containerMenu() {
	}
	
	async ideMenu() {
	}
}