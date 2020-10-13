import './style.css';
import React , { useState } from 'react';
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom';
import { Form } from 'react-final-form';
import Form1 from '../Form';

class Menu extends React.Component {
  constructor(props){
    super(props)
    this.state= {
     Alumno: {
       name: 'ingrese nombre',
       year: 2020
     }
    }
  }

  handleInputChange = (event) => {
    const Alumno = Object.assign({}, this.state.Alumno);
    Alumno.name = event.target("name").value;
    Alumno.year = event.target("year").value;
    this.setState({Alumno:Alumno});
  }

  onSubmit(values) {
    console.log('Submitting form', values);
  }

  validate(values) {
    if (values && values.firstName && values.firstName.length < 3);
    console.log('El nombre debe ser mayor a 3 caracteres');
  }
    render(){
      return(
        <BrowserRouter>
        <Redirect to="/parcialI"/>
          <Route exact path="/parcialI" component={Menu}>
          <div className="formContainer">
            <Form 
                onSubmit={this.onSubmit}
                validate={this.validate}
                render={Form1}
                name = {this.state.Alumno.name}
                year ={this.state.Alumno.year}
              />   
          </div>
          </Route>
        </BrowserRouter>
      );
    }
  }
  export default Menu;