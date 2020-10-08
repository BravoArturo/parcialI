import React from 'react';
import './App.css';
import logoUai from '../assets/Logo/logouai.png'
import Menu from '../components/screens/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="caratula">
        <ul>
          <li><h4>PRIMER PARCIAL</h4></li>
          <li><h2>Materia: Modelos Computacionales de Gestión Administrativa.</h2></li>
          <li><h2>Profesor: Curras, David.</h2></li>
          <li><h2>Alumno: Bravo, Arturo.</h2></li>
          <li><h2>Año lectivo: 2020.</h2></li>
        </ul>
      </div>
      <div className="logo">
        <img src={logoUai} className="imgUai"></img>
      </div>
      </header>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
}

export default App;
