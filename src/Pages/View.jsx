import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToWishList } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';
// import Spinner from 'react-bootstrap/Spinner';


const View = () => {

  const { id } = useParams()
  const [product, setProduct] = useState({})
  const {wishlist}=useSelector(state=>state.wishlistSlice)
  const cart = useSelector(state => state.cartReducer);

  const dispatch=useDispatch()


  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products"))
    setProduct(products.find(product => product.id == id))
  }, [])

  const handleWishlist = (product) => {
    const existingProduct = wishlist.find(item => item.id == product.id)
    if (existingProduct) {
      alert("already exist")
    } else {
      dispatch(addToWishList(product))
    }
  }

  
//   const handleAddToCart = (product) => { // Renamed the function
//     const existingProduct = cart.find(item => item.id === product.id);
//     if (existingProduct) {
//         alert("Product already exists in the cart");
//     } else {
//         dispatch(addToCart(product));
//     }
// };

  console.log(product);

  return (
    <div className='container mt-5'>
      {
        // loading?<div className='d-flex justify-content-center mt-5'>
        //                         <Spinner animation="border" variant="info" />Loading...

        // </div>:
        <Container style={{ marginTop: '70px' }}>
          <Row className="d-flex align-items-center">
            {/* Left side: Image */}
            <Col xs={12} md={6} className="mb-4">
              <img
                src={product?.thumbnail}
                alt="Product"
                style={{ width: '60%', height: 'auto', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}
              />
            </Col>

            {/* Right side: Product details */}
            <Col xs={12} md={6} className="mb-4">
              <h3>{product?.title}</h3>
              <p><strong>ID:</strong> {product?.id}</p>
              <h5 className='fw-bolder'>Price:<span style={{ color: "red" }}>{product?.price}</span></h5>
              <p>
                <strong>Description:</strong>
                {product?.description}
              </p>
              <div className="d-flex">
                <Button variant="primary" className="me-2" onClick={() => handleWishlist(product)}>
                  <i className="fa-solid fa-heart text-danger mx-1"></i> Wishlist
                </Button>
                <Button variant="secondary" onClick={() =>dispatch(addToCart(product))}>
                  <i className="fa-solid fa-cart-plus text-warning mx-1"></i> Add to Cart
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      }
    </div>
  );
}

export default View;
