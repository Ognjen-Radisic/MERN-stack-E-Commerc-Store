import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/products')

      setProducts(data)
    }

    fetchData()
  }, [])

  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product {...product} />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default HomeScreen
