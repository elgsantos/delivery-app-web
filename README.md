# Delivery Web App

A web app for creating and listing deliveries, that calculates delivery routes and show on map.

- [Live Demo](#live-demo)
- [API](#api)
- [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Usage](#usage)
- [Built With](#built-with)
- [Author](#author)
- [License](#license)

## API

This app uses [delivery-api](https://github.com/elgsantos/delivery-api).

## Getting Started

### Prerequisites

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

### Installation

### Usage

#### .env file

In order to run project properly, configure the environment variables:

In the project directory, create a .env file that contains the following keys:

```
REACT_APP_MAPS_API_KEY="here your map key"
REACT_APP_API_URL="http://localhost:3333/api"
```

Don't forget to allow your map key to use maps api and direction services.

#### Start App

In the project directory, you can run: `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Built With

- [Node](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [Create React App](https://github.com/facebook/create-react-app)
- [Materialize](https://materializecss.com/)
- [axios](https://github.com/axios/axios)
- [moment](https://momentjs.com/)
- [react-google-maps](https://www.npmjs.com/package/react-google-maps)
