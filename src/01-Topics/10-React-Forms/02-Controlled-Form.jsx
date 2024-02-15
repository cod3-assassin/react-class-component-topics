import React from "react";

export default class ControlledExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handelChange = this.handelChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
        this.nameValue = React.createRef()
    }

    handelChange(event) {
        this.setState({ value: event.target.value });
        
    }

    handelSubmit(event) {
        alert("You have submitted the input successfully"+ "  "+ this.state.value);
        const nweNameValue = this.nameValue.current.value
        console.log(nweNameValue);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <h1>Controlled Form Example</h1>
                <label>
                    Name: 
                    <input type="text" ref={this.nameValue} value={this.state.value} onChange={this.handelChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
