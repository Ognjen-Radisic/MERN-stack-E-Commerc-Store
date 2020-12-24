import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id)

  return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <Row>
        {/* IMAGE ON THE RIGHT */}
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        {/* BASIC DESCRIPTION */}
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>
              <strong>Description: </strong>
              {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/*ADDING TO CART FUNCTIONALITY  */}
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              {/* PRICE */}
              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Price:</strong>
                  </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              {/* IS IT IN STOCK? */}
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock < 1 ? 'Out of stock' : 'In stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              {/* ADD TO CART BUTTON*/}
              <ListGroup.Item>
                <Button
                  className='btn-block btn-dark'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
