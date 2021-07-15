import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

/** ROTAS */
import Home from '../pages/home.js'


export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={['/', '/home']} component={Home} />
            </Switch>
        </BrowserRouter>
    )
}