import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/sekolah">Data Sekolah</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/siswa">Data Siswa</Link>
                        </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex form-inputs"> 
                        <input class="form-control mr-sm-2" type="text" placeholder="Cari..."/> 
                        <button className="btn btn-default text-light " type="submit">Cari</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
