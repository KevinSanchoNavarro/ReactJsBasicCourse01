import React from "react";

const Banner = () => (
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img
          className="main-banner__img"
          src="https://storage.googleapis.com/afs-prod/media/765eb7180fb04248a1707f406d77e245/400.jpeg"
          alt=""
        />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Cursos de EDTeam</p>
          <p> Tu futuro te está esperando </p>
          <a href="https://ux.ed.team/banner.html" className="button">
            Suscribirse
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
