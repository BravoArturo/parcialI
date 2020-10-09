import './style.css';
import React from 'react';
import { Field } from 'react-final-form';
import data from '../../data.js';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Counter from '../Counter';

function add2counter() {
  data.Counter.push({
    created: Date(),
    updated: null,
    counterOfCounter: 0
  })
}
console.log(data.Counter);
function Form(props) {
    return (
        <BrowserRouter>
        <Route exact path="/parcialI">
        <form className="SignInForm">
              <h2>Alumno</h2>
              <div>
                <Field name="name" component="input" disabled="disable" placeholder={data.Alumno[0].name} />
              </div>
              <div>
                <Field name="year" component="input" disabled="disable" placeholder={data.Alumno[0].year} />
              </div>
              <div className="buttonS">
                <Link to="/editForm">
                  <button >Editar Información</button>
                </Link>
                <Link to="/Counter">
                  <button onClick={add2counter}>Agregar Contador</button>
                </Link>
              </div>
        </form>
        </Route>
        <Route exact path="/editForm">
          <form className="SignInForm">
                <h2>Alumno</h2>
                <div>
                  <Field name="name" component="input" placeholder={data.Alumno[0].name} />
                </div>
                <div>
                  <Field name="year" component="input" placeholder={data.Alumno[0].year} />
                </div>
                <div className="buttonS">
                  <Link to="/parcialI">
                    <button type="Enviar" onClick={props.handleInputChange} >Guardar Información</button>
                  </Link>
                  <Link to="/Counter">
                    <button >Agregar Contador</button>
                  </Link>
                </div>
          </form>
        </Route>
        <Route exact path="/Counter" component={Counter}></Route>
        </BrowserRouter>
          )
};
export default Form;