import React, { Component } from 'react';

class Counter extends Component {
    stat = {
        count: 0,
        tags: ['tag1','tag2','tag3']
       
    };



    handleIncrement = product => {
        console.log(product);
        this.setState({count: this.state.count + 1})
    };

   
    render() {

        return(
        // Need () and the <div></div>
         <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick = {() => this.handleIncrement()} 
            className ='btn btn-seconadary btn-sm'>Increment</button>
            <ul>
               {this.state.tags.map(tag => <li key= {tag}>{tag}</li>)}
            </ul>
        </div>
        ); 
    }
   
    formatCount(){
        const {count} = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
   
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
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