import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";

// const players = [
//   { userId: 1, itemWeight: 1, cost: 1000, services: "Reguler", duration: 2 },
//   { userId: 2, itemWeight: 1, cost: 1000, services: "Reguler", duration: 2 },
//   { userId: 3, itemWeight: 1, cost: 1000, services: "Reguler", duration: 2 },
//   { userId: 4, itemWeight: 1, cost: 1000, services: "Reguler", duration: 2 },
// ];

class IncomingOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: []
    };
  }

  componentDidMount() {
   
    const { transactionDb } = this.props.firebase

    transactionDb()
      .get()
      .then((snapshot) => {
        let orderList = [];

        snapshot.forEach((doc) => {
          let data = doc.data();
          

          orderList.push(data);  
        });
        
        this.setState({
          orderList: orderList,
        });
        // console.log(this.state.orderList);
      })
      .catch((error) => console.log(error));
  }

 


  renderPlayer = (user, index) => {
    let order = Object.keys(user)
    let values = Object.values(user)
    let obj = JSON.parse(values)
    console.log(obj);

    return (
      <tr key={index}>
        <td>{order}</td>
        <td>{obj.item_weight}</td>
        <td>{obj.cost}</td>
        <td>{obj.service}</td>
        <td>{obj.duration}</td>
        <td>{obj.cost*obj.item_weight}</td>
      </tr>
    );
  };

  render() {
    return (
      <div>
        <ReactBootStrap.Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Berat Item</th>
              <th>Biaya</th>
              <th>Jenis Layanan</th>
              <th>Durasi</th>
              <th>Total Biaya</th>
            </tr>
          </thead>
          <tbody>{this.state.orderList.map(this.renderPlayer)}</tbody>
        </ReactBootStrap.Table>
      </div>
    );
  }
}

export default IncomingOrder;
