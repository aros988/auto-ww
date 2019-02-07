import React, { Component } from 'react';
import SelectForm from './SelectForm';
import InputForm from './InputForm';
import Cars from './Cars';
class App extends Component {
    render() {
        return <div>
          <h1>Rent a Car with ReactJS</h1>
          <div style={{margin: '16px', position: 'relative'}}>        
            <SelectForm
              name="rent[auto_id]"
              items={[
                { value: 'BMW X3', id: 1 },
                { value: 'Ford Mustang GT', id: 2 },
                { value: 'Mercedes CLS', id: 3 },
                { value: 'Audi RS6', id: 4 },
              ]}
            />
            <InputForm />
            <Cars />
          </div>
        </div>
      }
    };

export default App;