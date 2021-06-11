import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHeart } from '@fortawesome/free-solid-svg-icons'
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
        const { isMobile } = this.props;
        return (
            <div>
                <nav className={isMobile ? `${blockname}__mobile` :blockname}>
                    {!isMobile && <h1> :) noon assignment</h1>}
                    <div className={isMobile ?`${blockname}__links-mobile` : `${blockname}__links`}>
                        <a id={`navbar-home`} className={isMobile ? `${blockname}__a-home-mobile` : undefined} onClick={this.showHome} href='/'>{isMobile ? <FontAwesomeIcon icon={faHome}/> : `Home`}</a>
                        <a id={`navbar-liked`} className={isMobile ? `${blockname}__a-liked-mobile` : undefined} onClick={this.showLikes} href='/'>{isMobile ? <FontAwesomeIcon icon={faHeart}/> : `Liked`}</a>
                    </div>
                </nav>
            </div>
        )
    }
}
