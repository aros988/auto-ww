import React, { Component } from 'react';
import SelectForm from './SelectForm';
import InputForm from './InputForm';
import Cars from './Cars';

import { cars } from "./Cars.json";

class App extends Component {
  state = { cars };
  render() {
    return <div>
      <h1>Rent a Car with ReactJS</h1>

      <div style={{ margin: '16px', position: 'relative' }}>
        <SelectForm
          name="rent[auto_id]"
          onChange={(item) => this.setState({ selectedCar: item.id })}
          items={cars.map(car => ({ value: car.title, id: car.id }))}
        />
        <InputForm />
        <Cars items={cars} selectedCar={this.state.selectedCar} />
      </div>
    </div>
  }
};

export default App;