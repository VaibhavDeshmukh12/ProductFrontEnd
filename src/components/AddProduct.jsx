import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductService from '../services/ProductService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddProduct() {

    const [product, setProduct] = useState({
        pname: "",
        description: "",
        price: "",
        status: ""
    });

    const [msg, setMsg] = useState("");

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const [error, setError] = useState({});

    const submitProduct = (e) => {
        e.preventDefault();

        const validationError = {}
        if (!product.pname.trim()) {
            validationError.pname = "Username is invalid";
        }
        if (!product.description.trim()) {
            validationError.description = "Description is invalid";
        }
        if (!product.price.trim()) {
            validationError.price = "Price is invalid";
        }
        else if (!/^[0-9]*$/.test(product.price)) {
            validationError.price = "Must be numbers";
        }
        if (!product.status.trim()) {
            validationError.status = "Status is invalid";
        }

        setError(validationError);

        if (Object.keys(validationError).length === 0) {
            ProductService.saveProduct(product)
                .then((res) => {
                    // console.log('res :>> ', res.data);
                    setProduct(
                        {
                            pname: "",
                            description: "",
                            price: "",
                            status: ""
                        });
                    toast.success('🦄 Product Added Succesfully! You can add more products!!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                })
                .catch((error) => {
                    console.log('error :>> ', error);
                    setMsg("Something Went Wrong!");
                });
        }
    }

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="card shadow  col-md-6 offset-md-3">
                        <div className="card-body">
                            <div style={{ color: "purple" }} className="card-header bg-white border-bottom   text-center pb-2 ">
                                <h2> Add Product Details</h2>
                                {
                                    msg && <p className='text-center text-danger  fw-semibold  fs-5 text-success'>{msg}</p>
                                }
                            </div>
                            <div className='card-text'>
                                <form onSubmit={(e) => submitProduct(e)} className='py-2'>
                                    <div className="mb-3">
                                        <label htmlFor="nameInput" className="form-label fw-semibold fs-5 ">Product Name</label>
                                        <input onChange={e => handleChange(e)} name='pname' value={product.pname} type="text" className="form-control border-2" id="nameInput" />
                                        {error.pname && <span className='text-center  text-danger '>{error.pname}</span>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Description" className="form-label fw-semibold fs-5">Description</label>
                                        <textarea onChange={e => handleChange(e)} name='description' value={product.description} style={{ resize: "none" }} type="text" className="form-control border-2" id="Description" rows={2} cols={3} />
                                        {error.description && <span className='text-center  text-danger '>{error.description}</span>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Price" className="form-label fw-semibold fs-5 ">Price</label>
                                        <input onChange={e => handleChange(e)} name='price' value={product.price} type="text" className="form-control border-2" id="Price" />
                                        {error.price && <span className='text-center  text-danger '>{error.price}</span>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Status" className="form-label fw-semibold fs-5 ">Status</label>
                                        <input onChange={e => handleChange(e)} name='status' value={product.status} type="text" className="form-control border-2" id="Status" />
                                        {error.status && <span className='text-center  text-danger '>{error.status}</span>}
                                    </div>
                                    <Link to={"/"} type="submit" className="btn btn-outline-danger danger mx-2 ">Go Back</Link>
                                    <span>
                                        <button type="submit" className="btn btn-outline-success ">Submit</button>
                                        {
                                            msg.length === 0 &&
                                            <ToastContainer
                                                position="top-center"
                                                autoClose={5000}
                                                hideProgressBar={false}
                                                newestOnTop={false}
                                                closeOnClick
                                                rtl={false}
                                                pauseOnFocusLoss
                                                draggable
                                                pauseOnHover
                                                theme="dark"
                                            />
                                        }
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct
