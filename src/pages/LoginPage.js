import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login_logout, user } from '../store/todoReducer';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const login = (e) =>{
        e.preventDefault()
        if(name.length && password.length){
            dispatch(user({name: name, password: password}))
            dispatch(login_logout(true))
            localStorage.setItem('auth', 'true')
            localStorage.setItem('name', name)
            navigate("../todo")
        } else {
            alert(`Введите логин и пароль`)
        }

    }

    return (
        <div className='login__block'>
            <h3 className="login__header">Вход на сайт</h3>
            <form className='login__form'>
                <div className="login__form-name form">
                    <label htmlFor="inputName">Логин</label>
                    <input className='input' id='inputName' type="text" onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="login__form-psw form">
                    <label htmlFor="inputPsw">Пароль</label>
                    <input className='input' id='inputPsw' type="text" onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button className='login__form-btn btn' onClick={login}>Войти</button>
            </form>
        </div>
    );
};

export default LoginPage;