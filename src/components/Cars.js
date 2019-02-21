import React, { Component } from 'react';

import carsJson from "./Carss.json";
class Cars extends Component {

    state = {
        itemsCar: carsJson.cars.map(car => (
        <ul>
        <li>Type:{car.type}</li>
        <li>HP:{car.hp}</li>
        <li>Color:{car.color}</li>
        <li>Fuel type:{car.fuel_type}</li>
        <li>Fuel consumption-urban mode:{car.fuel1}</li>
        <li>Fuel consumption 90km/h:{car.fuel2}</li>
        <li> Automatic air conditioning:{car.automatic_air_conditioning}</li> 
        </ul>
        )),
        itemCar: carsJson.cars.find(el => el.id === 2)
    };


    render() {
        return <div className="cars-gallery">

          
            <img 
            src="https://cdn.pixabay.com/photo/2017/05/23/20/09/mustang-2338394__340.jpg"
            alt="mustangGT"
            className="cars"
            />

            <div className="card-body">
                <h2>Mustang GT</h2>
                    <ul>
                        <li>Type:Sport</li>
                        <li>HP: 183</li>
                        <li>Color: Red</li>
                        <li>Fuel type: PB95 or 98</li>
                        <li>Fuel consumption - urban mode: 12l/100km</li>
                        <li>Fuel consumption 90km/h: 10l/100km</li>
                        <li>Automatic air conditioning: include</li>
                    </ul>
            </div>


            <img 
            src="https://cdn.pixabay.com/photo/2017/04/10/22/44/car-2220023__340.jpg"
            alt="bmwX3"
            className="cars"
            />

            <div className="card-body">
                <h2>{this.state.itemCar.title}</h2>
                {this.state.itemsCar}
                    
            </div>

            <img 
            src="https://cdn.pixabay.com/photo/2017/03/03/22/00/car-2115060__340.jpg"
            alt="mercedesCLS"
            className="cars"
            />

            <div className="card-body">
                <h2>Mercedes CLS</h2>
                    <ul>
                        <li>Type: Sport</li>
                        <li>HP: 183</li>
                        <li>Color: Red</li>
                        <li>Fuel type: PB95 or 98</li>
                        <li>Fuel consumption - urban mode: 12l/100km</li>
                        <li>Fuel consumption 90km/h: 10l/100km</li>
                        <li>Automatic air conditioning: include</li>
                    </ul>
            </div>

            <img 
            src="https://cdn.pixabay.com/photo/2018/04/23/08/00/car-3343430__340.jpg"
            alt="audiRS6"
            className="cars"
            />

            <div className="card-body">
                <h2>Audi ARS6</h2>
                    <ul>
                        <li>Type: Sport</li>
                        <li>HP: 183</li>
                        <li>Color: Red</li>
                        <li>Fuel type: PB95 or 98</li>
                        <li>Fuel consumption - urban mode: 12l/100km</li>
                        <li>Fuel consumption 90km/h: 10l/100km</li>
                        <li>Automatic air conditioning: include</li>
                    </ul>
            </div>

        </div>
      }
    };

export default Cars;

{/* 
itemsCar: carsJson.cars.map(car => (
 
 <li>
      car:<b> {car.id}</b>, car title: <b>{car.title}</b>, car color: <b>{car.Color}</b>
    </li>

*/}