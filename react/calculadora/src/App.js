import React, { Component } from 'react';
import './app.css'
import Display from './components/Display'
import Botoes from './components/Botoes'

class App extends Component {
  render() {
    return (
      <main>
        <div className = "calculadora">
          <Display/>
          <Botoes/>
        </div>
      </main>
    );
  }
}

export default App;
