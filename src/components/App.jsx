import React, { Fragment } from "react";
//import logo from "./logo.svg";
//import './App.css';
//import Course from "./Course";
import "../styles/styles.scss";
import Banner from "./organisms/Banner";
import Form from "./pages/Form";
import CourseGrid from "./organisms/CourseGrid";
import Course from "./pages/Course";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainMenu from "./organisms/MainMenu";
import History from "./pages/History";
import Users from "./pages/Users";

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

//const App = () => <h1>Hola Mundo desde mi archivo App.js con EDTeam</h1>;
/*
const App = () => (
  <div>
    <h1>Hola Mundo</h1>
    <p>Hola, saludando desde mi componente</p>
  </div>
);
*/
/*
const App = () => (
  <Fragment>
    <div className="saludo">
      <h1>Hola Mundo</h1>
      <p>Hola, saludando desde mi componente</p>
    </div>
    <div>
      <h2>Hola Mundo</h2>
      <p>Hola, saludando desde mi componente, v2</p>
    </div>
    <div>
      <img
        src="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2020-03/Go-desde-cero.png"
        alt=""
      />
    </div>
  </Fragment>
);
*/

const courses = [
  {
    title: "React desde cero",
    image:
      "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
    price: 50,
    professor: "Beto Quiroga"
  },
  {
    title: "Drupal desde cero",
    image:
      "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN",
    price: 40,
    professor: "Beto Quiroga"
  },
  {
    title: "Go desde cero",
    image:
      "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2020-03/Go-desde-cero.png",
    price: 30,
    professor: "Alexis Lozada"
  },
  {
    title: "Html desde cero",
    image:
      "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
    price: 10,
    professor: "Álvaro Felipe"
  }
];

/* Ejemplo pintado de cursos desde un array
const App = () => (
  <>
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
    <div className="ed-grid m-grid-3">
      {
         // cursos.forEach(c => (
        //<Curso
         // title={c.title}
          //image={c.image}
          //price={c.price}
          //profesor={c.profesor}
        ///>
        //))

      cursos.map(c => (
        <Curso
          title={c.title}
          image={c.image}
          price={c.price}
          profesor={c.profesor}
        />
      ))}
    </div>
  </>
);
*/

//<Formulario name="EDTeam" />;
//<Banner />
//<CourseGrid />

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={Banner} />
      <Route path="/cursos/:id" component={Course} />
      <Route path="/cursos" component={CourseGrid} />
      <Route path="/historial/:valor" component={History} />
      <Route path="/historial" component={History} />
      <Route
        path="/formulario"
        component={() => <Form name="Página de Contacto" />}
      />
      <Route path="/usuarios" component={Users} />
      <Route
        component={() => (
          <div className="ed-grid">
            <h1>ERROR 404</h1>
            <span>Página no encontrada</span>
          </div>
        )}
      />
    </Switch>
  </Router>
);

export default App;

//Reglas
/*
1.- Toda etiqueta debe cerrarse
2.- Los componentes deben devolver 1 solo elemento padre
3.- Apoyarse de los Fragment cuando necesito devolver 2 elementos o (Fragment => <> hijos </>)
4.- Los estilos como objetos
5.- usar className en lugar de className, usar htmlFor en lugar de for
6.- No if, else, while

*/

//Tipos de componentes
/*
1.- Componente funcional/presentacional
2.- Componente de clase







*/
