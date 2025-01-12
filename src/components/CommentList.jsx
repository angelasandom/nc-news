import { useEffect, useState } from "react";
import { getArticleComments } from "../api";
import { useParams } from "react-router";
import CommentCard from "./CommentCard";
import ErrorComponent from "./ErrorComponent";
import CommentForm from "./CommentForm";

function CommentList() {
    const {article_id} = useParams();
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        getArticleComments(article_id)
        .then((fetchedComments) => {
            setComments(fetchedComments);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
            }) 
       
    },[article_id])

    if(loading) return <p>Loading comments</p> 
    if (error) {
        return <ErrorComponent message={error.message} />;
      }

    return (
    <>
        <CommentForm articleId={article_id} setComments={setComments} />
        <h3 class="comment-title">Comments</h3>
        {comments.length > 0 ? (
            comments.map((comment) => (
                <CommentCard comment={comment} key={comment.comment_id} />
            ))
        ) : (
            <p>No comments yet.</p>
        )}
    </>
);

}

export default CommentList