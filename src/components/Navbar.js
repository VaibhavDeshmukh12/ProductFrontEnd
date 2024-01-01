import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark "style={{background:"#0a3d62" }}>
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand fs-4 " >Product Management Application</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="py-1 collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link fs-5 active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addProduct" className="nav-link fs-5">Add Product</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
