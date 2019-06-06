import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

export interface NavbarProps {

}

const Navbar: React.SFC<NavbarProps> = () => {
    return (

        <div className="card blog-head sticky-top border-dark rounded my-5 bg-info shadow-lg">
            
                <nav className="nav justify-content-between">
                    <Link className="btn btn-outline-dark text-secondary mx-2 my-1" to="/add">New Blog</Link>
                    <Link className="btn btn-outline-dark text-secondary mx-2 my-1" to="/">All Blogs</Link>
                </nav>
            

            <div className="row justify-content-md-center">
                <div className="header col-md-12 p-2">
                    <p className="text-center  mb-4">Our Crazy Life!</p>
                </div>
            </div>
        </div>








        ///
        // <div className="jumbotron jumbotron-fluid sticky-top p-0">
        //                 <div>
        //         <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //             <a className="navbar-brand" href="#">Navbar</a>
        //             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //                 <div className="navbar-nav">
        //                     <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
        //                     <a className="nav-item nav-link" href="#">Features</a>
        //                     <a className="nav-item nav-link" href="#">Pricing</a>
        //                 </div>
        //             </div>
        //         </nav>
        //     </div>
        //     <div className="card">
        //         <div className="card-img-overlay">
        //             <h1 className="display-4">Fluid jumbotron</h1>
        //             <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        //         </div>

        //     </div>
        // </div>



    );
}

export default Navbar;