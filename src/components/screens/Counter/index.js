import './style.css';
import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Form from '../Form';
import data from '../../data';

class Counter extends React.Component {
    render(){
      return(
        <BrowserRouter>
        <Route exacth path="/Counter" component={Counter}>
        {
        data.Counter.map(counter =>
        <div className="bodyOfCounter">
            <div>Creado:{counter.created}</div>
            <div>Actualizado:{counter.updated}</div>
            <div>
              <button>-</button>
              <label>{counter.counterOfCounter}</label>
              <button>+</button>
              <button>ELIMINAR</button>
            </div>
        </div>
        )  
        }
          <Link to="/parcialI">
            Go back
          </Link>
        </Route>
          <Route exact path="/parcialI" component={Form}></Route>
        </BrowserRouter>
      );
    }
  }
  export default Counter;