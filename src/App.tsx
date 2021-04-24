import React from 'react';
import './App.css';
import {Home} from '@/views/home/home'
import {Article} from "@/views/article/article"
import {Search} from "@/views/search/search"
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {MyHeader} from "@/components/myHeader/myHeader";

function App() {
    return (
        <div className="App">
            <MyHeader />
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/home">home</Link></li>
                        <li><Link to="/article">article</Link></li>
                        <li><Link to="/search">search</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                    <Route path="/article">
                        <Article />
                    </Route>
                    <Route path="/search">
                        <Search />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
