import Command from "./Command.js";
import { select } from "@inquirer/prompts";
import PythonConstants from "../constants/PythonConstants.js";
import PythonInstaller from "../installers/code/PythonInstaller.js";

export default class PythonCommand extends Command {

	async execute() {
		return await select({
			message: "Escolha um Python Dev Kit",
			choices: [
				{ 
					name: PythonConstants.JDK_8.name, 
					value: new PythonInstaller(
						PythonConstants.JDK_8.winget_id, 
						PythonConstants.JDK_8.installation_path
					) 
				},

				{ 
					name: PythonConstants.JDK_11.name, 
					value: new PythonInstaller(
						PythonConstants.JDK_8.winget_id, 
						PythonConstants.JDK_11.installation_path
					)  
				},

				{ 
					name: PythonConstants.JDK_17.name, 
					value: new PythonInstaller(
						PythonConstants.JDK_8.winget_id, 
						PythonConstants.JDK_17.installation_path
					)  
				},

				{ 
					name: PythonConstants.JDK_21.name, 
					value: new PythonInstaller(
						PythonConstants.JDK_8.winget_id, 
						PythonConstants.JDK_21.installation_path
					)  
				}
			]
		});
	}
}