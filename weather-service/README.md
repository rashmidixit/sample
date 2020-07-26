# Sama WeatherService

This application displays the 5 day weather forecast for Pune city. 
- This is a responsive application built using Angular 8
- OpenWeather API has been used to fetch weather information.

## How to Build, Deploy and Test

### Pre-requisites

- This has been tested on the following environment. Ensure you have at least these versions of the following installed.
    - node v12.13.0
    - npm v6.12.0

### Build

Run `npm install` to install all required node packages.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
Run `ng build` to get a distribution under folder dist.

### Running unit tests

Run `ng test` to execute the unit tests. All 7 test cases should pass. 

## Future Enhancements

### Corrections

- The problem statement states that only 5 day weather forecast needs to be shown. However, this application shows a 7 day weather forecast. Have avoided stripping data that the API already returns. This can be corrected by restricting the number of records passed up to the WeatherService

### Features

- Show more information using details provided by the Weather API (Historical data, other minute weather information)
- Fetch a list of cities from GeoDB Cities API and allow user to see weather of any city
- View weather for multiple cities.
- User Preferences: Allow user to choose cities to view weather of, control units of temperature, etc.
- Based on page width, show all 5 days temperature in the same row
- Multi-language based on browser locale - language and dates

### Technical Debt

- UI flashes an error message while the page is loading. The error handling needs to be made better.
- Write more tests - especially around the component to ensure the data is being rendered.
- Make the page accessible
- The API key is hard coded into the application. These details should be fetched from a configuration file.
