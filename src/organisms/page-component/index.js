import React, { Component } from 'react'
import NavBar from '../../molecules/navbar'
import Home from '../../molecules/home'
import Liked from '../../molecules/liked'
import './page-component.scss'

const blockname = 'page'

export default class Page extends Component {

    state = {
        homeView: true,
        isMobile: window.innerWidth < 768,
    }

    componentDidMount() {

    }

    toggleView = (toggle) => {
        this.setState({ homeView: toggle })
    }

    render() {
        const { homeView, isMobile } = this.state;
        return (
            <div className={blockname}>
                <NavBar
                    isMobile={isMobile}
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
