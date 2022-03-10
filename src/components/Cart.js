import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { increaseCount, decreaseCount, removeFromCart } from '../actions';
import Total from './Total';

const Cart = (props) => {

    const totalCount = props.cart.reduce((total, product) => (total = total + product.count), 0);
    const totalPrice = props.cart.reduce((total, product) => (total = total + product.count * product.price), 0).toFixed(2);

    return (
        <>
            <div className="mycart">Free shipping on orders of $100 or more.  Total Cart:({totalPrice} ) Total Products: ( {totalCount}) </div>
            <Link style={{
                float: "right", marginTop: "40px", marginLeft: "1080px", marginRight: "15px", fontWeight: "bold", fontSize: "20px", color: "orangered"
                , border: "1px solid black"
            }}
                to="/" >Go To Products List ( {totalCount} ) </Link>
            <div style={{marginTop:"50px",marginLeft: "1050px", position: "sticky" }}>
                <Total />
            </div>

            <div style={{ width: "75%",marginTop:"-500px" }} className='itemslist'>
                {
                    props.cart.map(product => (
                        <div key={product.id} className='Cartitem'>
                            <img src={product.image} alt={product.title} />
                            <div className='details'>
                                <h3>{product.title}</h3>
                                <h4>Categories: {product.category}</h4>
                                <span style={{ fontWeight: "bold" }}>Total: {(product.price * product.count).toFixed(2)}</span>
                                <h5>
                                    $ {product.price} {" "}
                                </h5>
                                <p style={{ fontWeight: "bold", color: "red", fontSize: "20px" }}>You have {product.count} of this product in your cart</p>
                                <button onClick={e => {
                                    e.preventDefault();
                                    props.removeFromCart(product.id)
                                }} className='addButton'>Remove From Cart</button>

                            </div>
                            <div className='quantity'>
                                <button onClick={() => props.increaseCount(product.id)} className='plus'>+</button>
                                <p className='amount'>{product.count}</p>
                                <button onClick={() => props.decreaseCount(product.id)} className='minus'>-</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, { increaseCount, decreaseCount, removeFromCart })(Cart)