import React, { Component } from 'react';


class Cars extends Component {
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
                        <li>Type: <span>Sport</span></li>
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
                <h2>BMW X3</h2>
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