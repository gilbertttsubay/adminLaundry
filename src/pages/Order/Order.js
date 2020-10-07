import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";

const players = [
  { userId: 1, itemWeight: 1, cost: 1000, services: "Reguler", duration: 2 },
  { userId: 2, itemWeight: 1, cost: 1000, services: "Reguler", duration: 2 },
  { userId: 3, itemWeight: 1, cost: 1000, services: "Reguler", duration: 2 },
  { userId: 4, itemWeight: 1, cost: 1000, services: "Reguler", duration: 2 },
];

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderPlayer = (player, index) => {
    return (
      <tr key={index}>
        <td>{player.userId}</td>
        <td>{player.itemWeight}</td>
        <td>{player.cost}</td>
        <td>{player.services}</td>
        <td>{player.duration}</td>
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
              <th>Berat Item</th>
              <th>Biaya</th>
              <th>Jenis Layanan</th>
              <th>Durasi</th>
            </tr>
          </thead>
          <tbody>{players.map(this.renderPlayer)}</tbody>
        </ReactBootStrap.Table>
      </div>
    );
  }
}

export default Order;
