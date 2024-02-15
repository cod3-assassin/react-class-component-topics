import React from "react";

class DefaultPrpos extends React.Component{
    render(){
        return (
            <div>
                <h1>Welcome to props Example</h1>
                <h3>This is {this.props.name}</h3>
                <p>This is exaple of default props in jsx and React</p>
            </div>
        )
    }

}
DefaultPrpos.defaultProps={
    name:'Default Props'
}
export default DefaultPrpos