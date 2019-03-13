import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from './components/Menu';
import Kitchen from './components/Kitchen';

export default (
    <Switch>
        <Route component={ Menu } exact path='/' />
        <Route component={ Kitchen } path='/kitchen' />
        {/* <Route component={ Kitchen } path='/edit:id' /> */}
    </Switch>
)