import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 4 },
            {id: 2, value: 0 },
            {id: 3, value: 0 },
            {id: 4, value: 0 }
        ]
      };

    handleReset=()=>{
        // maps through counters grabs value and returns 0(reset value).
        this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
    };

    handleDelete = counterId => {
    //   creates new array with put the without  the specified ID frm counters.
       const counters = this.state.counters.filter(c => c.id !== counterId);
    //    overrides the counters without speciified id.
       this.setState({counters});
    };

    // map function makes a new loops thorugh and creates a new counter component.
    render() { 
        return (
            <div>
           <button
           onclick={this.handleReset} 
           className="btn btn-primary btn-sm m-2">
           Reset
           </button>
            {/*maps thrpugh counters satte function(above) & puts it in a new instance of the
            Counter component. */}
            {this.state.counters.map( counter => 
                <Counter
                 key={counter.id} 
                 onDelete={this.handleDelete} 
                 /*referring to the counter object counters(above)*/
                 counter={counter}
            />
                
        )}
            </div>
           );
    }
}
 
export default Counters ;