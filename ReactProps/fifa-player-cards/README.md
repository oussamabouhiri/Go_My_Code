# FIFA Player Cards

This project is a React application that displays FIFA player cards using React Bootstrap. Each card showcases various attributes of the players, including their name, team, nationality, jersey number, age, and an image.

## Project Structure

The project has the following structure:

```
fifa-player-cards
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Player.js
│   │   └── PlayersList.js
│   ├── data
│   │   └── players.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── index.css
├── package.json
└── README.md
```

## Features

- Displays player cards with detailed information.
- Uses React Bootstrap for styling and layout.
- Supports dynamic rendering of player data from a JSON array.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd fifa-player-cards
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the app in your default web browser at `http://localhost:3000`.

## Components

- **Player.js**: Renders individual player cards with attributes.
- **PlayersList.js**: Maps through the array of players and renders a list of Player components.
- **players.js**: Contains an array of player objects with their details.

## Dependencies

- React
- React Bootstrap

## License

This project is licensed under the MIT License.