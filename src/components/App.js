import React, { Component } from 'react';
import InputForm from './InputForm';
import Select from './Select';
import Cars from './Cars';

import { cars } from "./Cars.json";

class App extends Component {
  state = { cars: cars };
  render() {
    console.log(this.state)
    return <div>
      <h1>Rent a Car with ReactJS</h1>

      <div style={{ margin: '16px', position: 'relative' }}>

        <div>
          <Select
            onChange={(values) => { this.setState(values) }}
            items={cars}
          />
        </div>
        <InputForm />
        <Cars items={cars} selectedCar={this.state.selectedCar} selectedColorCar={this.state.selectedColorCar} selectedHpCar={this.state.selectedHpCar} />
      </div>
    </div>
  }
};

export default App;