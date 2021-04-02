import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/home';

const AppRoutes: FC = () => {
    return (
        <Switch>

            <Route path="/" exact={true} component={HomePage} /> {/* LAST ONE */}
        </Switch>
    );
};

export default AppRoutes;