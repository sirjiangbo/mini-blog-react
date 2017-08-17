import React, { Component } from 'react'
import Sidemenu from './Sidemenu'

export default class Admin extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Sidemenu/>
            </div>
        );
    }
}