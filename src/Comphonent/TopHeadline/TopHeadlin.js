import React, { useEffect } from 'react';
import { useState } from 'react';
import New from '../News/New';

const TopHeadlin = () => {
    const [articles, setArticles] = useState([]);
    useEffect(()=>{
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=0fc06a8e019240e1ba2291db460dd336')
        .then(res=>res.json())
        .then(data=>setArticles(data.articles))
        
    }, [])
    return (
        <div>
          
            <h1>Top Headlin : {articles.length}</h1>
            {
                articles.map(article=><New article={article}></New>)
            }
        </div>
    );
};

export default TopHeadlin;