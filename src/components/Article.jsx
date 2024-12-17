import { Link } from "react-router-dom";

function Article ({article}) {
   const formattedDate = 
        new Date(article.created_at).toLocaleDateString({
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    
    return (
        <div className="article-card">
          <h2>{article.title}</h2>
          <img className="img-article" src={article.article_img_url} />
          <p>By: {article.author}</p>
          <p>Id: {article.article_id}</p>
          <p>{article.topic}</p>
          <p>{formattedDate}</p>
          <p>Votes: {article.votes}</p>
          <p>Comments: {article.comment_count}</p>
          <Link to={`/articles/${article.article_id}`}>Read more</Link>
        </div>
    )
}

export default Article