import React from "react";

export default class EventExample extends React.Component{
    constructor(props){
        super(props)
        this.state={
            companyName:''
        }
    }
    changeText(event){
        this.setState({
            companyName : event.target.value
        })
    }
    render(){
        return (
            <div>
                <h2>Sinmple Event Example </h2>
                <lable htmlFor="name">Enter Comapany Name</lable>
                <input type="text" id="companyName" onChange={this.changeText.bind(this)}/>
                <h4>You Entered : {this.state.companyName}</h4>
            </div>
        )
    }

}

// import React from "react";

// export default class Exampl extends React.Component{
//     constructor(props){
//         super()
//         this.state={
//             companyName:''
//         }
//     }
//     handeltext(event){
//         this.setState({
//             companyName:event.target.value
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <h1>Exampl of Event</h1>
//                 <lable htmlFor="name">Enter Comapany Name</lable>
//                 <input type="text" id="companyName" onChange={this.handeltext.bind(this)}/>
//                 <h4>You Enterd : {this.state.companyName}</h4>
//             </div>
//         )
//     }
   
// }