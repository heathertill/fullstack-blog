import * as React from 'react';

export interface HeaderProps {

}

const Header: React.SFC<HeaderProps> = () => {


    return (
        <div className="jumbotron jumbotron-fluid p-0">
            <div className="card">
                
                <div className="card-img-overlay">
                    <h1 className="display-4">Fluid jumbotron</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>

            </div>
        </div>
    );
}

export default Header;