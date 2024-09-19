import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/slice/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartReducer)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (cart?.length > 0) {
      setTotal(cart.map(product => product.totalPrice).reduce((p1, p2) => p1 + p2))
    } else {
      setTotal(0)
    }
  }, [cart])

  return (
    <div className='container' style={{ marginTop: "100px" }}>
      {
        cart?.length > 0 ?
          <div className="row">
            <div className="col-lg-8">
              <table className='table table-hover shadow-sm'>
                <thead className='table-dark'>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cart?.map((product, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td><img style={{ width: "80px", height: "auto" }} src={product.thumbnail} alt='Product Image' /></td>
                        <td>
                          <input
                            type="text"
                            value={product.quantity}
                            readOnly
                            style={{
                              width: '30px',
                              color: "black",
                              padding: '4px',
                              fontSize: '16px',
                              margin: '12px',
                              marginTop: '16px',
                              marginLeft: '12px',
                              textAlign: 'center',
                              border: '1px solid #ccc',
                              borderRadius: '4px'
                            }}
                          />
                        </td>
                        <td><span style={{ marginTop: '16px' }}>$ {product.price}</span></td>
                        <td><i className="fa-solid fa-trash-can text-danger cursor-pointer" onClick={() => { dispatch(removeFromCart(product.id)) }}></i></td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <div className="float-end m-2">
                <button className='btn btn-outline-warning me-4' onClick={() => dispatch(emptyCart())}>Empty Cart</button>
                <Link to={'/'}>
                  <button className='btn btn-outline-primary'>Shop more</button>
                </Link>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-3">
              <div className="border rounded shadow-sm p-4 mt-3 bg-light">
                <h3 className="text-center">Cart Summary</h3>
                <hr />
                <h5>Total Products: <span className="fw-bold">{cart?.length}</span></h5>
                <h5>Total: <span className='text-danger fw-bold'>${total}</span></h5>
                <div className="d-grid mt-4">
                  <button className='btn btn-success btn-lg rounded-pill'>Checkout</button>
                </div>
              </div>
            </div>
          </div> : <div className='container mt-5 d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
            <img src="https://www.kindpng.com/picc/m/174-1749396_empty-cart-your-cart-is-empty-hd-png.png" style={{ width: "30%", border: "4px solid #ccc", borderRadius: "12px" }} alt="" />
          </div>
      }
    </div>

  )
}
export default Cart
