import React, { Component } from 'react';




class InputForm extends Component {

    state = {

        firstName: "",
        lastName: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return <div className='First-LastName'>
            <form onSubmit={this.handleSubmit}>

                <input
                    id="firstname"
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    placeholder="First Name"
                />

                <input
                    id="lastname"
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    placeholder="Last Name"
                />

                <label>Pick up Date:</label>
                <input
                    id="pickdate"
                    type="date"
                    name="pickdate"
                    onChange={this.handleChange}
                    placeholder="MM/DD//YYYY"
                />

                <label>Give back Date:</label>
                <input
                    id="givedate"
                    type="date"
                    name="givedate"
                    onChange={this.handleChange}
                    placeholder="MM/DD//YYYY"
                />
                <button type="submit">Send reservation!</button>
            </form>
            <h1>{this.state.FirstName}</h1>
            <h1>{this.state.LastName}</h1>
        </div>
    }
};

export default InputForm;