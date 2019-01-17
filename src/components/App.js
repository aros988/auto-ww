import React, { Component } from 'react';
import SelectForm from './SelectForm';

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
                { value: 'Skoda Fabia', id: 3 },
                { value: 'Renault Megane', id: 4 },
              ]}
            />
          </div>
        </div>
      }
    };

export default App;