import React, {useCallback} from 'react';
import { 
    FaHome, 
    FaSignInAlt, 
    FaUserAlt, 
    FaUserEdit, 
    FaUserPlus,
    FaUserMinus, 
    FaShoppingCart, 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as loginActions from '../../store/modules/login/actions';
import { Nav } from './styled';
import history from '../../services/history';
import {toast} from 'react-toastify';

export default function Header(){
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const dispatch = useDispatch();
    const handleLogin = useCallback(() => {
        if (isLoggedIn) {
            dispatch(loginActions.loginFailure({isLoggedIn}));
            toast.success('Logout sucessufully.');
            history.push('/');
        }
    }, [isLoggedIn, dispatch]);
    return (
        <Nav>
            <Link to="/">
                <FaHome size={24}/>
            </Link>
            <Link to="/login">
                {(isLoggedIn && (<FaUserEdit size={24}/>)) || (<FaUserAlt size={24}/>)}
            </Link>
            <Link to="/register">
                {(isLoggedIn && (<FaUserMinus size={24}/>)) || (<FaUserPlus size={24}/>)}
            </Link>
            <Link to="/shopping">
                <FaShoppingCart size={24}/>
            </Link>
            <Link to="/">
                {isLoggedIn && <FaSignInAlt onClick={handleLogin} size={24}/>}
            </Link>
        </Nav>
    );
}