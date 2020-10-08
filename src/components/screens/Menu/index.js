import './style.css';
import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import InformationEdit from '../InformationEdit';
import { Form } from 'react-final-form';
import Form1 from '../Form';

class Menu extends React.Component {
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
            <div>
    <div className="SignIn">
     <h1>SignIn</h1>
     <Form
        onSubmit={this.onSubmit}
        validate={this.validate}
        render={Form1}
  />
    </div>
  );
          
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