import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <div style={{ marginTop: "70px" }}>
            <Row className="mt-5 container mb-5 ms-5">
                {/* Repeat this Col component 4 times */}
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                    <Card className="h-100" style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', transition: '0.3s' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/a0/7e/64/a07e64a679218ec421cc5c0c3b5894e5.jpg" style={{ height: '180px', objectFit: 'cover' }} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>Product Name</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <div className="mt-auto d-flex justify-content-between align-items-center">
                                <Button variant="primary" size="sm">
                                    <i className="fa-solid text-danger fa-heart mx-1"></i>
                                </Button>
                                <Button variant="secondary" size="sm">
                                    <i className="fa-solid fa-cart-plus text-warning mx-1"></i> Add to Cart
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
               </Col>
                {/* Repeat the Col component for 3 more cards */}
            </Row>
        </div>
    );
}

export default Home;
