import React, { Component } from 'react'
import NavBar from '../../molecules/navbar'
import Home from '../../molecules/home'
import Liked from '../../molecules/home'
import './page-component.scss'

const blockname = 'page'

export default class Page extends Component {

    state = {
        homeView: true
    }

    componentDidMount() {

    }

    toggleView = (toggle) => {
        console.log(toggle)
        this.setState({ homeView: toggle })
    }

    render() {
        const { homeView } = this.state;
        return (
            <div className={blockname}>
                <NavBar
                    toggle={this.toggleView}
                />
                {homeView ? (
                    <Home />
                ) : (
                    <Liked />
                )}
            </div>
        )
    }
}
