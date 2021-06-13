import React from "react";
import * as HiIcons from "react-icons/hi";
import * as CgIcons from "react-icons/cg";
import "./card.scss";

export default function Card() {
  return (
    <div className="card">

      <div className="card__video">
        <img src="assets/videos/casa1.jpg" alt="video-photo" />
        <span className='card__video--time' >
          3:11
        </span>
        <span className="card__video--span  card__video--reloj">
          <HiIcons.HiClock />
        </span>
        <span className="card__video--span card__video--play">
          <CgIcons.CgPlayList />
        </span>
      </div>

      <div className="card__content">
        <img
          className="card__content--logo-canal"
          src="assets/logo-canal.jpg"
          alt="icono"
        />
        <div className="card__content--info">
          <h3 className="title">Corona Virus Peru 2021</h3>
          <span className="canal">Upc</span>
          <span className="visual">807.967 visualizaciones</span>
          <span className="fecha">hace 11 meses</span>
        </div>
        <div className="card__content--3puntos">
          <HiIcons.HiDotsVertical />
        </div>
      </div>

    </div>
  );
}
