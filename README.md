# PizzaBot

This is a Node.js/TypeScript implementation of PizzaBot, following the guidelines from the PizzaBot pdf.

There are two services in which the business logic resides:

- `InputProcessor` - responsible for validating and parsing the input
- `PizzaBot` - responsible for delivering pizzas to the provided points in the grid

## Prerequisites

In order to be able to build the project, the following dependencies are required to be installed:

- Node.js

## Build

In a terminal, navigate to the root directory of the project and execute:

```
npm install
```

to install the project's dependencies.

## Test

To run the unit and integration tests, execute:

```
npm test
```

## Run

To execute the PizzaBot with a custom user input:

```
npm start "5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)"
```