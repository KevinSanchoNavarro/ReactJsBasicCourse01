import React, { Component } from "react";

//class Formulario extends React.Component {}
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      date: new Date()
    };

    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  changeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  changeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  changeDate() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <>
        <div className="ed-grid">
          <h1>Formulario {this.props.name}</h1>
          <h4>{Math.ceil(this.state.date / 1000)}</h4>
          <form action="" id="element">
            <div className="ed-grid m-grid-2">
              <div className="form__item">
                <label>Nombre Completo</label>
                <input id="name" type="text" onChange={this.changeName} />
              </div>
              <div className="form__item">
                <label>Correo Electrónico</label>
                <input id="email" type="email" onChange={this.changeEmail} />
              </div>
            </div>
          </form>
        </div>
        <div className="ed-grid">
          <h2>{`Hola ${this.state.name}`}</h2>
          <span>{`Tu correo es:  ${this.state.email}`}</span>
        </div>
      </>
    );
  }

  componentDidMount() {
    //let element = document.getElementById("element");
    //console.log(elemento);

    this.dateInterval = setInterval(() => {
      this.changeDate();
      console.log(new Date());
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log(prevProps);
    //console.log(prevState);
    //console.log("---------");
  }

  componentWillUnmount() {
    clearInterval(this.dateInterval);
  }
}

export default Form;
