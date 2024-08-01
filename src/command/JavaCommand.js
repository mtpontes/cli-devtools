import Command from "./Command.js";
import { select } from "@inquirer/prompts";
import JavaConstants from "../constants/JavaConstants.js";
import JavaInstaller from "../installers/code/JavaInstaller.js";

export default class JavaCommand extends Command {

	async execute() {
		return await select({
			message: "Escolha um JDK",
			choices: [
				{ 
					name: JavaConstants.JDK_8.name, 
					value: new JavaInstaller(
						JavaConstants.JDK_8.winget_id, 
						JavaConstants.JDK_8.installation_path
					) 
				},

				{ 
					name: JavaConstants.JDK_11.name, 
					value: new JavaInstaller(
						JavaConstants.JDK_8.winget_id, 
						JavaConstants.JDK_11.installation_path
					)  
				},

				{ 
					name: JavaConstants.JDK_17.name, 
					value: new JavaInstaller(
						JavaConstants.JDK_8.winget_id, 
						JavaConstants.JDK_17.installation_path
					)  
				},

				{ 
					name: JavaConstants.JDK_21.name, 
					value: new JavaInstaller(
						JavaConstants.JDK_8.winget_id, 
						JavaConstants.JDK_21.installation_path
					)  
				}
			]
		});
	}
}