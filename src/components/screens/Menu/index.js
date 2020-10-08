import './style.css';
import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import InformationEdit from '../InformationEdit';

class Menu extends React.Component {
    render(){
      return(
        <BrowserRouter>
          <Route exact path="/" component={Menu}>
            <div>hola</div>
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