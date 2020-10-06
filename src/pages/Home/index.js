import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state ={
            activeTab: "incoming"
        }

        this.handleTab = this.handleTab.bind(this);
    }

    handleTab(selectedTab) {

        this.setState({
          activeTab: selectedTab
        });
      }

    render() { 
        return ( 
            <div>
                <Tabs       
                    id="home-tab"
                    activeKey={this.state.activeTab}
                    onSelect={this.handleTab}
                >
                    <Tab eventKey="incoming" title="Incoming Order">
                        Incoming Order
                    </Tab>    
                    <Tab eventKey="ongoing" title="Ongoing Order">
                        Ongoing Order
                    </Tab>    
                    <Tab eventKey="history" title="Order History">
                        Order History
                    </Tab>    
                    <Tab eventKey="users" title="Customer List">
                        User Lists
                    </Tab>    

                </Tabs>
            </div>    
        );
    }
}

 
export default Home;