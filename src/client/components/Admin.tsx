import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Blog } from './AllBlogs';
import { Tag } from './OneBlog'

export interface AdminProps extends RouteComponentProps<{ id: string }> { }

const Admin: React.SFC<AdminProps> = ({ history, match }) => {

    let id = match.params.id

    const [blog, setBlog] = useState<Blog>(Object);
    const [blogTitle, setBlogTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const [blogTag, setBlogTag] = useState('');

    // const register = e => {
    //     e.preventDefault();

    // }

    // const handleTitle = (e: any) {
    //     setBlogTitle(e.target.value)
    // }

    const getBlog = async () => {
        let r = await fetch(`/api/blogs/${id}`);
        let blog = await r.json();
        console.log('admin', blog)
        setBlog(blog)
        setBlogTitle(blog.title)
        setBlogContent(blog.content)
    }

    useEffect(() => { getBlog(); }, []);

    const handleEdit = async () => {
        let data = {
            title: blogTitle,
            content: blogContent,

        }
        try {
            await fetch(`/api/blogs/${id}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json"
                }
            })
            history.replace('/')
        } catch (err) {
            console.log(err)
        }
    };

    const handleDelete = async () => {
        try {
            await fetch(`/api/blogs/${id}`, {
                method: 'DELETE'
            });
            history.push('/')
        } catch (err) {
            console.log(err)
        }
    };


    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBlogTitle(e.target.value);
        console.log('blogtitle', blogTitle)
    }

    const handleContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBlogContent(e.target.value);
        console.log('blogcontent', blogContent)
    }

    return (
        <div className="card-deck">
            <div className="card">
                <div className="card-body">
                    {/* <form > */}
                        <h5><input
                            onChange={handleTitle}
                            className="form-control" type="text" value={blogTitle} /></h5>
                        <input onChange={handleContent} type="text" className="form-control" value={blogContent} defaultValue={blog.content} />
                        <div>
                            <button
                                onClick={handleEdit}
                                className="btn btn-info">Edit</button>
                            <button
                                onClick={handleDelete}
                                className="btn btn-info">Delete</button>
                        </div>
                    {/* </form> */}
                </div>
            </div>
        </div>
    );
}

export default Admin;