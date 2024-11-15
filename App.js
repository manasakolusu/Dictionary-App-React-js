import React from "react";
import Dictionary from "./components/Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="heading">Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="aesthetic" />
        </main>
        <footer className="mt-5 footer">
          <div className="footer-content">
            <p className="credit">
              {" "}
              <a
                href="https://github.com/s-shemmee"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
             
              </a>
              {" "}
              <a
                href="https://github.com/shemmee/Dictionary-React-App"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                
              </a>
             
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
