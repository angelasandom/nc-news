import { useEffect, useState } from "react";
import { getArticleComments } from "../api";
import { useParams } from "react-router";
import CommentCard from "./CommentCard";
import ErrorComponent from "./ErrorComponent";

function CommentList() {
    const {article_id} = useParams();
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getArticleComments(article_id)
        .then((comments) => {
            setComments(comments);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
    
            }) 
       
    },[article_id])

    if(loading) return <p>Loading articles</p> 
    if (error) {
        return <ErrorComponent message={error.message} />;
      }

    return (
        <>
        <h3 className="comment-title">Comments</h3>
            {comments.map((comment) => (
            <CommentCard comment={comment} key={comment.comment_id} />))}
        </>
    )
}

export default CommentList