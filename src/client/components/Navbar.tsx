import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavbarProps { }

const Navbar: React.SFC<NavbarProps> = () => {
    return (

        <div className="card  blog-head sticky-top border-dark rounded my-5 bg-info shadow-lg">
            <nav className="navbar navbar-expand-lg">
                <div className="" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="text-white mr-3" to="/add">New Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="text-white mr-3" to="/">All Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="text-white mr-3" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="row justify-content-md-center">
                <div className="header col-md-12 p-2">
                    <p className="text-center  mb-4">Our Crazy Life!</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;