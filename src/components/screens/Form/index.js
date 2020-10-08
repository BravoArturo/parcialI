import './style.css';
import React from 'react';
import { Field } from 'react-final-form';

function Form(props) {
    return (
            <form className="SignInForm" onSubmit={props.handleSubmit}>
              <h2>Formulario de ejemplo</h2>
              <div>
                <label>Nombre</label>
                <Field name="firstName" component="input" placeholder="Nombre" />
              </div>
              <div>
                <label>Email</label>
                <Field name="email" component="input" placeholder="Email" />
              </div>
              <div>
                <label>Password</label>
                <Field name="password" component="input" placeholder="***" />
              </div>

              <button type="Enviar">Submit</button>
        </form>
          )
};

export default Form;