import React from "react";
import CourseCard from "../molecules/CourseCard";

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

const courseGrid = () => (
  <div className="ed-grid m-grid-4">
    {courses.map(c => (
      <CourseCard
        key={c.id}
        id={c.id}
        title={c.title}
        image={c.image}
        price={c.price}
        professor={c.professor}
      />
    ))}
  </div>
);

export default courseGrid;
