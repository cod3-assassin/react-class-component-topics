import React from "react"
class PropsANDState extends React.Component{
    constructor(props){
        super(props)
        this.obj={
            name:'Wasim',
            age : 23,
            exp : '3 Years'
        }
    }
    render(){
        return (
            <div >
            <NewProps npProps ={this.obj.name} age={this.obj.age} exp={this.obj.exp}/>

            </div>
        )
    }

} 
class NewProps extends React.Component{
    render(){
        return (
            <div>
                <h1 className="div">Example of Props and State</h1>
                <h3>Name:{this.props.npProps}</h3>
                <h3>Age :{this.props.age}</h3>
                <h3>Exp :{this.props.exp}</h3>
                <p>It is possible to combine both state and props in your app. You can set the state in the parent component and pass it in the child component using props. It can be shown in the below example.</p>
                
            </div>
        )
    }
}
export default PropsANDState