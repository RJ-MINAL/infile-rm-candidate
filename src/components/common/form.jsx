import React, { PureComponent } from "react";
import Input from "./input";
// import Select from "./select";

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
      <button  className="btn btn-primary">
        {label}
      </button>
    );
  }

//   renderSelect(name, label, options) {
//     const { data, errors } = this.state;

//     return (
//       <Select
//         name={name}
//         value={data[name]}
//         label={label}
//         options={options}
//         onChange={this.handleChange}
//         error={errors[name]}
//       />
//     );
//   }

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
