import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Blog } from './AllBlogs';

export interface OneBlogProps extends RouteComponentProps<{ id: string }> {

}

const OneBlog: React.SFC<OneBlogProps> = ({ history, match: { params: { id } } }) => {

    const [blog, setBlog] = useState<Blog>({
        id: null,
        name: null,
        title: null,
        content: null,
        _created: null
    });

    const getBlog = async () => {
        let r = await fetch(`/api/blogs/${id}`);
        let blog = await r.json();
        console.log(blog)
        setBlog(blog);
    }

    useEffect(() => { getBlog(); }, [])

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

export default OneBlog;