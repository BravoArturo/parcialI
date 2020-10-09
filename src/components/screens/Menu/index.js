import './style.css';
import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import InformationEdit from '../InformationEdit';
import { Form } from 'react-final-form';
import Form1 from '../Form';
import data from '../../data'

class Menu extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      this:data.Alumno[0].name = 'ingrese nombre',
      this:data.Alumno[0].year = 2020,
    }
  }
  handleInputChange = (event) => {
    this.setState({
      this:data.Alumno[0].name = event.target("name").value,
      this:data.Alumno[0].name = event.target("year").value,
    })
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
          <Route exact path="/parcialI" component={Menu}>
          <div className="formContainer">
            <Form
                onSubmit={this.onSubmit}
                validate={this.validate}
                render={Form1}
              />   
          </div>
            <Link to="/editForm">
              Go to edit
            </Link>
          </Route>
          <Route exact path="/editForm" component={InformationEdit}></Route>
        </BrowserRouter>
      );
    }
  }
  export default Menu;