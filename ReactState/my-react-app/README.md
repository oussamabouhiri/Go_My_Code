# My React App

This project is a simple React application that demonstrates the use of class-based components, state management, and lifecycle methods.

## Project Structure

```
my-react-app
├── public
│   ├── index.html        # Main HTML file for the React application
│   └── favicon.ico       # Favicon for the application
├── src
│   ├── App.css           # Styles for the App component
│   ├── App.js            # Main application component (class-based)
│   ├── index.css         # Global styles for the application
│   ├── index.js          # Entry point of the React application
│   └── components
│       └── Profile.js    # Functional component to display person's profile
├── package.json          # Configuration file for npm
└── .gitignore            # Specifies files and directories to ignore by Git
```

## Features

- **Class-based Component**: The main application is built using a class-based component that manages its own state.
- **State Management**: The application maintains a state for a `Person` object, which includes:
  - `fullName`
  - `bio`
  - `imgSrc`
  - `profession`
  - `show` (boolean to toggle profile visibility)
- **Toggle Profile Display**: A button is provided to toggle the visibility of the person's profile.
- **Lifecycle Method**: The application tracks the time interval since the component was mounted using the `setInterval` method.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd my-react-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```

## License

This project is licensed under the MIT License.