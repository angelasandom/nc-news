import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import { useParams } from "react-router";
import CommentList from "./CommentList";
import ErrorComponent from "./ErrorComponent";


function ArticlePage() {
    const {article_id} = useParams();
    const [articleById, setArticleById] = useState({});
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
 
    useEffect(() => {
        getArticleById(article_id)
        .then((article) => {
            setArticleById(article);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);

        });
        
    },[article_id])

    if(loading) return <p>Loading articles</p> 
    if (error) {
        return <ErrorComponent message={error.message} />;
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
          <h1>{articleById.title}</h1>
          <img className="img-article" src={articleById.article_img_url} />
          <p className="author">By: {articleById.author}</p>
          <p>{articleById.body}</p>
          <p>Id: {articleById.article_id}</p>
          <p>{articleById.topic}</p>
          <p>{formattedDate}</p>
          <p>Votes: {articleById.votes}</p>
          <section>
            <CommentList article_id="article_id" />
          </section>
        </article>
    )
}

export default ArticlePage