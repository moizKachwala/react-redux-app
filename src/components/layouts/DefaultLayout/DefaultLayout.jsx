import React, {Component} from 'react';
import {Navigation} from './Navigation';

import './DefaultLayout.scss';

class DefaultLayout extends Component {
    render() {
        return (
            <div className="defaultlayout-main">
                <div>
                    <Navigation />
                </div>
                <div className="layout-content">
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default DefaultLayout;