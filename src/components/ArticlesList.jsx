import Article from "./Article"
import axios from "axios"
import { getArticles } from "../api";
import { useState, useEffect } from "react"
import ErrorComponent from "./ErrorComponent";

function ArticlesList () {
    const [articlesList, setArticlesList] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchArticle = axios.get("https://my-nc-news-2ql9.onrender.com/api/articles")
        .then((response) => {
            setArticlesList(response.data.articles);
            setLoading(false);
        })
        .catch((error) => {
            setError(true)
            setLoading(false);

        })
        
    },[])

    if(loading) return <p>Loading articles</p>
    if (error) {
        return <ErrorComponent message="The articles can't be found." />;
      }
    

    return (
        <>
         <h2>Latest News</h2>
         <div className="grid-container">
            <div className="articles-column">
         {articlesList.map((article) => (
            <Article article={article} key={article.article_id}/>
         ))}
           </div>
         </div>
        </>
    )
}

export default ArticlesList