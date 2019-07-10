import React, { Component } from 'react';

class Counter extends Component {

    render() {
        return(
        // Need () and the <div></div>
         <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
            onClick={()=>this.props.onIncrement(this.props.counter)} 
            className ='btn btn-seconadary btn-sm'>
            Increment
            </button>

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
        const {value} = this.props.counter;
        return value === 0 ? <h1>Zero</h1> : value;
    }
   
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
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