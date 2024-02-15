import React from "react";
import PropTypes from "prop-types";


class ProPTypes extends React.Component{
    render(){
        return (
            <div>
                <h1>ReactJS Props Validate</h1>
                <table>
                <tr>
                    <th>Type</th>
                    <th>Value</th>
                    <th>  Valid</th>
                    </tr>
                    <tr>
                        <td>Array</td>
                        <td>{this.props.propArray}</td>
                        <td>{this.props.propArray ? 'True':'false'}</td>
                    </tr>
                    <tr>
                        <td>Boolean</td>
                        <td>{this.props.propBool ? "True":'False'}</td>
                        <td>{this.props.propBool ? "True":'False'}</td>
                    </tr>
                    <tr>
                    <td>Function</td>  
                      <td>{this.props.propFunc(5)}</td>  
                      <td>{this.props.propFunc(5) ? "true" : "False"}</td>  
                    </tr>
                    <tr>
                        <td>String</td>
                        <td>{this.props.propString}</td>
                        <td >{this.props.propString ? 'True':'False'}</td>
                    </tr>
                    <tr>
                        <td>Number</td>
                        <td>{this.props.propNumber}</td>
                        <td >{this.props.propNumber ? 'True':'False'}</td>
                    </tr>
                </table>
            </div>
        )
    }

}
ProPTypes.propTypes={
    propArray:PropTypes.array.isRequired,
    propBool:PropTypes.bool.isRequired,
    propFunc:PropTypes.func,
    propString:PropTypes.string,
    propNumber:PropTypes.number


}
ProPTypes.defaultProps={
    propArray:[1,2,3,4,5],
    propBool:true,
    propFunc: function(x){return x+5},
    propString:'Props',
    propNumber:1


}
export default ProPTypes