import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'; 

import Detail from './pages/Detail';
import List from './pages/List';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
// https://github.com/reactjs/react-router/blob/master/docs/API.md#example-3


ReactDOM.render(
    <Router history={appHistory}
        onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={ List } />
        <Route path="/detail/:repo" component={ Detail } />
    </Router>,
    document.getElementById('app')
);