import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Blog } from './AllBlogs';

export interface AdminProps extends RouteComponentProps<{id: string}> {  }

const Admin: React.SFC<AdminProps> = ({ history, match }) => {

let id = match.params.id

    const [blog, setBlog] = useState<Blog>({
        id: null,
        name: null,
        title: null,
        content: null,
        _created: null,
        authorid: null,
    });
    
    const getBlog = async () => {
        let r = await fetch(`/api/blogs/${id}`);
        let blog = await r.json();
        console.log('admin', blog)
        setBlog(blog)
    }

    useEffect(() => { getBlog(); }, [])


    
    return (
        <div className="card-deck">
            <div className="card">
                <div className="card-body">
                    
                    <h5><input className="form-control" type="text" defaultValue={blog.title} /></h5>
                    <input type="text" className="form-control" defaultValue={blog.content} />
                    <div>
                        <button className="btn btn-info">Edit</button>
                        <button className="btn btn-info">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;