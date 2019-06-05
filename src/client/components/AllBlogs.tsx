import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export interface AllBlogsProps { }

export interface Blog {
    id: number,
    name: string,
    title: string,
    content: string,
    _created: Date
}



const AllBlogs: React.SFC<AllBlogsProps> = () => {

    const [blogs, setBlogs] = useState<Blog[]>([]);

    const getBlogs = async () => {
        try {
            let r = await fetch('api/blogs');
            let blogs = await r.json();
            blogs.pop();
            setBlogs(blogs);
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => { getBlogs() }, [])

    return (
        <div className="row">
            {blogs.map(blog => {
                return (
                <div className="card-deck col-md-4" key={blog.id}>
                    <div className="card m-2 p-1 border-dark rounded">
                        <img src="images/lucy.jpg" alt="" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{blog.title}</h5>
                            <p className="card-text">{blog.content}</p>
                        </div>
                    </div>
                </div>
            )
            })}

        </div>
    );
}

export default AllBlogs;