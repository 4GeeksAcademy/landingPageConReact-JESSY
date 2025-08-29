import React from "react";

function Navbar (){
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex justify-content-between">
                    <a className="text-white navbar-brand" href="#">Start Bootstrap</a>
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="text-white nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="text-white nav-link " href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="text-white nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="text-white nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar