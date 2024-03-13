import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from './../../images/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest } from '../../requests';
import { setIsAdmin } from '../../redux/userSlice';

export const Header = () => {
    const isAdmin = useSelector(state => state.user.isAdmin);
    const dispatch = useDispatch();

    const onLogoutClick = async () => {
        const status = await logoutRequest();
        if (status === 200) {
            dispatch(
                setIsAdmin(false)
            );
        }
    }

    return <div className='header-box'>
        <img className='header-logo' src={logo} alt='logo'/>
        <div className='header-title'>СПОРТ ВОСТОЧНОЕ ДЕГУНИНО</div>
        <div className='header-link-text'>
            <Link to='/' className='header-link'>
                Главная
            </Link>
        </div>
        <div className='header-link-text'>
            <Link to='/results' className='header-link'>
                Турнирная таблица
            </Link>
        </div>
        {!isAdmin && <div className='header-link-text'>
            <Link to='/login' className='header-link'>
                Войти
            </Link>
        </div>}
        {isAdmin && <div className='header-link-text'>
            <div className='header-link' onClick={onLogoutClick}>
                Выйти
            </div>
        </div>}
    </div>
} 
