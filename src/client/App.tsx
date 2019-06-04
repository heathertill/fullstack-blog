import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './scss/app';

import Navbar from './components/Navbar';
import AllBlogs from './components/AllBlogs';
import OneBlog from './components/OneBlog';
import Admin from './components/Admin';
import AddBlog from './components/AddBlog';

export interface AppProps {

}

const App: React.SFC<AppProps> = () => {
    return (
        <Router>
            <main className="container">
                <Navbar />
                <Switch>
                    <Route path='/' component={AllBlogs} />
                    <Route exact path='/blogs/:id' component={OneBlog} />
                    <Route exact path='/:id/admin' component={Admin} />
                    <Route exact path='/add' component={AddBlog} />
                </Switch>
            </main>
        </Router>
    );
}

export default App;