import React, { Component } from 'react'
import Product from '../product'
import Loader from '../../atoms/loading-wheel'
import Error from '../../atoms/error'
import { getLikedProducts, removeLikedProducts } from '../../core/api/products'
import { Container, Row, Col } from 'react-bootstrap'
import './liked.scss'

const blockname = 'liked'

export default class Liked extends Component {


    state = {
        isLoading: true,
        isError: false,
    }

    componentDidMount() {
        getLikedProducts()
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({ products: res.data, isLoading: false })
                } else {
                    this.setState({ isError: true, isLoading: false })
                }
            })
            .catch(err => this.setState({ isError: true }))
    }

    renderLikedProducts = () => {
        const productsList = [];
        this.state.products.forEach(product => {
            productsList.push(
                <Col className={`${blockname}__col`} key={product.id}>
                    <Product
                        id={product.id}
                        parentIsLiked={true}
                        liked={product.liked}
                        name={product.productName}
                        description={product.productDescription}
                        img={product.productImg}
                        updateLiked={this.removeLiked}
                    />
                </Col>
            )
        })
        return productsList;
    }

    removeLiked = (id) => {
        this.setState({ isLoading: true });
        // Call API to delete Liked item in the backend
        removeLikedProducts({ id })
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({ products: res.data, isLoading: false })
                } else {
                    this.setState({ isError: true, isLoading: false })
                }
            })
            .catch(err => this.setState({ isError: true, isLoading: false }))
    }

    render() {
        const { isLoading, isError } = this.state
        return (
            <div className={blockname}>
                {isError && <Error />}
                {isLoading ?
                    <Loader /> :
                    <Container >
                        <Row className={`${blockname}__row`}>
                            {!isError && this.renderLikedProducts()}
                        </Row>
                    </Container>
                }
            </div>
        )
    }
}
