import logo from './logo.svg';
import './App.css';
import Component from './Component';


function App() {
  return (
    <div className="App">      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Por una mejor salud mental <code>Conoce los benificios de </code> tener una mascota en casa
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >          
        </a>    
      <Component/>
      </header>      
    </div>
  );
}

export default App;
