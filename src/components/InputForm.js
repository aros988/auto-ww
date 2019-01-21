import React, { Component } from 'react';




class InputForm extends Component {

    state = { 
        
        firstName: "",
        lastName: "" 
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return <div className ='First-LastName'>
        <form>
            
            <input 
                type="text"
                name="firstName"
                value= {this.state.FirstName}
                onChange= {this.handleChange}
                placeholder= "First Name"
            />
            
            <input 
                type="text"
                name="lastName"
                value= {this.state.LastName}
                onChange= {this.handleChange}
                placeholder= "Last Name"
            />

            <label>Pick up Date:</label>
            <input
            type="text"
            name="birthdate"
            type="text"
            placeholder="MM/DD//YYYY"
            />

            <label>Give back Date:</label>
            <input
            type="text"
            name="birthdate"
            type="text"
            placeholder="MM/DD//YYYY"
            />
        </form>
            <h1>{this.state.FirstName}</h1>
            <h1>{this.state.LastName}</h1>
        </div>
      }
    };

export default InputForm;