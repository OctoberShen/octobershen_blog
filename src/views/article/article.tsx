import React from "react";
import {useParams, Link, Switch, useRouteMatch, Route} from 'react-router-dom'

function Art() {
    let  articleId  = useParams();
    return <h3>Requested article ID: {articleId}</h3>;
}

export const Article:React.FC = () => {
    let match = useRouteMatch()
    console.log('match', match)
    return(
        <div>
            <h2>Articles</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/:articleId`}>
                    <Art />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a article.</h3>
                </Route>
            </Switch>
        </div>
    )
}
