import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>This project was coded by{" "}
        <a href="https://github.com/Mal-95" target="_blank" rel="noreferrer">Malebo Letsoalo,</a>
        {" "}open-sourced on{" "}
        <a href="https://github.com/Mal-95/react-weather-project" target="_blank" rel="noreferrer">GitHub</a>
        {" "}and hosted on{" "}
        <a href="https://react-weather-app-project-2024.netlify.app" target="_blank" rel="noreferrer">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
