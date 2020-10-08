import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import IncomingOrder from './incoming'

import { FirebaseContext } from '../../config/firebase';


class Order extends Component {
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
                    id="order-tab"
                    activeKey={this.state.activeTab}
                    onSelect={this.handleTab}
                >
                    <Tab eventKey="incoming" title="Incoming Order">
                        <FirebaseContext.Consumer>
                            {firebase => <IncomingOrder {...this.props} firebase={firebase} />}
                        </FirebaseContext.Consumer>
                    </Tab>    
                    <Tab eventKey="ongoing" title="Ongoing Order">
                        Ongoing Order
                    </Tab>    
                    <Tab eventKey="history" title="Order History">
                        Order History
                    </Tab>    
                </Tabs>
            </div>    
        );
    }
}

 
export default Order;