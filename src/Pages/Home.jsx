import React, { useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProductData } from '../redux/slice/productSlice';
import { addToWishList } from '../redux/slice/wishlistSlice';
import { addToCart as addToCartAction } from '../redux/slice/cartSlice'; // renamed import

const Home = () => {

    const dispatch = useDispatch();

    const { products, loading, error } = useSelector((state) => state.productSlice);
    const { wishlist } = useSelector(state => state.wishlistSlice);
    const cart = useSelector(state => state.cartReducer);

    useEffect(() => {
        dispatch(fetchProductData());
    }, [dispatch]);

    // const handleAddToCart = (product) => { // Renamed the function
    //     const existingProduct = cart.find(item => item.id === product.id);
    //     if (existingProduct) {
    //         alert("Product already exists in the cart");
    //     } else {
    //         dispatch(addToCartAction(product));
    //     }
    // };

    const handleWishlist = (product) => {
        const existingProduct = wishlist.find(item => item.id === product.id);
        if (existingProduct) {
            alert("Product already exists in the wishlist");
        } else {
            dispatch(addToWishList(product));
        }
    };

    return (
        <div style={{ marginTop: "80px" }}>
            <Row className="mt-5 container mb-5 ms-5">
                {
                    products.length > 0 && products.map((product, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                            <Card
                                className="h-100"
                                style={{
                                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                                    transition: '0.3s'
                                }}
                            >
                                <Link to={`/view/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Card.Img
                                        variant="top"
                                        src={product.thumbnail}
                                        style={{
                                            height: '180px',
                                            objectFit: "contain"
                                        }}
                                    />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>{product.title.slice(0, 20)}</Card.Title>
                                    </Card.Body>
                                </Link>
                                <div className="mt-auto d-flex justify-content-between align-items-center p-2">
                                    <Button variant="primary" size="sm" onClick={() => handleWishlist(product)}>
                                        <i className="fa-solid text-danger fa-heart mx-1"></i>
                                    </Button>
                                    <Button variant="secondary" size="sm" onClick={() =>dispatch(addToCartAction(product))}>
                                        <i className="fa-solid fa-cart-plus text-warning mx-1"></i> Add to Cart
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
};

export default Home;
