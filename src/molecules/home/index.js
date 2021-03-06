import React, { Component } from 'react'
import Product from '../product'
import Loader from '../../atoms/loading-wheel'
import Error from '../../atoms/error'
import { getAllProducts, updateLikedProducts } from '../../core/api/products'
import { Container, Row, Col } from 'react-bootstrap'
import './home.scss'

const blockname = 'home'

export default class Home extends Component {

    state = {
        isLoading: true,
        isError: false,
    }

    componentDidMount() {
        getAllProducts()
        .then(res => this.setState({ products: res.data, isLoading: false }))
        .catch(err => this.setState({isError: true, isLoading: false}))
    }

    renderProducts = () => {
        const productsList = [];
        this.state.products.forEach(product => {
            productsList.push(
                <Col className={`${blockname}__col`} key={product.id}>
                    <Product
                        id={product.id}
                        liked={product.liked}
                        name={product.productName}
                        description={product.productDescription}
                        img={product.productImg}
                        updateLiked={this.updateLiked}
                    />
                </Col>
            )
        })
        return productsList;
    }

    updateLiked = (id) => {
        this.setState({ isLoading: true });
        // Call API to update Liked List in the backend
        updateLikedProducts({id})
        .then(res => this.setState({ products: res.data, isLoading: false }))
        .catch(err => this.setState({isError: true}))
        this.setState({ isLoading: false })
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
                            {!isError && this.renderProducts()}
                        </Row>
                    </Container>
                }
            </div>
        )
    }
}
