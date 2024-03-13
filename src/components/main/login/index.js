import React, { useState } from 'react';
import './login.css';
import { loginRequest } from '../../../requests';
import { useDispatch } from 'react-redux';
import { setIsAdmin } from '../../../redux/userSlice';

export const LoginForm = () =>{
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    
    const onLoginButtonClick = async () => {
        setError(false);

        if (!login && !password) { 
            setError(true);

            return
        } 

        const status = await loginRequest({
            login, 
            password
        })

        if (status === 200) {
            dispatch(
                setIsAdmin(true)
            )
        } else {
            setError(true);
        }
    }

    return <div className="login-box">
        <div className="login-form">
            <div className='login-title'>Авторизация</div>
            {error && <div className='login-error'>Неверный логин или пароль</div>}
            <div className='login-label'>Логин</div>
            <input className='login-input' value={login} onChange={(e) => setLogin(e.target.value)}/>
            <div className='login-label'>Пароль</div>
            <input className='login-input' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <div className='login-button' onClick={onLoginButtonClick}>Войти</div>
        </div>
    </div>
}