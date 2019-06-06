import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Blog } from './Allblogs';

export interface AddBlogProps { }

const AddBlog: React.SFC<AddBlogProps> = () => {

    const [blog, useBlog] = useState<Blog>({});

    const createBlog = async (title: string, content: string, authorid: string) => {
        try {
            let data = { title, content, authorid }
        } catch (err) {
            console.log(err)
        }

    }




    // let data = { userid: this.state.userid, text: this.state.text };
    // let res = await fetch('/api/chirps/', {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //     headers: {
    //         "Content-type": "application/json"
    //     },
    // });
    // let info = await res.json();
    // this.setState({ chirpId: info.insertId })

    return (
                <div className="row">
            <div className="c0l-md-4 mx-5">
                <div className="card border border-dark rounded">
                    <div className="card-body" key={blog.id}>
                        <h5 className="card-title">{blog.title}</h5>
                        <p className="card-text">{blog.content}</p>
                        <p className="card-text">{blog._created}</p>
                        <button onClick={() => history.goBack()} className="btn btn-warning shadow btn-block mx-auto">Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBlog;