// import React from "react";

import React from "react";

export default class UncontrolledFormExample extends React.Component{
    constructor(props){
        super(props)
        this.updateSubmit = this.updateSubmit.bind(this)
        this.input=React.createRef()
    }
    updateSubmit(event){
        alert ("You haave entered the Username and Companyname scuccessfully")
        event.preventDefault()
    }
    render(){
        return (
            <form onSubmit={this.updateSubmit}>
                <h1>Uncontrolled From Example</h1>
                <label>Name: 
                <input type="text" ref={this.input}/>
                </label>
                <label>  
            CompanyName:  
            <input type="text" ref={this.input} />  
        </label>  
        <input type="submit" value="Submit" />  
            </form>
        )
    }
}


//My Example

// export default class ExampleSEc extends React.Component{
//     constructor(props){
//         super(props)
//         this.newForm=this.newForm.bind(this)
//          this.nameInput = React.createRef();
//         this.companyInput = React.createRef();
//     }
//     newForm(event){
//         alert("You Have enter user name and companyname ")

//         const nameValue = this.nameInput.current.value;
//         const CompanyValue = this.companyInput.current.value;

//         console.log( `Name:${nameValue}`);
//         console.log(CompanyValue);
        
//         event.preventDefault()
//     }
//     render(){
        
        
//         return (
//             <form onSubmit={this.newForm}>
//                 <h1>Uncontrolled For Example</h1>
//                 <lable>Name :
//                 <input type="text" ref={this.nameInput}/></lable>
//                 <lable>Company Name :
//                 <input type="text" ref={this.companyInput}/></lable>
//                 <input type="submit" value="Submit"/>
               
//             </form>

//         )
//     }
// }