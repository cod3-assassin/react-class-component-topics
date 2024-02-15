import React from "react";

class ControlledExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      controlled: "Controlled Component",
      controlledDescription:
        "A controlled component is bound to a value, and its changes will be handled in code by using event-based callbacks. Here, the input form element is handled by the React itself rather than the DOM. In this, the mutable state is kept in the state property and will be updated only with setState() method.\n\nControlled components have functions that govern the data passing into them on every onChange event occurs. This data is then saved to state and updated with setState() method. It makes component have better control over the form elements and data.",
      uncontrolled: "Uncontrolled Component",
      uncontrolledDescription:
        "It is similar to the traditional HTML form inputs. Here, the form data is handled by the DOM itself. It maintains its own state and will be updated when the input value changes. To write an uncontrolled component, there is no need to write an event handler for every state update, and you can use a ref to access the value of the form from the DOM.",
      showControlled: true
    };
  }

  toggleDisplay = () => {
    this.setState((prevState) => ({
      showControlled: !prevState.showControlled
    }));
  };

  render() {
    return (
      <div>
        <h1>
          {this.state.showControlled
            ? this.state.controlled
            : this.state.uncontrolled}
        </h1>
        <p>
          {this.state.showControlled
            ? this.state.controlledDescription
            : this.state.uncontrolledDescription}
        </p>
        {this.state.showControlled ? <TableInfoControlled /> : <TableInfoUncontrolled />}
        <button onClick={this.toggleDisplay}>
          Componenet Display
        </button>
      </div>
    );
  }
}

class TableInfoControlled extends React.Component {
  render() {
    return (
      <section>
        <h1>Controlled</h1>
        <table>
          <tr>
            <th>SN</th>
            <th>Controlled</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>It does not maintain its internal state.</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Here, data is controlled by the parent component.</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>It accepts its current value as a prop.</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>It allows validation control.</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>It has better control over the form elements and data.</td>
          </tr>
        </table>
      </section>
    );
  }
}

class TableInfoUncontrolled extends React.Component {
  render() {
    return (
      <section>
        <h1>Uncontrolled</h1>
        <table>
          <tr>
            <th>SN</th>
            <th>Uncontrolled</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>It maintains its internal states.</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Here, data is controlled by the DOM itself.</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>It uses a ref for its current values.</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>It does not allow validation control.</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>It has limited control over the form elements and data.</td>
          </tr>
        </table>
      </section>
    );
  }
}

export default ControlledExample;
