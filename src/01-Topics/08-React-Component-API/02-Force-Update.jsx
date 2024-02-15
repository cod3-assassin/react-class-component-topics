import React from "react";
export default class ForceUpdateExample extends React.Component{
    constructor(){
        super()
        this.forceUpdateState=this.forceUpdateState.bind(this)
    }
    forceUpdateState(){
        this.forceUpdate()
    }
    ;
    render(){
        
        return(
        <div>
            <h1>Example to Force State</h1>
            <h3> Random Number generate</h3>
            <h3>{Math.random()}</h3>
            <button onClick={this.forceUpdateState}>Force Update</button>
        </div>)
    }
}



// export default class ForceUpdateExample extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       color: "#000000"
//     };
//   }

//   forceUpdateData() {
//     this.forceUpdate();
    
//   }

//   randomColor = () => {
//     let letters = "0123456789";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   changeColor = () => {
//     const getColor = this.randomColor();
//     this.setState({ color: getColor }); // Use setState to update state
    
//   };

//   render() {
//     const { color } = this.state;
//     const h1Style = {
//       color: color
//     };

//     return (
//       <div>
//         <h1 style={h1Style}>Example of Force Update</h1>
//         <button onClick={() => { this.forceUpdateData(); this.changeColor(); console.log() }}>
//           Force Update
//         </button>
//       </div>
//     );
//   }
// }
