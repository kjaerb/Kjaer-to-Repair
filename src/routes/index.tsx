import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import iPhonePage from '../pages/iphone';
import iPadPage from '../pages/ipad';

const AppRoutes: FC = () => {
    return (
        <Switch>
            <Route path="/" exact={true} component={HomePage} /> {/* LAST ONE */}
            <Route path="/om-os" exact={true} component={AboutPage} />
            <Route path="/iphone" exact={true} component={iPhonePage} />
            <Route path="/ipad" exact={true} component={iPadPage} />
        </Switch>
    );
};

export default AppRoutes;