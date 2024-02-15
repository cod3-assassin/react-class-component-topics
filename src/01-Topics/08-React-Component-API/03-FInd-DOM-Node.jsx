import React from "react";
 import ReactDOM from 'react-dom';



export default class FindDomNodeExample extends React.Component {
    constructor() {
        super()
        this.findDomNodeHandler1 = this.findDomNodeHandler1.bind(this);
        this.findDomNodeHandler2 = this.findDomNodeHandler2.bind(this);
    };
    findDomNodeHandler1() {
        var myDiv = document.getElementById('myDivOne'); // Corrected here
        ReactDOM.findDOMNode(myDiv).style.color = "red"; // Corrected here
    }
    findDomNodeHandler2() {
        var myDiv = document.getElementById('myDivTwo'); // Corrected here
        ReactDOM.findDOMNode(myDiv).style.color = "blue"; // Corrected here
    }
    render() {
        return (
            <div>
                <h1>ReactJS Find DOM Node Example</h1>
                <button onClick={this.findDomNodeHandler1}>FIND_DOM_NODE_1</button>
                <button onClick={this.findDomNodeHandler2}>FIND_DOM_NODE_2</button>
                <h3 id="myDivOne">JTP-NODE1</h3>
                <h3 id="myDivTwo">JTP-NODE2</h3>
            </div>
        )
    }
}

// export default class FindComExm extends React.Component{
//     constructor(){
//         super()
//         this.domNodeExp1 = this.domNodeExp1.bind(this)
//         this.domNodeExp2 = this.domNodeExp2.bind(this)
//         this.domNodeExp3 = this.domNodeExp3.bind(this)
//     }
//      domNodeExp1 (){
//         var OneDiv = document.getElementById("firstDiv")
//         ReactDOM.findDOMNode(OneDiv).style.color="red"
//      }
//      domNodeExp2 (){
//         var secDiv = document.getElementById("secDiv")
//         ReactDOM.findDOMNode(secDiv).style.color="yellow"
//      }
//      domNodeExp3 (){
//         var thirdDiv = document.getElementById("thirdDiv")
//         ReactDOM.findDOMNode(thirdDiv).style.color="blue"
//      }
//      render(){
//         return (
//             <div>
//                 <button onClick={this.domNodeExp1}>Firts</button>
//                 <button onClick={this.domNodeExp2}>Second</button>
//                 <button onClick={this.domNodeExp3}>Third</button>
//                 <h2 id='firstDiv'>John Doe</h2>
//                 <h2 id='secDiv'>Karl L</h2>
//                 <h2 id='thirdDiv'>John Wick</h2>
//             </div>
//         )
//      }

// }


