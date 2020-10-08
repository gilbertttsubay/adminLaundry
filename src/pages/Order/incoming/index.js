import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";


class IncomingOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
      orderList: [],
    };
  }

  componentDidMount() {

    const { transactionDb } = this.props.firebase

    transactionDb()
      .get()
      .then((snapshot) => {
        let collections = [];
        let orderLists = [];

        snapshot.forEach((doc) => {
          let data = doc.id;
          collections.push(data);  
        });
        this.setState({
          collection: collections,
        });
        // console.log(this.state.collection);

        for(let i = 0; i < this.state.collection.length; i++) {
          transactionDb()
            .doc(`${this.state.collection[i]}`)
            .collection('orders')
            .get()
            .then((snapshot) => {
              snapshot.forEach((doc) => {
                let data = doc.data();
                data["orderID"]=doc.id
                data["username"]=this.state.collection[i]
                orderLists.push(data);  
              });
              this.setState({
                orderList: orderLists,
              });
            })    
        }
        console.log(this.state.orderList);
      })
      .catch((error) => console.log(error));
      
  }

  acceptanceHandler = (data, orderID, username) => {
    const { transactionDb } = this.props.firebase
    
    // console.log(orderID[0]);
    if(data.status === "pending") {
      transactionDb()
        .doc(username)
        .collection('orders')
        .doc(orderID)
        .update({
          order:JSON.stringify({item_weigh: data.item_weigh,cost: data.cost,service: data.service,duration: data.duration,status:"diproses"
        })})
        .then(
          window.location.reload()
        )
        .catch((error) => console.log(error))

    } else if(data.status === "diproses") {

      transactionDb()
        .doc(username)
        .collection('orders')
        .doc(orderID)
        .update({
          order:JSON.stringify({item_weigh: data.item_weigh,cost: data.cost,service: data.service,duration: data.duration,status:"selesai"
        })})
        .then(
          window.location.reload()
        )
        .catch((error) => console.log(error))
    }
  }

  renderOrder = (order, index) => {
    //ambil value orderID dan username
    let id = order.orderID
    let username = order.username
    // console.log(key);

    //ambil string values order untuk di parsing ke object
    let values = order.order
    let obj = JSON.parse(values)
    
    if(obj.status === this.props.status) {
      return (
        <tr key={index}>
          <td>{id}</td>
          <td>{username}</td>
          <td>{obj.item_weigh}</td>
          <td>{obj.cost}</td>
          <td>{obj.service}</td>
          <td>{obj.duration}</td>
          <td>{obj.cost*obj.item_weigh}</td>
          <td>{obj.status}</td>
        {
          (this.props.status === "pending") ? (
            <td>
              <Button onClick={() => this.acceptanceHandler(obj, id, order.username)}>
                Accept
              </Button>
            </td>
          ) : (this.props.status === "diproses") ? (
            <td>
              <Button onClick={() => this.acceptanceHandler(obj, id, order.username)}>
                Selesai
              </Button>
            </td>
          ) : (
            <td>
              Order Selesai
            </td>
          )
        }
        </tr>
      );
    }
  };

  render() {
    return (
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Username</th>
              <th>Berat Item</th>
              <th>Biaya</th>
              <th>Jenis Layanan</th>
              <th>Durasi</th>
              <th>Total Biaya</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{this.state.orderList.map(this.renderOrder)}</tbody>
        </Table>
      </div>
    );
  }
}

export default IncomingOrder;
