import { Link } from "react-router-dom";
import VoteHandler from "./VoteHandler";
import formatDate from "../../utils/formatDate";

function Article ({article}) {
    const formattedDate = formatDate(article.created_at);
    return (
        <div className="article-card">
          <h2>{article.title}</h2>
          <img className="img-article" src={article.article_img_url} />
          <p>By: {article.author}</p>
          <p>Id: {article.article_id}</p>
          <p>{article.topic}</p>
          <p>{formattedDate}</p>
          <VoteHandler votes={article.votes} article_id={article.article_id}/>
          <p>Comments: {article.comment_count}</p>
          <Link to={`/articles/${article.article_id}`} className="read-more">Read more</Link>
        </div>
    )
}

export default Article