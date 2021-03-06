import React, { Component } from "react";
import UserCard from "../molecules/UserCard";
import axios from "axios";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    /* Usando fetch
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "get"
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          users: json
        });
      });
      */

    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      console.log(res.data);
      this.setState({
        users: res.data
      });
    });
  }

  render() {
    const { users } = this.state;

    return (
      <div className="ed-grid">
        <h1>Usuarios</h1>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
          {users.map(u => (
            <UserCard
              key={u.id}
              name={u.name}
              username={u.username}
              email={u.email}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
