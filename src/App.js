import React, { Component } from 'react';
import NavBar from "./components/navbar";
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
        {id: 1, value: 4 },
        {id: 2, value: 0 },
        {id: 3, value: 0 },
        {id: 4, value: 0 }
    ]
  };

  // Always needs defined parameter "props"
  constructor(props){
    super(props);
    console.log('App-constructor', this.props);
  }

  componentDidMount(){
    console.log('App-Mounted');
  }


handleIncrement = counter =>{
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
};

handleReset=()=>{
    // maps through counters grabs value and returns 0(reset value).
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    // sets the state of the new array from map function.
    this.setState({counters});

};

handleDelete = counterId => {
//   creates new array with put the without  the specified ID frm counters.
   const counters = this.state.counters.filter(c => c.id !== counterId);
//    overrides the counters without speciified id.
   this.setState({counters});
};
  render() { 
    console.log("App-rendered");
    return (
      <React.Fragment>
        <NavBar 
        totalCounters={this.state.counters.filter(counter =>counter.value > 0).length}
        />
        <main claasname="container">
          <Counters 
          counters={this.state.counters}
          /* rainsing events passing to children components*/
          onReset= {this.handleReset} 
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}/>
        </main>
        </React.Fragment>
        
        
      );
  }
}
 
export default App;


