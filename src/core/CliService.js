import { checkbox, select } from "@inquirer/prompts";
import shell from "shelljs";
import JavaCommand from "../command/JavaCommand.js";
import JavaConstants from "../constants/JavaConstants.js";
import MavenInstaller from "../installers/build/MavenInstaller.js";
import ChocolateyInstaller from "../installers/package_manager/ChocolateyInstaller.js";
import GitInstaller from "../installers/versioning/GitInstaller.js";
import EclipseInstaller from "../installers/ide/EclipseInstaller.js";
import SpringToolSuiteInstaller from "../installers/ide/SpringToolSuiteInstaller.js";
import VisualStudioCodeInstaller from "../installers/ide/VisualStudioCodeInstaller.js";

export default class CliService {

  async installPackageManager() {
    if (shell.which("choco") === null) {
      new ChocolateyInstaller().install();
    }
  }

  async versioningMenu() {
    const result = await select({
      message: "Do you want to install Git?",
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
    return await checkbox({
      message: "Choose one or more IDEs to install",
      choices: [
        { name: "Eclipse IDE", value: new EclipseInstaller() },
        { name: "Spring Tool Suite", value: new SpringToolSuiteInstaller() },
        { name: "Visual Studio Code", value: new VisualStudioCodeInstaller() }
      ]
    });
  }
}