import React, { Component } from 'react';

class Counter extends Component {
    // Gtes the differetn states.
componentDidUpdate(prevProps, prevState){
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value){
        // Ajax call and get new dat from server.
    }

}
// method called just before a compnent is removed from the DOM
componentWillUnmount(){
    console.log("Counter-unmount");
}
    render() {
        console.log("counter- rendered");
        return(
        // Need () and the <div></div>
        
         <div className ="row">
        <div className="col-1">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className ="col">
        <button 
        onClick={()=>this.props.onIncrement(this.props.counter)} 
        className ='btn btn-seconadary btn-sm'>
        +
        </button>

        <button 
        onClick={()=>this.props.onDecrement(this.props.counter)} 
        className ='btn btn-seconadary btn-sm m-2'
        // disabling the decrement button on value "0".
        disabled={this.props.counter.value === 0 ? "disabled" :""}
        >
        -
        </button>

        <button
        /*gets ondelete methosd with via props from counters component */
         onClick={()=>this.props.onDelete(this.props.counter.id)}  
        className ='btn btn-danger btn-sm '
        >
        Delete
        </button>
        </div>
            
           
            
        </div>
        ); 
    }
   
    formatCount(){
        // object destructuring.
        const {value} = this.props.counter;
        // includes the "Zero" being a JSX expression.
        // also written in ternary operator.
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