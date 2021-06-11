import React, { Component } from 'react'
import './product.scss'

const blockname = 'product'

export default class Product extends Component {
    render() {
        const { id, name, description, img } = this.props;
        return (
            <div className={blockname} >
                <img className={`${blockname}__img`} src={img} alt={description} />
                <p className={`${blockname}__name`}>{name}</p>
                <p className={`${blockname}__description`}>{description}</p>
            </div>
        )
    }
}
