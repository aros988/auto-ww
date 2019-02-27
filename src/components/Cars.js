import React, { Component } from 'react';

class Cars extends Component {
  render() {

    const cars = this.props.selectedCar ? this.props.items.filter((car) => car.id === this.props.selectedCar) : this.props.items;
    

    return <div className="cars-gallery">
      {cars.map(car => (
        <div key={car.id}>
          <div className="cars-gallery">
          <img
            src={car.image}
            alt="mustangGT"
            className="cars"
          />
        <div className="card-body">
          <ul>
            <li>Type:{car.type}</li>
            <li>HP:{car.hp}</li>
            <li>Color:{car.color}</li>
            <li>Fuel type:{car.fuel_type}</li>
            <li>Fuel consumption-urban mode:{car.fuel1}</li>
            <li>Fuel consumption 90km/h:{car.fuel2}</li>
            <li> Automatic air conditioning:{car.automatic_air_conditioning}</li>
          </ul>
        </div>
          </div>
        </div>
      ))}
    </div>
  }
};

export default Cars;
