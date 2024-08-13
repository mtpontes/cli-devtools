export default class Command {
	
  constructor() {
    if (new.target === Command)
      throw new TypeError("Cannot construct Configurer instances directly");
  }

  async execute() {
    throw new Error("Method 'configure()' must be implemented");
  }
}