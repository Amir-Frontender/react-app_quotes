import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filteredToDo } from '../store/todoReducer';

const TodoSearch = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('')


    useEffect(()=>{
        dispatch(filteredToDo(filter))
    },[filter])
    
    return (
        <div className='filter'>
            <h2 className='filter__heading'>Поиск задач</h2>
            <input className='filter__input input' type="text" placeholder='Введи задание...' onChange={(e)=>setFilter(e.target.value)} />

        </div>
    );
};

export default TodoSearch;