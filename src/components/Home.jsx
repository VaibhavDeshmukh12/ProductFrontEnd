import React, { useEffect, useState } from 'react'
import ProductService from '../services/ProductService';
import { Link } from 'react-router-dom';

function Home() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        init();
    }, [])

    const init = () => {
        ProductService.getAllProduct()
            .then((res) => {
                // console.log('res :>> ', res.data);
                setProduct(res.data);
            })
            .catch((error) => {
                console.log('error :>> ', error);
            });
    }

    const deleteProd = (id) => {
        ProductService.deleteProduct(id)
            .then((res) => {
                // console.log('res :>> ', res.data);
                init();
            })
            .catch((error) => console.log('error :>> ', error));
    }

    return (
        <div className='container mt-3 '>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className='text-center card-header '>
                            <h1 style={{color:"#FC427B"}} >Product Details</h1>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" className='text-center' >Sr.No.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    product.map((prod, index) => {
                                        return (
                                            <tr key={prod.id} className='fw-semibold ' >
                                                <th scope="row" style={{color:"#FC427B"}}  className='text-center '>{index + 1}</th>
                                                <td>{prod.pname}</td>
                                                <td>{prod.price}</td>
                                                <td>{prod.description}</td>
                                                <td>{prod.status}</td>
                                                <td>
                                                    <Link to={'/edit/' + prod.id} className='btn btn-outline-success me-2'>Edit</Link>
                                                    <button className='btn btn-outline-danger ' onClick={() => deleteProd(prod.id)}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home


// < div className = "card" style = {{ width: "15rem;" }}>
// <div className="card-body">
//     <h5 className="card-title"><span className='fw-normal fs-5'>Name: </span> {prod.pname}</h5>
//     <p className="card-text">Description: {prod.description}</p>
//     <p>Price: {prod.price}</p>
//     <p>Status: {prod.status}</p>
//     <Link to={'/edit/' + prod.id} className='btn btn-outline-success me-2'>Edit</Link>
//     <button className='btn btn-outline-danger ' onClick={() => deleteProd(prod.id)}>Delete</button>
// </div>
