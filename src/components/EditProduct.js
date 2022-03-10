import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { editProduct } from '../actions';

const EditProduct = (props) => {

    var pathname = window.location.pathname.split('/')[2];
    let navigator = useNavigate();
    const products = props.products.find(pro => pro.id == pathname ? pro : null);
    const [product, setProduct] = useState({
        id: products.id, title: products.title, price: products.price, category: products.category, image: products.image
    });

    return (
        <>
            <title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
            </title>
            <div style={{ width: "300%", background: "lightblue" }} className="container">
                <form className="mt-5" >
                    <input className="form-control" id="disabledInput" type="text" placeholder="EDIT The Form To UPDATE A Product.." disabled />
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <label htmlFor="inputName">Title</label>
                            <input type="text"
                                className="form-control"
                                placeholder='Product Title'
                                name="title"
                                value={product.title}
                                onChange={e => setProduct({ ...product, title: e.target.value })}
                            />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputRating">ID</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder='Product ID'
                                name="id"
                                value={product.id}
                                onChange={e => setProduct({ ...product, id: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">Price</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder='Product Price'
                                name="price"
                                value={product.price}
                                onChange={e => setProduct({ ...product, price: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">Category</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder='Product Category'
                                name="category"
                                value={product.category}
                                onChange={e => setProduct({ ...product, category: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder='Product Image'
                                name="imageURL"
                                value={product.image}
                                onChange={e => setProduct({ ...product, image: e.target.value })}
                            />
                        </div>
                    </div>

                    <input onClick={e => {
                        e.preventDefault();
                        props.editProduct(product);
                        navigator("/");
                    }} style={{ background: "orangered", fontWeight: "bold" }} type="submit" className="btn btn-danger btn-block"
                        value="Edit Product" />
                </form>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, { editProduct })(EditProduct);