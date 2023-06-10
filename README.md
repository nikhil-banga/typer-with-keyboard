# Typer with keyboard

This project consists of a typing test application built with React. The application allows users to practice and improve their typing speed and accuracy. It provides a random sentence for the user to type, calculates typing speed in words per minute (WPM), and displays accuracy statistics.

## Deployment

**https://typingtrainerbynikhil.web.app/**

## Code Explanation

### Test.js:

This file contains the main logic and components for the typing test. It manages the state of the input, calculates typing speed and accuracy, generates random sentences, and handles user input and submission.

### keyboard.js:

This file contains a keyboard component that simulates a physical keyboard. It captures key presses and passes the pressed key to the parent component.

### TextBox.js:

This file contains the main component that combines the typing test and the keyboard components. It handles the state of the pressed key and renders the typing test and keyboard components.

## Running the Project

### Run Locally

Clone the project

```bash
  git clone https://github.com/nikhil-banga/typer-with-keyboard
```

Go to the project directory

```bash
  cd typer-with-keyboard
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```
