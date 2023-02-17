import React from "react";
import { Switch } from 'react-router-dom';
import MyRoute from "./MyRoute";
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import {useSelector} from 'react-redux';

export default function Routes(){
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    return (
        <Switch>
            <MyRoute exact path='/login' component={Login} isClosed={isLoggedIn}/>
            <MyRoute path='*' component={Page404}/>
        </Switch>
    );
}