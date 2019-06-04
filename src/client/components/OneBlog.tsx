import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export interface OneBlogProps {

}

const OneBlog: React.SFC<OneBlogProps> = () => {
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

export default OneBlog;