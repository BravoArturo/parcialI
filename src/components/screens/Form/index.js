import './style.css';
import React from 'react';
import { Field } from 'react-final-form';
import data from '../../data.js';
import { BrowserRouter, Link, Route } from 'react-router-dom';

function Form(props) {
    return (
        <BrowserRouter>
        <Route exact path="/parcialI">
        <form className="SignInForm" onSubmit={props.handleSubmit}>
              <h2>Alumno</h2>
              <div>
                <Field name="firstName" component="input" placeholder={data.Alumno[0].name} />
              </div>
              <div>
                <Field name="year" component="input" placeholder={data.Alumno[0].year} />
              </div>
              <Link to="/editForm">
                <button type="Enviar">Editar Información</button>
              </Link>
            <Link>
            <button type="Enviar">Agregar Contador</button>
            </Link>
        </form>
        </Route>
        <Route exact path="/editForm">
        <form className="SignInForm" onSubmit={props.handleSubmit}>
              <h2>Alumno</h2>
              <div>
                <Field name="firstName" component="input" placeholder={data.Alumno[0].name} />
              </div>
              <div>
                <Field name="year" component="input" placeholder={data.Alumno[0].year} />
              </div>
              <Link to="/parcialI">
                <button type="Enviar">Guardar Información</button>
              </Link>
            <Link>
            <button type="Enviar">Agregar Contador</button>
            </Link>
        </form>
        </Route>
        </BrowserRouter>

          )
};

export default Form;