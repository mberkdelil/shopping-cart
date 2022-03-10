import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa"

const Total = (props) => {

    const totalCount = props.cart.reduce((total, product) => (total = total + product.count), 0);
    const totalPrice = props.cart.reduce((total, product) => (total = total + product.count * product.price), 0).toFixed(2);

    return (
        <>

            <div className='checkout'>
                <div className='money'>
                    <h3>Total Price: </h3>
                    <h4 style={{ color: "orangered" }}>{totalPrice}</h4>
                    <p style={{ color: "orangered" }}>$</p>
                </div>
                <div className='description'>
                    {totalPrice < 150 ? (<p>Add ${(150 - totalPrice)} product and get free shipping</p>)
                        : <p style={{ color: "greenyellow", fontSize: "20px", fontWeight: "bold" }}>Free Cargo</p>}
                </div>
                <div className="cargo">
                    <div className="cargoamount">
                        <p>Cargo</p>
                        <p className='cargoamountTL'>{totalPrice < 150 ? "$12" : <h3 style={{ color: "darkgreen", fontSize: "20px", fontWeight: "bold" }}>Free</h3>}</p>
                    </div>
                    <div className='ordertotal'>
                        <span>Total Products ({totalCount})</span>
                        <p className='orderamount'>Total Price: ($ {totalPrice < 150 ? Number(totalPrice) + Number(12) : totalPrice})</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Total);