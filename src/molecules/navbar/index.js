import React, { Component } from 'react'
import './navbar.scss'
const blockname = 'navbar'

export default class NavBar extends Component {

    showHome = (e) => {
        e.preventDefault();
        this.props.toggle(true);
    }

    showLikes = (e) => {
        e.preventDefault();
        this.props.toggle(false);
    }

    render() {
        return (
            <div>
                <nav className={blockname}>
                    <h1> :) noon assignment</h1>
                    <div className={`${blockname}__links`}>
                        <a onClick={this.showHome} href='/'>Home</a>
                        <a onClick={this.showLikes} href='/'>Liked</a>
                    </div>
                </nav>
            </div>
        )
    }
}
