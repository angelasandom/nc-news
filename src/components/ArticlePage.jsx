import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import { useParams } from "react-router";


function ArticlePage() {
    const {article_id} = useParams();
    const [articleById, setArticleById] = useState({});
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        getArticleById(article_id)
        .then((response) => {
            setArticleById(response.article);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);

        })
        
    },[article_id])

    if(loading) return <p>Loading articles</p> 
    if (!articleById || Object.keys(articleById).length === 0) {
        return <p>No article found</p>;
      }

    const formattedDate = new Date(articleById.created_at).toLocaleDateString({
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <article className="article-page">
          <h2>{articleById.title}</h2>
          <img className="img-article" src={articleById.article_img_url} />
          <p>By: {articleById.author}</p>
          <p>{articleById.body}</p>
          <p>Id: {articleById.article_id}</p>
          <p>{articleById.topic}</p>
          <p>{formattedDate}</p>
          <p>Votes: {articleById.votes}</p>
        </article>
    )
}

export default ArticlePage