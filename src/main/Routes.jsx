import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import UserCrud from '../components/user/UserCrud';
import Home from '../components/home/Home';

export default props =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={UserCrud} />
        <Redirect path="*" component={Home} />
    </Switch>