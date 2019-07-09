import React, { Component } from 'react';

class Counter extends Component {
    state = {
        // getting props from the counters component.
        value: this.props.counter.value
        
       
    };



    handleIncrement = product => {
        this.setState({value: this.state.value + 1})
    };

   
    render() {
        return(
        // Need () and the <div></div>
         <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick = {() => this.handleIncrement()} 
            className ='btn btn-seconadary btn-sm'>Increment</button>

            <button
            /*gets on delete methosd with via props from counters component */
             onClick={()=>this.props.onDelete(this.props.counter.id)}  
            className ='btn btn-danger btn-sm m-2'
            >
            Delete
            </button>
            
        </div>
        ); 
    }
   
    formatCount(){
        const {value: count} = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
   
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

   
}

// constructor() {
//     // needed to inherit the Counter class properties
//     super();
// //    with bind can set the value of this.
//     this.handleIncrement = this.handleIncrement.bind(this);
// }
 
export default Counter ;