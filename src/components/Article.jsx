import { Link } from "react-router-dom";
import formatDate from "../../utils/formatDate";

function Article({ article }) {
  const formattedDate = formatDate(article.created_at);
  return (
    <div className="article-card">
      <div className="title-container">
        <h2>{article.title}</h2>
      </div>
      <img
        className="img-article"
        src={article.article_img_url}
        alt="Imagen del artículo"
      />
      <p>By: {article.author}</p>
      <p>Id: {article.article_id}</p>
      <p>{article.topic}</p>
      <p>{formattedDate}</p>
      <Link to={`/articles/${article.article_id}`} className="read-more">
        Read more
      </Link>
    </div>
  );
}

export default Article;
