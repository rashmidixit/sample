# Sama WeatherService

This application displays the 5 day weather forecast for Pune city. This is a responsive application.

## How to Build, Deploy and Test

### Pre-requisites

- This has been tested on the following environment. Ensure you have these installed.
    - node v12.13.0
    - npm v6.12.0

### Build

Run `npm install` to install all required node packages.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

### Running unit tests

Run `ng test` to execute the unit tests.

## Future Enhancements

### Features

- Show more information using details provided by the Weather API (Historical data, )
- Fetch a list of cities from GeoDB Cities API and allow user to see weather of any city
- View weather for multiple cities.
- User Preferences: Allow user to choose cities to view weather of.  

- Control units of temperature via configuration - other settings.
- Based on page width, show all 5 days temperature in the same row
- Multi-language based on browser locale - language and dates

### Technical Debt

- UI flashes an error message while the page is loading. The error handling needs to be made better.
- Make the page accessible

