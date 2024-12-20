import { useEffect,useState } from "react";
import { useParams } from "react-router";
import { getArticlesByTopic } from "../api";
import ErrorComponent from "./ErrorComponent";
import Article from "./Article";

function ArticlesByTopic() {
    const { topic } = useParams();
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null)
        getArticlesByTopic(topic)
        .then((data) => {
            setArticles(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        });
    }, [topic]);

    if(loading) return <p>Loading articles</p>
    if (error) {
        return <ErrorComponent message="The articles can't be found." />;
      }

    return (
      <section id="article-by-topic">
      <h1>Your news about {topic}</h1>
      <div className="articles-container">
        {articles.map((article) => (
          <Article article={article} key={article.article_id} />
        ))}
      </div>
    </section>
    )
}

export default ArticlesByTopic