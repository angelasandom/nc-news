import Article from "./Article"
import axios from "axios"
import { getArticles } from "../api";
import { useState, useEffect } from "react"

function ArticlesList () {
    const [articlesList, setArticlesList] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const fetchArticle = axios.get("https://my-nc-news-2ql9.onrender.com/api/articles")
        .then((response) => {
            console.log(response.data);
            setArticlesList(response.data.articles);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);

        })
        
    },[])

    if(loading) return <p>Loading articles</p>

    return (
        <>
         <h2>Articles List</h2>
         {articlesList.map((article) => (
            <Article article={article} key={article.article_id}/>
         ))}
         
        </>
    )
}

export default ArticlesList