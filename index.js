const chalk = require('chalk');
const figures = require('figures')
let currentDate = new Date();
let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();


//Todo: Add figures and make the Custom logger better
class Logger {
        this.log = async function(data, type) {
            if (type === null) { await console.log(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.gray.bold("log") + chalk.gray("]"), chalk.gray(data)) } else {
                switch (type) {
                    case "warn":
                        await console.log(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.yellow.bold("warn") + chalk.gray("]"), chalk.red(data))
                        break;
                    case "log":
                        await console.log(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.gray.bold("log") + chalk.gray("]"), chalk.gray(data))
                        break;
                    case "info":
                        await console.log(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.white.bold("info") + chalk.gray("]"), chalk.white(data))
                        break;
                    case "debug":
                        console.log(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.magenta.bold("debug") + chalk.gray("]"), chalk.cyan(data))
                        break;
                    case "error":
                        await console.log(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.red.bold("error") + chalk.gray("]"), chalk.red(data))
                        break;
                }
            }
        this.print = async function(data, type) {
            if (type === null) { await console.log(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.gray.bold("log") + chalk.gray("]"), chalk.gray(data)) } else {
                switch (type) {
                    case "warn":
                        await console.log(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.yellow.bold("warn") + chalk.gray("]"), chalk.red(data))
                        break;
                    case "log":
                        await console.log(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.gray.bold("log") + chalk.gray("]"), chalk.gray(data))
                        break;
                    case "info":
                        await console.log(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.white.bold("info") + chalk.gray("]"), chalk.white(data))
                        break;
                    case "debug":
                        console.log(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.magenta.bold("debug") + chalk.gray("]"), chalk.cyan(data))
                        break;
                    case "error":
                        await console.log(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.red.bold("error") + chalk.gray("]"), chalk.red(data))
                        break;
                }
            }
        }


        this.info = async function (data) {await console.log(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.white.bold("info") + chalk.gray("]"), chalk.white(data))}
        this.warn = async function (data) {await console.log(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.yellow.bold("warn") + chalk.gray("]"), chalk.red(data))}
        this.debug = async function (data) {await console.log(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.magenta.bold("debug") + chalk.gray("]"), chalk.cyan(data))}
        this.error = async function (data) {await console.log(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.red.bold("error") + chalk.gray("]"), chalk.red(data))}
    }
}

class Debug {
    constructor(data) {
        console.warn(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.magenta.bold("debug") + chalk.gray("]"), chalk.cyan(data))

    }
}

class Error {
    constructor(data) {
        console.log(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.red.bold("error") + chalk.gray("]"), chalk.red(data))
    }
}

class Warn {
    constructor(data) {
        console.log(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.yellow.bold("warn") + chalk.gray("]"), chalk.red(data))
    }

}

class Log {
    constructor(data) {
        console.log(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.gray.bold("log") + chalk.gray("]"), chalk.gray(data))

    }

}

class Info {
    constructor(data) {
        console.log(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.white.bold("info") + chalk.gray("]"), chalk.white(data))

    }

}

class Custom {
    constructor(name, data) {
        console.log(chalk.gray("[" + time + "]"), chalk.gray("[") + chalk.white.bold(name) + chalk.gray("]"), chalk.white(data))

    }

}

class Line {
    constructor() {
        console.log("")
    }
}

module.exports.Logger = Logger;
module.exports.Logger.Debug = Debug;
module.exports.Logger.Debug.Debug = Debug;
module.exports.Logger.Debug.Error = Error;
module.exports.Logger.Debug.Warn = Warn;
module.exports.Logger.Debug.Log = Log;
module.exports.Logger.Debug.Info = Info;
module.exports.Logger.Debug.Custom = Custom;


module.exports.Logger.Log = Logger;
module.exports.Logger.Error = Error;
module.exports.Logger.Warn = Warn;
module.exports.Logger.Info = Info;
module.exports.Logger.Custom = Custom;

module.exports.Logger.Line = Line;
