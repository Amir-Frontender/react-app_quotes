import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login_logout } from "../store/todoReducer";

const Header = () => {
  const {isAuth} = useSelector(state=>state)
  const dispatch = useDispatch()

  const logout = ()=>{
  dispatch(login_logout(false))
  localStorage.setItem('auth', 'false')
  localStorage.setItem('name', "")
  }
  return (
    <div className="header">
      <ul>
        <Link to="/">
          <li>Главная</li>
        </Link>
        <Link to="todo">
          <li>Список дел</li>
        </Link>
        <Link to="quotes">
          <li>Цитаты</li>
        </Link>
        {isAuth
        ?
        <li onClick={logout} className="header__logout">Выйти</li>
        :
        <Link to="login">
        <li>Войти</li>
      </Link>
        }
      </ul>
    </div>
  );
};

export default Header;
