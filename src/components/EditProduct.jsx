import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProductService from '../services/ProductService';

function EditProduct() {
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

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        ProductService.getProductById(id)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((error) => {
                setMsg("Error while obtaining data");
            });
    }, [id]);

    const submitProduct = (e) => {
        e.preventDefault();
        ProductService.saveProduct(product)
            .then((res) => {
                navigate("/")
            })
            .catch((error) => {
                console.log('error :>> ', error);
                setMsg("Something Went Wrong!");
            });
    }

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="card shadow  col-md-6 offset-md-3">
                        <div className="card-body">
                            <div style={{ color: "purple" }} className="card-header bg-white border-bottom   text-center pb-2 ">
                                <h2> Edit Product Details</h2>
                                {
                                    msg && <p className='text-center fw-semibold  fs-5 text-success'>{msg}</p>
                                }
                            </div>
                            <div className='card-text'>
                                <form onSubmit={(e) => submitProduct(e)} className='py-2'>
                                    <div className="mb-3">
                                        <label htmlFor="nameInput" className="form-label fw-semibold fs-5 ">Product Name</label>
                                        <input onChange={e => handleChange(e)} name='pname' value={product.pname} type="text" className="form-control border-2" id="nameInput" required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Description" className="form-label fw-semibold fs-5">Description</label>
                                        <textarea onChange={e => handleChange(e)} name='description' value={product.description} style={{ resize: "none" }} type="text" className="form-control border-2" id="Description" rows={2} cols={3} required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Price" className="form-label fw-semibold fs-5 ">Price</label>
                                        <input onChange={e => handleChange(e)} name='price' value={product.price} type="text" className="form-control border-2" id="Price" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Status" className="form-label fw-semibold fs-5 ">Status</label>
                                        <input onChange={e => handleChange(e)} name='status' value={product.status} type="text" className="form-control border-2" id="Status" required/>
                                    </div>
                                    <button type="submit" className="btn btn-outline-success ">Submit</button>
                                    <Link to={"/"} type="submit" className="btn btn-outline-danger danger mx-2 ">Cancel</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProduct
