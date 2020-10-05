import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.string.isRequired,
    };

    onClickLabel = () => {
        const { label, onClick } = this.props;
        onClick(label)
    }


    render() { 
        const { onClickLabel, props: { activeTab, label },} = this;

        let className = 'tab-list-item';

        if (activeTab === label) {
          className += ' tab-list-active';
        }
        return ( 
            <li 
                className={className}
                onClick={onClickLabel}
            >
                {label}
            </li>
        );
    }
}
 
export default Tab;