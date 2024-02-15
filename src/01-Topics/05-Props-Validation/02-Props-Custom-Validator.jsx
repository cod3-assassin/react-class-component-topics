import React from "react";

class CustomValidation extends React.Component {
  render() {
    return (
      <div>
        <h1>Custom Validation Example</h1>
        {/* Your component content goes here */}
      </div>
    );
  }
}
CustomValidation.propTypes = {
  customProp: function(props, propName, componentName) {
    if (!item.isValid(props[propName])) {
      return new Error('Validation failed!');
    }
  }
};

export default CustomValidation;
