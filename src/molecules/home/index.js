import React, { Component } from 'react'
import Product from '../product'
import { Container, Row, Col } from 'react-bootstrap'
import './home.scss'

const blockname = 'home'

export default class Home extends Component {

    state = {
        products: [
            {
                'id': '001',
                'productName': 'Microsoft',
                'productDescription': 'Xbox Series X 1TB Console',
                'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1605814581/N40635116A_1.jpg'
            },
            {
                'id': '002',
                'productName': 'Apple',
                'productDescription': 'iPhone 12 with Facetime 128 GB',
                'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1622203894/N41247173A_1.jpg'
            },
            {
                'id': '003',
                'productName': 'Lenovo',
                'productDescription': 'Legion 5 AMD Ryzen 5 RTX 3060 1TB',
                'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1602744564/N41177345A_1.jpg'
            },
            {
                'id': '004',
                'productName': 'Microsoft',
                'productDescription': 'Xbox Series X 1TB Console',
                'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1605814581/N40635116A_1.jpg'
            },
            {
                'id': '005',
                'productName': 'Apple',
                'productDescription': 'iPhone 12 with Facetime 128 GB',
                'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1622203894/N41247173A_1.jpg'
            },
            {
                'id': '006',
                'productName': 'Lenovo',
                'productDescription': 'Legion 5 AMD Ryzen 5 RTX 3060 1TB',
                'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1602744564/N41177345A_1.jpg'
            },
            {
                'id': '007',
                'productName': 'Microsoft',
                'productDescription': 'Xbox Series X 1TB Console',
                'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1605814581/N40635116A_1.jpg'
            },
            {
                'id': '008',
                'productName': 'Apple',
                'productDescription': 'iPhone 12 with Facetime 128 GB',
                'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1622203894/N41247173A_1.jpg'
            },
            {
                'id': '009',
                'productName': 'Lenovo',
                'productDescription': 'Legion 5 AMD Ryzen 5 RTX 3060 1TB',
                'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1602744564/N41177345A_1.jpg'
            },
            {
                'id': '010',
                'productName': 'Apple',
                'productDescription': 'iPhone 12 with Facetime 128 GB',
                'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1622203894/N41247173A_1.jpg'
            },
            {
                'id': '011',
                'productName': 'Lenovo',
                'productDescription': 'Legion 5 AMD Ryzen 5 RTX 3060 1TB',
                'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1602744564/N41177345A_1.jpg'
            },
            {
                'id': '012',
                'productName': 'Microsoft',
                'productDescription': 'Xbox Series X 1TB Console',
                'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1605814581/N40635116A_1.jpg'
            },
            {
                'id': '013',
                'productName': 'Apple',
                'productDescription': 'iPhone 12 with Facetime 128 GB',
                'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1622203894/N41247173A_1.jpg'
            },
            {
                'id': '014',
                'productName': 'Lenovo',
                'productDescription': 'Legion 5 AMD Ryzen 5 RTX 3060 1TB',
                'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1602744564/N41177345A_1.jpg'
            },
            {
                'id': '015',
                'productName': 'Lenovo',
                'productDescription': 'Legion 5 AMD Ryzen 5 RTX 3060 1TB',
                'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1602744564/N41177345A_1.jpg'
            },
            {
                'id': '016',
                'productName': 'Microsoft',
                'productDescription': 'Xbox Series X 1TB Console',
                'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1605814581/N40635116A_1.jpg'
            },
            {
                'id': '017',
                'productName': 'Apple',
                'productDescription': 'iPhone 12 with Facetime 128 GB',
                'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1622203894/N41247173A_1.jpg'
            },
            {
                'id': '018',
                'productName': 'Lenovo',
                'productDescription': 'Legion 5 AMD Ryzen 5 RTX 3060 1TB',
                'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1602744564/N41177345A_1.jpg'
            }
        ]
    }

    componentDidMount() {

    }

    renderProducts = () => {
        const productsList = [];
        this.state.products.forEach(product => {
            productsList.push(
                <Col className={`${blockname}__col`} key={product.id}>
                    <Product
                        id={product.id}
                        name={product.productName}
                        description={product.productDescription}
                        img={product.productImg}
                    />
                </Col>
            )
        })
        return productsList;
    }

    render() {
        return (
            <div className={blockname}>
                <Container >
                    <Row className={`${blockname}__row`}>
                        {/* <Col xs={2} md={4} xl={6}> */}
                        {this.renderProducts()}
                        {/* </Col> */}
                    </Row>
                </Container>
            </div>
        )
    }
}
