import './style.css';
import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import InformationEdit from '../InformationEdit';

class Counter extends React.Component {
    render(){
      return(
        <BrowserRouter>
        <Route exacth path="/Counter" component={Counter}>
        <div>hola soy el contador</div>
          <Link to="/editForm">
            Go back
          </Link>
        </Route>
          <Route exact path="/editForm" component={InformationEdit}></Route>
        </BrowserRouter>
      );
    }
  }
  export default Counter;