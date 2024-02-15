import React from "react";
import { ReactPropTypes } from "prop-types";

class setStateExample extends React.Component{
    constructor(){
        super()
        this.state={
            msg: "Welcome to Set State"
        }
        this.updateSetState= this.updateSetState.bind(this)
    }
    updateSetState(){
        this.setState({
            msg:"Its A example of React Set State "
        })
    }
    render(){
        return(
            <div>
            <h1>{this.state.msg}</h1>
            <button onClick={this.updateSetState}>Set State</button>
            </div>
        )
    }
}
export default setStateExample
