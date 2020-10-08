import './style.css';
import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Counter from '../Counter';
import Menu from '../Menu';

class InformationEdit extends React.Component {
    render(){
      return(
        <BrowserRouter>
        <Route exacth path="/editForm" component={InformationEdit}>
        <div>hola soy el formulario editable</div>
          <Link to="/counter">
            Go to counter
          </Link>
          <Link to="/parcialI">
            Go back
          </Link>
        </Route>
          <Route exact path="/Counter" component={Counter}></Route>
          <Route exact path="/parcialI" component={Menu}></Route>
        </BrowserRouter>
      );
    }
  }
  export default InformationEdit;