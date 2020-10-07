import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";

const players = [
  { position: "Forward", name: "Lebron", team: "Lakers" },
  { position: "Guard", name: "Curi", team: "Lakers" },
  { position: "Small Forward", name: "Ronaldinho", team: "Lakers" },
  { position: "Center Back", name: "Arsene Wenger", team: "Lakers" },
];

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderPlayer = (player, index) => {
    return (
      <tr key={index}>
        <td>{player.position}</td>
        <td>{player.name}</td>
        <td>{player.team}</td>
      </tr>
    );
  };
  render() {
    return (
      <div>
        <ReactBootStrap.Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>User Id</th>
              <th>Username</th>
              <th>Alamat</th>
            </tr>
          </thead>
          <tbody>{players.map(this.renderPlayer)}</tbody>
        </ReactBootStrap.Table>
      </div>
    );
  }
}

export default User;
