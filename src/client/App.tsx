import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './scss/app';

import Navbar from './components/Navbar';
import AllBlogs from './components/AllBlogs';
import OneBlog from './components/OneBlog';
import Admin from './components/Admin';
import AddBlog from './components/AddBlog';



const App: React.SFC<AppProps> = props => {


    return (
        <BrowserRouter>
            <main className="container">
                <Navbar />
                <Switch>
                    <Route exact path='/' component={AllBlogs} />
                    <Route exact path='/blogs/:id' component={OneBlog} />
                    <Route exact path='/:id/admin' component={Admin} />
                    <Route exact path='/add' component={AddBlog} />
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;

export interface AppProps { }