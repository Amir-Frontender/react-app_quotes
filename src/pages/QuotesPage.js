import React, { useEffect, useState } from 'react';
import { quotes_url } from '../API/Api';
import { Card, Button } from 'react-bootstrap';

const QuotesPage = () => {
    const [quotes, setQuotes] = useState({})
    async function fetchData() {
        try {
            const response = await fetch(quotes_url)
            const { statusCode, statusMessage, ...data } = await response.json()
            console.log(data);
            if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
            setQuotes(data);
        }catch(error){
            console.error(error);
            setQuotes({ content: "Opps... Something went wrong" })
        }

    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div className="quotes__block">
            <div className='quotes__container container'>
            <div className='quotes__content'>
                <p className='quotes__text'>{quotes.content}</p>
                {quotes.author && (
                  <footer className="blockquote-footer">
                    <cite title="Source Title">{quotes.author}</cite>
                  </footer>
                )}
            </div>
            <button onClick={fetchData} className='quotes__btn btn'>New Quote</button>
        </div> 
    </div>
    );
};

export default QuotesPage;
