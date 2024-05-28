import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="weather">
            <form>
                <div className="row">
                    <div className="col-9">
                      <input type="search" placeholder="Type a city..." className="form-control" />
                    </div>
                    <div className="col-3">
                      <input type="submit" value="search" className="btn btn-primary" /> 
                    </div>
                </div>
            </form>
            <h1>Johannesburg</h1>
            <ul>
                <li>Tuesday 15:00</li>
                <li>Mostly sunny</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Partly Cloudy" />
                    21°C
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 0%</li>
                        <li>Humidity: 28%</li>
                        <li>Wind: 8 km/h</li>
                    </ul>
                </div>
            </div>
        </div>

    );
}