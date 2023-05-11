import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { publickRoutes, privateRoutes } from "../routes/routes";
import { useDispatch, useSelector } from "react-redux";
import { login_logout, user } from "../store/todoReducer";

const AppRouter = () => {
  const {isAuth} = useSelector(state=>state)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(localStorage.getItem('auth') === 'false'){
      dispatch(login_logout(false))
    }else if(localStorage.getItem('auth') === 'true'){
      dispatch(login_logout(true))
      dispatch(user({name: localStorage.getItem('name'), password: "" }))
    }
  }, [isAuth])
  if(isAuth){
    return (
      <Routes>
        {privateRoutes.map((route, index) => (
          <Route path={route.path} element={route.element} key={index} />
        ))}
      </Routes>
    );
  }else{
    return (
      <Routes>
        {publickRoutes.map((route, index) => (
          <Route path={route.path} element={route.element} key={index} />
        ))}
      </Routes>
    );
  }
};

export default AppRouter;
