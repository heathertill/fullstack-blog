import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export interface AdminProps {

}

const Admin: React.SFC<AdminProps> = () => {
    return (
        <div className="card-deck">
            <div className="card">
                <img src="" alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                </div>
            </div>
        </div>
    );
}

export default Admin;