import formatDate from "../../utils/formatDate";

function CommentCard({comment}) {
    const formattedDate = formatDate(comment.created_at);
    return (
        <section className="comment-card">
        <p>By: {comment.author} </p>
        <p>{comment.body}</p>
        <p>{formattedDate}</p>
        <p>Votes: {comment.votes}</p>
        </section>
    )
}

export default CommentCard