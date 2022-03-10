import React from 'react'
import { connect } from 'react-redux'
import { addToCart, deleteProduct } from '../actions';
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import Total from './Total';
import { Link, useNavigate } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa"
const Products = (props) => {
const navigator=useNavigate();
    const totalCount = props.cart.reduce((total, product) => (total = total + product.count), 0);
    const totalPrice = props.cart.reduce((total, product) => (total = total + product.count * product.price), 0).toFixed(2);

    return (
        <>
            <div className="mycart">Free shipping on orders of $100 or more.  Total Cart:({totalPrice} ) Total Products: ( {totalCount}) </div>

            <Link style={{ marginTop: "5px",marginLeft:"1200px" ,position: "fixed", fontWeight: "bold", fontSize: "20px", }}
                to="/cart" ><FaCartPlus /> Go To Cart ( {totalCount} ) </Link>

            <div style={{ marginTop: "50px",width:"100%" }} className='itemslist'>
                {
                    <p>Please Await!. Loading Products...</p> && props.products?.map((product) => (
                        <div key={product.id} className='Cartitem'>
                            <img src={product.image} alt={product.title} />
                            <div className='details'>
                                <h3>{product.title}</h3>
                                <h4 style={{ color: "orangered" }}><span style={{ color: "grey", fontWeight: "bold" }}>Categories: </span>
                                    {product.category}</h4>
                                <h5>
                                    {product.price} <p>tl</p>{" "}
                                </h5>
                                <h2>{product.price}</h2>
                                <button onClick={e => {
                                    e.preventDefault();
                                    props.addToCart(product)
                                }} className='addButton'>Add To Cart</button>
                            </div>
                            <div className='quantity'>
                                <button style={{ marginTop: "-30px" }} onClick={() => {
                                    props.deleteProduct(product.id);
                                }}><AiFillDelete title='Delete Product' /></button>
                                <button onClick={e=>{
                                    e.preventDefault();
                                    navigator(`/editproduct/${product.id}`)
                                }} > <AiFillEdit title='Edit Product' /></button>
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
        products: state.products,
        cart: state.cart
    }
}

export default connect(mapStateToProps, { addToCart, deleteProduct })(Products)