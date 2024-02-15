import React from "react";
import PropTypes from "prop-types"
class StateVsProps extends React.Component {
    
    render(defaultProps){
        return (
            <div>
                <h1>State</h1>
                <Stateee/>
                <Propsss 
                    propArray1={this.props.propArray1}
                    propArray2={this.props.propArray2}
                    propArray3={this.props.propArray3}
                    propArray4={this.props.propArray4}
                    propArray5={this.props.propArray5}
                    propArray6={this.props.propArray6}
                    propArray7={this.props.propArray7}
                    propArray8={this.props.propArray8}
                />
                <h2>Diffrence Beetween State & Props</h2>
                <table className="custom-table"> 
                <tr>
                  <th>
                    <h3>Props</h3>
            
                  </th>
                  
                 <th>
                    <h3>State</h3>
                 </th>
                </tr>
               </table>

 
                </div>
        )
    }
}
class Propsss extends React.Component{
    render(){
        return (
            <div>
            <h1>Props</h1>
            <p>{this.props.description}</p>
            
            </div>
        )
    }





}

class Stateee extends React.Component{

    constructor(){
        super()
        this.state={
        
            description:"The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.",
            
        
        }
    }
    render(){
        return (
            <div>
                <p>{this.state.description}</p>
            </div>
        )
    }






}
Propsss.propTypes = {
    description: PropTypes.string,
    propArray1: PropTypes.array,
    propArray2: PropTypes.array,
    propArray3: PropTypes.array,
    propArray4: PropTypes.array,
    propArray5: PropTypes.array,
    propArray6: PropTypes.array,
    propArray7: PropTypes.array,
    propArray8: PropTypes.array,


  };
  


Propsss.defaultProps = {
    description: "Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.",
    propArray1: ["Props are read-only."],
    propArray2: ["Props are immutable."],
    propArray3: ["Props allow you to pass data from one component to other components as an argumen"],
    propArray4: ["Props can be accessed by the child component."],
    propArray5: ["Props are used to communicate between components."],
    propArray6: ["Stateless component can have Props."],
    propArray7: ["Props make components reusable."],
    propArray8: ["Props are external and controlled by whatever renders the component."],
  };
  


export default StateVsProps