import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";

// const players = [
//   { userId: "Forward", username: "Lebron", alamat: "Lakers" },
//   { userId: "Guard", username: "Curi", alamat: "Lakers" },
//   { userId: "Small Forward", username: "Ronaldinho", alamat: "Lakers" },
//   { userId: "Center Back", username: "Arsene Wenger", alamat: "Lakers" },
// ];

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
    };
  }

  componentDidMount() {
   
    const { usersDb } = this.props.firebase
    console.log(usersDb);

    usersDb()
      .get()
      .then((snapshot) => {
        let userList = [];

        snapshot.forEach((doc) => {
          let data = doc.data();
          userList.push(data);
        });

        this.setState({
          userList: userList,
        });
        // console.log(snapshot);
      })
      .catch((error) => console.log(error));
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
          <tbody>
            {this.state.userList.map((data) => {
              return (
                <tr>
                  <td>{data.email}</td>
                  <td>{data.name}</td>
                  <td>{data.alamat}</td>
                </tr>
              );
            })}
          </tbody>
        </ReactBootStrap.Table>
      </div>
    );
  }
}

export default User;
