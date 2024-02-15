import React from "react";

export default class LoggedIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            LoggedIn : !true,
        }
        
        
        
    }
    // componentDidMount() {
            
    //     setTimeout(() => {
    //         this.setState({
    //             LoggedIn: !false
    //         });
    //     }, 2000);}
        
    
    render(){
        const LoggedIn = this.state.LoggedIn;
        return <div>
            Welcom ! {LoggedIn ? "Back":"Plase Login First"}
        </div>
    }
}