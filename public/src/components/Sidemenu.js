import React, { Component } from 'react'
import { connect } from 'react-redux'

class Sidemenu extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { dispatch, count } = this.props;
        return (
            <div>
                <div className="sideMenu">
                    d
                </div>
            </div>
        );
    }
}

export default connect(state => state)(Sidemenu)