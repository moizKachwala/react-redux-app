import React, {Component} from 'react';
import {Navigation} from './Navigation';

class DefaultLayout extends Component {
    render() {
        return (
            <div className="main">
                <div>
                    <Navigation />
                </div>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default DefaultLayout;