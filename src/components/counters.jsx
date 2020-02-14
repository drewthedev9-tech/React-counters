import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
   
   
    // map function makes a new loops thorugh and creates a new counter component.
    render() { 
        
        console.log("counters - rendered");
        // Destructuring.
        const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props;
        return (
            <div>
           <button
           onClick={onReset} 
           className="btn btn-primary btn-sm m-2"
           >
           Reset
           </button>
            {/*maps thrpugh counters satte function(above) & puts it in a new instance of the
            Counter component. */}
            {counters.map( counter => 
                <Counter
                 key={counter.id} 
                 /*Bubbling the event up to teh parent component*/
                 onDelete={onDelete} 
                 onIncrement={onIncrement}
                 onDecrement={onDecrement}
                 /*referring to the counter object counters(above)*/
                 counter={counter}
                
                 />
                
        )}
            </div>
           );
    }
}
 
export default Counters ;