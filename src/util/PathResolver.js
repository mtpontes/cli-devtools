import chalk from "chalk";
import fs from "fs";
import path from "path";

export default class PathResolver {

  constructor() {}

  static getInstallationPath(baseDir, keyword, toolName) {
    const directories = fs.readdirSync(baseDir);
    let completePath = null;
		
    for (const dir of directories) {
      if (dir.includes(keyword)) {
        completePath = path.join(baseDir, dir);
        return completePath;
      }
    }

    if (completePath === null) 
      console.error(chalk.red(`
        There was a problem setting the installation path in the PATH 
        variable. Please manually configure your 
        ${chalk.bold(toolName)} tool`
      ));
  }
}