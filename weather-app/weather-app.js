const yargs = require('yargs/yargs');
let chalk = require('chalk');

const argv = yargs
    .option('city', {
        alias: 'c',
        describe: 'City name',
        type: 'string',
        demandOption: true,
    })
    .help()
    .argv;

let city = argv.city.toLowerCase();

function getWeatherData() {
    let weatherData = {
        'london': { Temperature: 65, Humidity: 50, WindSpeed: 10, conditions: 'sunny' },
        'seattle': { Temperature: 75, Humidity: 35, WindSpeed: 5, conditions: 'partly cloudy' },
        'portland': { Temperature: 85, Humidity: 70, WindSpeed: 25, conditions: 'cloudy' },
        'chicago': { Temperature: 60, Humidity: 40, WindSpeed: 20, conditions: 'rainy' }
    }
};

let data = weatherData[city];


console.log(
    `------WEATHER REPORT------

Location: ${city}
Temperature: ${data.Temperature}
Humidity: ${data.Humidity}
Wind Speed: ${data.WindSpeed}
Conditions: ${data.conditions}

--------------------------`
);

function reportWeather() {
        console.log(chalk.blue.bold("===== WEATHER REPORT =====\n"));
    console.log(chalk.yellow.bold("Location:", userCity));
    console.log(chalk.green("Temperature:", this.temperature, "F"));
    console.log(chalk.blue("Conditions:", this.conditions));
    console.log(chalk.magenta("Humidity:", this.humidity));
    console.log(chalk.red("Wind Speed:", this.wind));
    console.log(chalk.blue.bold("\n=========================="));

};

