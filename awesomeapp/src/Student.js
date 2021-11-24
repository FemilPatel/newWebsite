//import { render } from '@testing-library/react';
//import React from 'react';
//import React, { Component } from "react";
//Props
/*const Student = props => {
    return (
       // <div>
            //<h1>Hello {props.name}</h1>
            //<h2>Your Roll is{props.roll}</h2>
        //</div>
        //propr in Array
        <div>
            <h1>Hello {props.name.join(", ")}</h1>
            <h2>Your Roll is {props.roll.join(", ")}</h2>
        </div>
    );
};
export default Student;
*/

//State within constructor using
//State without constructor using 
/*class Student extends Component{
    constructor(props) {
        super(props);
        this. state = {
            list: this.props.name
        };
    }
    render() {
        const { list } = this.state
        return (
            <div>
            <h1>Hello This is The ReactJS</h1>
             {
                   list.map(element => {debugger
                       return  <h1>{element}</h1>
                    })
                }
            </div>
        );
    }
}
export default Student;
*/

//setState method using modify State
/*class Student extends Component {
   
    constructor(props) {
        super(props);
        this. state = {
            name: "Rahul",
            roll: this.props.roll
        };
    }
    handleClick = () => {
         this.setState({ name: "Femil", roll:"101" });
        //console.log("a Clicked",this)
        //this.setState((state, props) => {
           //console.log(props.roll);
        //});
    }
    render() {
        return (
            <div>
            <h1>Hello This is The ReactJS</h1>
                <h1>Hello, {this.state.name} Your Roll Number is {this.state.roll}</h1 >
                <a onClick={this.handleClick}>Submit</a>
            </div>
        );
    }
}
export default Student;

*/

//Class Component Event Handler
/*class Student extends Component{
    constructor(props){
        super(props); 
        this.state = {
            name: "Femil",
            roll : this.props.roll
        };
        //this.handleClick = this.handleClick.bind(this);
    }
    //handleClick  ()  {
       // console.log("a Clicked", this);
    //}
    
    handleClick = () => {
        console.log("a Clicked", this);
    }
    render() {
        return (
            <div>
                <h1>Hi..{this.state.name}Your Roll Number {this.state.roll}
                </h1>
                <a onClick={this.handleClick}>Click me</a>
            </div>
        );
    }
}
export default Student; */

//Function Component Event Handler
/*function Student(props) {
    function handleClick  (prev) {
        prev.preventDefault();
        console.log("Button Click");
    }
    return (
        <div>
            <h1>Hello Event {props.name}</h1>
            <a href ="http://www.W3Schools.com" onClick={handleClick}>Click Me</a>
        </div>
    );
}
export default Student; 
*/
