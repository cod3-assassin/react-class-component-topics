import React from "react";

class ConstructorExample extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:"www.javapoint.com",
            
        }
        this.handelEvent=this.handelEvent.bind(this)
        
    }
    handelEvent(){
        console.log(this.props);
    }
    render(){
        return(
            <><h1>React Constructor Example</h1>
             <input type ="text" value={this.state.data} /> 
            <button onClick={this.handleEvent}>Please Click</button>  
            

            </>
        )
    }
}
export default ConstructorExample