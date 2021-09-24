import React from 'react';

const Header = () => {
    return (
        <div>
            <nav style={{ backgroundColor: '#008080' }} className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/nav">The Meal Db Store</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link active" aria-current="page" href="/">About</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link active" aria-current="page" href="/">Contact</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link active" aria-current="page" href="/">Others</a>
                            </li>
                        </ul>
                        <form className="d-flex flex-fill">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-warning bg-danger text-white" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;