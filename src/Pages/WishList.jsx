import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishList } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';

const WishList = () => {

  const dispatch = useDispatch()

  const wishlist = useSelector(state => state.wishlistSlice.wishlist)

  //   const deletewishlist=(product)=>{
  //     const existingProduct=wishlist.find(item=>item.id==product.id)
  //     if(existingProduct){
  //         dispatch(removeFromWishList(product.id))
  //     }
  // }

  const handlecart=(product)=>{
    dispatch(removeFromWishList(product.id))
    dispatch(addToCart(product))
  }


  return (
    <div>

      <Row className="mt-5 container mb-5 ms-5">
        {
          wishlist.length > 0 ? wishlist.map(product => (
            <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card
                className="h-100"
                style={{
                  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                  transition: '0.3s'
                }}
              >
                <Link to="view/1" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card.Img
                    variant="top"
                    src={product.thumbnail}
                    style={{
                      height: '180px',
                      objectFit: "contain"
                    }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      {product.description}
                    </Card.Text>
                  </Card.Body>
                </Link>
                <div className="mt-auto d-flex ms-5 align-items-center p-2">
                  <Button variant="primary" className='ms-4 me-2' size="md" onClick={() => dispatch(removeFromWishList(product.id))}>
                    <i class="fa-solid fa-heart-circle-minus text-warning"></i>
                  </Button>
                  <Button variant="secondary" size="md" onClick={() =>handlecart(product)}>
                    <i class="fa-solid fa-cart-plus text-success"></i>
                  </Button>
                </div>
              </Card>
            </Col>
          )) :
          <div className='container mt-5 d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
  <img src="https://behalacollege.in/display_board/assets/images/empty-wishlist.png" style={{ width: "30%" }} alt="" />
</div>
      
        }
      </Row>
    </div>
  )
}

export default WishList
