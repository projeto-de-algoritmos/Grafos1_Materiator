import React from 'react';
import {
    Route, Switch, Redirect,
} from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import Materiator from '../Pages/Materiator';
import Priorities from '../Pages/Priorities';

const Router = () => {

    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/materiator" exact component={Materiator} />
            <Route path="/prioridades" exact component={Priorities} />

            <Redirect path="*" to="/" />
        </Switch>
        
    )

    

}

export default Router;