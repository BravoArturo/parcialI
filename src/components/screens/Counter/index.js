import './style.css';
import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Form from '../Form';
import Counter1 from '../Counter/counter1.js';

class Counter extends React.Component{
  constructor(props){
    super(props);
      this.state={
        counters:[{
          id:0,
          created:Date(),
          updated:0,
          counter:0
        }]
      }
  }
    
  increment=(id, event)=>{
    const index = this.state.counters.findIndex((counter)=>{
      return counter.id === id
    });
    const counter = Object.assign({}, this.state.counters[index]);
    counter.counter ++;
    counter.updated = Date();
    const counters = Object.assign([], this.state.counters);
    counters[index] = counter;
    this.setState({counters:counters});
    return;
  }
    
  decrement=(id, event)=>{
    const index = this.state.counters.findIndex((counter)=>{
      return counter.id === id
    });
    const counter = Object.assign({}, this.state.counters[index]);
    counter.counter --;
    counter.updated = Date();
    const counters = Object.assign([], this.state.counters);
    counters[index] = counter;
    this.setState({counters:counters});
    return;
  }
    
  deleteCounter=(id, event)=>{
    const counters = Object.assign([], this.state.counters);
    counters.splice(id, 1);
    this.setState({counters:counters});
    return;
  }

  add2counter=(event)=>{
    const counters = Object.assign([], this.state.counters);
    counters.push({
      id: this.state.counters.length,
      created: Date(),
      updated: 0,
      counter: 0
    });
    this.setState({counters:counters});
    return;
  }
      
  render(){
    return(
      <BrowserRouter>
        <Route exacth path="/Counter" component={Counter}>
          <div className = "counter">
            <button onClick={this.add2counter} className="buttonCounter">NEW COUNTER</button>
            <div className="counterBack">
              <ul>
              {
              this.state.counters.map((counter)=>{
                return(
                  <Counter1
                    id ={counter.id}
                    created={counter.created}
                    updated={counter.updated}
                    counter={counter.counter}
                    increment={this.increment.bind(this, counter.id)}
                    decrement={this.decrement.bind(this, counter.id)}
                    deleteCounter={this.deleteCounter.bind(this, counter.id)}
                  />
                )
              })
              }
              </ul>
                <Link to="/parcialI" className="link">
                  <button className="buttonCounter">GO BACK</button>
                </Link>
            </div>
          </div>    
        </Route>
        <Route exact path="/parcialI" component={Form}></Route>        
      </BrowserRouter>
    );
  }
}
export default Counter;