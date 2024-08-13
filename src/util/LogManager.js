import fs from "fs";

export default class LogManager {

  #filepath = "./logs/log.txt";

  constructor() {}

  
  writeLog(newLog) {
    let logData = this.#readFile();
    logData = [... logData, ...newLog];
    this.#writeLog(logData);
  }

  #readFile() {
    this.#createIfNotExists();

    let reading;
    try {
      reading = fs.readFileSync(this.#filepath, "utf-8");

    } catch (error) {
      reading = null;
      console.error("An error occurred while reading log");
    }

    return reading !== null ? JSON.parse(reading) : [];
  }

  #writeLog(data) {

    try {
      fs.writeFileSync(this.#filepath, JSON.stringify(data, null, 2));

    } catch (error) {
      console.error("An error occurred while writing log");
    }
  }

  #createIfNotExists() {
    const path = this.#filepath.replace("/log.txt", "");
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }

    if (!fs.existsSync(this.#filepath)) {
      fs.writeFileSync(this.#filepath, "");
    }
  }
}