import React from "react";
import "../styles/Products.css";
import fly from "../AirImages/flight.avif";
import fht from "../AirImages/fhoot.avif";
import hotel from "../AirImages/hotel.jpg";
import car from "../AirImages/car.jpg";
import fullp from "../AirImages/allpack.jpg";
import first from "../AirImages/firstclass.webp";
import econ from "../AirImages/economyclass.jpg";
import buss from "../AirImages/bunessclass.jpg";
import freight from "../AirImages/freight.jpg";
import pent from "../AirImages/penthouse.avif";
import ecoon from "../AirImages/econroom.jpg";
import broom from "../AirImages/businessroom.jpg";
import froom from "../AirImages/singlebed.jpg";
import suite from "../AirImages/suite.jpg";
import lux from "../AirImages/deluxe.avif";
import comf from "../AirImages/doubleroom.jpg";
import mot from "../AirImages/motel.jpg";




const Products = () => {
  return (
    <div className="body1">
      <div className="side">
        <div className="flight">
          Flights
          <img src={fly} width={200} height={70} alt="pic" />
        </div>
        <div className="fhot">
          Flight+Hotel
          <img src={fht} width={200} height={70} alt="pic" />
        </div>
        <div className="hotel">
          Hotel
          <img src={hotel} width={200} height={70} alt="pic" />
        </div>
        <div className="car">
          Transport
          <img src={car} width={200} height={70} alt="pic" />
        </div>
        <div className="fullp">
          Full Package
          <img src={fullp} width={200} height={70} alt="pic" />
        </div>
      </div>
      <div className="body2">
        <div className="plan">
          <div className="firstClass">
            First Class
            <img src={first} width={200} height={150} alt="pic" />
          </div>
          <div className="economy">
            Economy Class
            <img src={econ} width={200} height={150} alt="pic" />
          </div>
          <div className="bussines">
            Business Class
            <img src={buss} width={200} height={150} alt="pic" />
          </div>
          <div className="freight">
            Freight
            <img src={freight} width={200} height={150} alt="pic" />
          </div>
        </div>
        <div className="flighot">
          <div className="firsui">
            First Class and VIP Suite
            <img src={pent} width={200} height={150} alt="pic" />
          </div>
          <div className="ecodel">
            Economy and Deluxe Room
            <img src={ecoon} width={200} height={150} alt="pic" />
          </div>
          <div className="bussd">
            Business and Double Room
            <img src={broom} width={200} height={150} alt="pic" />
          </div>
          <div className="fsin">
            Freight and Single Room
            <img src={froom} width={200} height={150} alt="pic" />
          </div>
        </div>
        <div className="hotelRooms">
          <div className="pentHouse">
            V.I.P PentHouse
            <img src={suite} width={200} height={150} alt="pic" />
          </div>
          <div className="deluxeRoom">
            Luxury Deluxe Rooms
            <img src={lux} width={200} height={150} alt="pic" />
          </div>
          <div className="doubleComf">
            Business Meeting Rooms
            <img src={comf} width={200} height={150} alt="pic" />
          </div>
          <div className="shortStay">
            Short-Stay Rooms
            <img src={mot} width={200} height={150} alt="pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
