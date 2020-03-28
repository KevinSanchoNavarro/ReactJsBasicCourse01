import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const isLegalAge = edad => edad > 18;

const person = { name: "Alberto", lastname: "Quiroga", age: 25 };

const course = {
  title: "React desde cero",
  image:
    "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
  price: "50usd"
};
/*
const Curso = props => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={props.image} alt={props.title} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="center">{props.title}</h3>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="#">
          {` $ ${props.price}`}
        </a>
      </div>
    </div>
  </article>
);
*/
/*
//Validaciones a mano
const Curso = ({ title, image, price, profesor }) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img
        src={
          image
            ? image
            : "https://comps.canstockphoto.es/ciudad-blanco-negro-imagen_csp6836657.jpg"
        }
        alt={title ? title : "No hay titulo"}
      />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="center">{title}</h3>
      <div className="s-main-center">{`Prof.: ${profesor}`}</div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="#">
          {` $ ${price}`}
        </a>
      </div>
    </div>
  </article>
);
*/

const CourseCard = ({ id, title, image, price, professor }) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <Link to={`/cursos/${id}`}>
        <img src={image} alt={title} />
      </Link>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="center">{title}</h3>
      <div className="s-main-center">{professor}</div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="#">
          {` $ ${price} USD`}
        </a>
      </div>
    </div>
  </article>
);

CourseCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  professor: PropTypes.string
};

CourseCard.defaultProps = {
  title: "No se encontró titulo",
  image:
    "https://comps.canstockphoto.es/ciudad-blanco-negro-imagen_csp6836657.jpg",
  price: "--",
  professor: ""
};

export default CourseCard;
