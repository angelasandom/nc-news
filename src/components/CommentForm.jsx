import { postCommentByArticleId } from "../api";
import { useState } from "react";
import ErrorComponent from "./ErrorComponent";

const CommentForm = ({ articleId, setComments }) => {
    const [postComment, setPostComment] = useState("");
    const [error, setError] = useState(null);
    const [commentIsSent, setCommentIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (postComment.trim() === "") {
          setError("You must write your comment before submit");
          setCommentIsSent(false);
          return;
        }
    
        setError(null);
        setCommentIsSent(false);

        const newComment = {
            username: "grumpy19",
            body: postComment
          };
    
        postCommentByArticleId(articleId, newComment)
          .then((addedComment) => {
            setComments((currentComments) => [addedComment, ...currentComments]);
            setCommentIsSent(true);
            setPostComment("");
          })
          .catch((error) => {
            setError(error);
            setCommentIsSent(false);
          })
      };

    if (error) {
        return <ErrorComponent message={error.message} />;
      }
    
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Write a new comment:
          <textarea
          value={postComment}
          onChange={(event) => setPostComment(event.target.value)}
          />
        </label>
        <button type="submit">Send your comment</button>
        {commentIsSent && <p className="success-message">Your comment has been posted!</p>}
      </form>
    );
  };

export default CommentForm