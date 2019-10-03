import React from "react";
import moment from "moment";
export default class Clock extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     
     time: moment().format('h:mm:ss a')
   };
 }
 componentDidMount() {
   this.intervalID = setInterval(
     () => this.tick(),
     1000
   );
 }
 componentWillUnmount() {
   clearInterval(this.intervalID);
 }
 tick() {
   this.setState({
     
     time: moment().format('h:mm:ss a')
      });
 }
 render() {
   return (
     <h1 className="clock">
       Current time is {this.state.time}.
     </h1>
   );
 }
}

// import React, { Component } from 'react';
// import moment from "moment"


// export default class Clock extends Component {
//   constructor(){
//       super()
//       this.state = {
//           time: moment().format('h:mm:ss')
//       }
//   }
  

//   handleTime = () => {
//       while(true){
//       this.setState({
//           time: moment().format('h:mm:ss')
//       })
//     }
//   }
//   render() {
//     return (
//       <div>
//          <h1>{this.state.time}</h1>
//       </div>
//     )
// }
// }