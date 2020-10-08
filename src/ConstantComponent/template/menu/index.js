import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
    render() { 
        return (  
            <NavLink to={this.props.link} onClick={this.props.onClick}>
                <div className="btn-menu">{this.props.label}</div>
            </NavLink>
        );
    }
}
 
export default Menu;