# Finance Tracker Website

This project contains two applications.

1. The API in NodeJS.
2. The web client written in Angular2.

# Requirements

- Node.JS
- MongoDB

# Launching the Application

## Install dependencies

1. In the command line, navigate to the project root
2. Run `npm install`

## Launching app in developer mode

1. In the command line, navigate to the project root.
2. Start the mongodb service in port 27017
3. Run `node server` to start the API server.
4. Run `ng serve` to start the client
5. In a browser, navigate to `http://localhost:4200`

## Launching app in production mode

1. In the command line, navigate to the project root.
2. Start the mongodb service in port 27017
3. Run `node server` to start the API server.
4. Run `ng build --prod` to generate static pages
5. In a browser, navigate to `http://localhost:8081`



# The Web Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
