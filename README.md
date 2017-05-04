# Finance Tracker Website

This project contains two applications.

1. The API in NodeJS. `/server/` and `/server.js` 
2. The web client written in Angular2. `/src/`

# Requirements

- Node.JS
- MongoDB

# Launching the Application

## Install dependencies

1. In the command line, navigate to the project root
2. Run `npm install`

## Launching app in developer mode

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

1. In the command line, navigate to the project root.
2. Start the mongodb service in port 27017
3. Run `node server` to start the API server.
4. Run `ng serve` to start the client
5. In a browser, navigate to `http://localhost:4200`. The app will automatically reload if you change any of the source files.

## Launching app in production mode

1. In the command line, navigate to the project root.
2. Start the mongodb service in port 27017
3. Run `ng build -prod` to build the project. The build artifacts will be stored in the `dist/` directory.
4. Run `node server.js prod` to start the API server.
5. In a browser, navigate to `http://localhost:8081`
