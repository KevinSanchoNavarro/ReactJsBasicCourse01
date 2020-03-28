import React from "react";

const courses = [
  {
    id: 1,
    title: "React desde cero",
    image:
      "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
    price: 50,
    professor: "Beto Quiroga"
  },
  {
    id: 2,
    title: "Drupal desde cero",
    image:
      "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN",
    price: 40,
    professor: "Beto Quiroga"
  },
  {
    id: 3,
    title: "Go desde cero",
    image:
      "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2020-03/Go-desde-cero.png",
    price: 30,
    professor: "Alexis Lozada"
  },
  {
    id: 4,
    title: "Html desde cero",
    image:
      "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
    price: 10,
    professor: "Álvaro Felipe"
  }
];
/*
const Course = props => (
  <div className="ed-grid m-grid-3">
    <h1>Nombre del curso</h1>
    <img
      className="m-cols-1"
      src="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2020-03/Go-desde-cero.png"
      alt="Imagen"
    />
    <p className="m-cols-2">Descripción</p>
  </div>
);
*/
const Course = ({ match }) => {
  const CurrentCourse = courses.filter(
    c => c.id === parseInt(match.params.id)
  )[0];

  return CurrentCourse ? (
    <div className="ed-grid m-grid-3">
      <h1>Curso: {CurrentCourse.title}</h1>
      <img className="m-cols-1" src={CurrentCourse.image} alt="Imagen" />
      <p className="m-cols-2">Profesor: {CurrentCourse.professor}</p>
    </div>
  ) : (
    <h1>El curso no existe</h1>
  );
};

export default Course;
