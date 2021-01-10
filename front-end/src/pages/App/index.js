import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect, Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from '../../shared/helpers/history';
import { alertActions } from '../../store/actions';
import { PrivateRoute } from '../../shared/components/PrivateRoute';
import { Dashboard } from '../Dashboard';
import { LoginPage } from '../LoginPage';
import { SignUp } from '../SignUp';


function App() {
    const alert = useSelector(state => state.alert);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    }, []);

    return (
            <div className="container">
                <Router history={history}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div id="navbarText" className="w-100">
                        <ul className="list-unstyled">
                        {!user && 
                            <li className="float-left">
                            <NavLink to="/login" activeClassName='text-light bg-primary' className="btn btn-link">Login</NavLink>
                            </li>
                        }
                        {!user && 
                            <li className="float-left">
                            <NavLink to="/register" activeClassName='text-light bg-primary' className="btn btn-link">Sign up</NavLink>
                            </li>
                        }
                            {user && user.firstName && 
                            <>
                            <li className="float-right">
                            <NavLink to="/login"  className="btn btn-link">Logout</NavLink>
                            </li>
                             <li className="float-right py-2">
                            Welcome {user.firstName}
                             </li>
                             </>
                            }
                        </ul>
                    </div>
                    </nav>
                        <Switch>
                            <PrivateRoute exact path="/" component={Dashboard} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={SignUp} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                </div>
    );
}

export { App };