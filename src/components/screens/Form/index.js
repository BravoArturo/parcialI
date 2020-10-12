import './style.css';
import React from 'react';
import { Field } from 'react-final-form';
import data from '../../data.js';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Counter from '../Counter';

function Form(props) {
    return (
        <BrowserRouter>
        <Route exact path="/parcialI">
          <form className="form">
                <h2>Alumno</h2>
                <div>
                  <Field className="inputField" name="name" component="input" disabled="disable" placeholder={data.Alumno[0].name} />
                </div>
                <div>
                  <Field className="inputField" name="year" component="input" disabled="disable" placeholder={data.Alumno[0].year} />
                </div>
                <div>
                  <Link className="link" to="/editForm">
                    <button className="buttonS">Editar Información</button>
                  </Link>
                  <Link className="link" to="/Counter">
                    <button className="buttonS">Agregar Contador</button>
                  </Link>
                </div>
          </form>
        </Route>
        <Route exact path="/editForm">
          <form className="form">
                <h2>Alumno</h2>
                <div>
                  <Field className="inputField" name="name" component="input" placeholder={data.Alumno[0].name} />
                </div>
                <div>
                  <Field className="inputField" name="year" component="input" placeholder={data.Alumno[0].year} />
                </div>
                <div>
                  <Link className="link" to="/parcialI">
                    <button className="buttonS" onClick={props.handleInputChange} >Guardar Información</button>
                  </Link>
                  <Link className="link" to="/Counter">
                    <button className="buttonS">Agregar Contador</button>
                  </Link>
                </div>
          </form>
        </Route>
        <Route exact path="/Counter" component={Counter}></Route>
        </BrowserRouter>
          )
};
export default Form;