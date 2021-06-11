import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './product.scss'

const blockname = 'product'

export default class Product extends Component {
    updateParent = () => {
        this.props.updateLiked(this.props.id)
    }
    render() {
        const { name, description, img, liked, parentIsLiked } = this.props;
        return (
            <div className={blockname} >
                <img className={`${blockname}__img`} src={img} alt={description} />
                <p className={`${blockname}__name`}>{name}</p>
                <p className={`${blockname}__description`}>{description}</p>
                <Container className={`${blockname}__like-container`}>
                    <Row>
                        <Col className={`${blockname}__left-col`}>
                            <img className={`${blockname}__express-img`} src={`https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg`}
                                alt={'express'} />
                        </Col>
                        <Col className={`${blockname}__right-col`}>
                            <button
                                disabled={liked && !parentIsLiked}
                                onClick={this.updateParent}
                                type='button'
                                id={`product-btn`}
                                className={liked && !parentIsLiked ? `${blockname}__liked-btn` : `${blockname}__like-btn`}>
                                {parentIsLiked ? 'Remove' : (liked ? 'Liked' : 'Like')}
                            </button>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}
