# Oowlish

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## API 

Install JSON Server

`npm install -g json-server`

Run API project with:

`json-server --watch db/data.json --id 'upin'`

* This happens in order to start API using data.json as DB.
* The `--id` flag is used to signify to the server that the primary key of our objects is now "upin" instead of the default "id".

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

