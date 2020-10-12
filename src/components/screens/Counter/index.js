import './style.css';
import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Form from '../Form';
import Counter1 from '../Counter/counter1.js';
import counter from '../Counter/counter1.js';

class Counter extends React.Component {
 
  
constructor(props) {
      super(props);
      this.state = {
        counters: [{
          id: 0,
          created: Date(),
          updated: 0,
          counter: 5,
        },
        {
          id: 1,
          created: Date(),
          updated: 0,
          counter: 7
        }
      ]
      }
    }

    increment = (id, e) => {
      const counterss = this.state.counters.find((counter) =>{
        return counter.id === id
      });
      const counter = Object.assign([], this.state.counters[id]);
      counter.counter =+1;
      const counters = Object.assign([], this.state.counters);
      counters[counterss] = counter;
      this.setState({counters:counters});
      }
       
    decrement = (id, e) => {
      const counterss = this.state.counters.find((counter) =>{
        return counter.id === id
      });
      const counter = Object.assign([], this.state.counters[id]);
      counter.counter =-1;
      const counters = Object.assign([], this.state.counters);
      counters[counterss] = counter;
      this.setState({counters:counters});
      return;
      }

 

    deleteCounter = (id, event) => {
      const counters = Object.assign([], this.state.counters);
      counters.splice(id, 1);
      this.setState({counters:counters});
      return;
    }

    add2counter = (event) => {
      const counters = Object.assign([], this.state.counters);
      counters.push({
        id: this.state.counters.length,
        created: Date(),
        updated: 0,
        counter:0
      });
      this.setState({counters:counters});
      return;
    }
      


    render(){
      return(
        <BrowserRouter>
        <Route exacth path="/Counter" component={Counter}>
            <div className = "counter">
            <button onClick={this.add2counter}>NEW COUNTER</button>
              <ul>
                {
                  this.state.counters.map((counter)=>{
                    return(<Counter1 id ={counter.id}
                      created={counter.created}
                      updated={counter.updated}
                      counter={counter.counter}
                      deleteCounter={this.deleteCounter.bind(this, counter.id)}
                    />)
                  })
                }
              </ul>
            </div>
          <Link to="/parcialI">
            GO BACK
          </Link>
        </Route>
          <Route exact path="/parcialI" component={Form}></Route>
        
        </BrowserRouter>
      );
    }
  }

  export default Counter;