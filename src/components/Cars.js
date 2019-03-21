import React, { Component } from 'react';


class Cars extends Component {


  render() {
    let cars = this.props.items;
    if (this.props.selectedColorCar) {
      cars = cars.filter((car) => car.color === (this.props.selectedColorCar))
    }

    if (this.props.selectedCar) {
      cars = cars.filter((car) => car.id === parseInt(this.props.selectedCar))
    }

    if (this.props.selectedHpCar) {
      cars = cars.filter((car) => car.hp === (this.props.selectedHpCar))
    }



    console.log(cars)

    return <div className="cars-gallery">
      {cars.map(car => (
        <div key={car.id}>
          <div className="cars-gallery">
            <img
              src={car.image}
              alt="cars"
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
                <li>Automatic air conditioning:{car.automatic_air_conditioning}</li>
                <li>Seats:{car.seats}</li>
                <li>Trunk space:{car.space}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  }
};

export default Cars;
