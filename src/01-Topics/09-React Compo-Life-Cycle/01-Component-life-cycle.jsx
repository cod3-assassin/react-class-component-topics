import React, { Component } from "react";

export default class CompoLifeCycleExample extends React.Component{
    constructor(props){
        super(props)
        this.state={
            hello: "Example of Component Life Cycle"
        
        }
        this.changeState = this.changeState.bind(this)
    }
    render(){
        return (
            <div>
                <h1>ReactJS component's Lifecycle</h1>  
                <h3> Hello {this.state.hello}</h3>
                <button onClick={this.changeState}>Click</button>
            </div>
        )
    }

CommentWillMount(){
    console.log('Componenets Will Mount')
}
CommentDidMount(){
    console.log('Componenets Did Mount')
}
changeState(){
    this.setState({hello : "Alll its A greate Example"})
}
ComponentwWillReceiveProps(newPorps){
    console.log("Component Will reacive Props ");

}
shouldComponentUpdate(newPorps,nextState){
    return true
}
componentWillUpdate(nextProps, nextState) {  
    console.log('Component Will UPDATE!');  
 }  
 componentDidUpdate(prevProps, prevState) {  
    console.log('Component Did UPDATE!')  
 }  
 componentWillUnmount() {  
    console.log('Component Will UNMOUNT!')  
 }  

}