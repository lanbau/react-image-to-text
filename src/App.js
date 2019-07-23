import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tesseract from 'tesseract.js';

class App extends React.Component {

  componentDidMount() {
    const { TesseractWorker } = Tesseract;
    const worker = new TesseractWorker();


    worker
      .recognize('./image.png')
      .progress((p) => {
        console.log('progress', p);
      })
      .then(({ text }) => {
        console.log(text.split('\n'));
        worker.terminate();
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }



}

export default App;
