import React, { PureComponent } from "react";
import Input from "./input";

class Form extends PureComponent {
  state = {
    data: {}
  };

  handleSubmit = e => {
    e.preventDefault();

    // validacion
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data });
  };

  renderButton(label) {
    return (
      <button  className="btn btn-primary btn-lg">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
      />
    );
  }
}

export default Form;
