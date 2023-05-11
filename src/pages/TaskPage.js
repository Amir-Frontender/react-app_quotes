import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { url } from '../API/Api';

const TaskPage = () => {
    const params = useParams()
    const post_id = params.id
    const [data, setData] = useState([])
    const navigate = useNavigate()


    async function fetchData() {
        const response = await fetch(`${url}/${post_id}`);
        const data = await response.json();
        setData (data)
    }


    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div className='data container'>
            <div className='data__header'>
                <h1>Пост №{post_id}</h1>
                <button className='data__btn btn' onClick={()=>navigate(-1)}>Назад к списку</button>
            </div>
            <div className='data__block'>
            <p className='data__block-task'><strong>Задача: </strong><p className='test'>{data.title}</p></p>
            {data.completed
            ?
            <p className='data__block-status done'><strong>Статус: </strong> Выполнено</p>
            :
            <p className='data__block-status undone'><strong>Статус: </strong> Не выполнено</p>
            }
            </div>

        </div>
    );
};

export default TaskPage;