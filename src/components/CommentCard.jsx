function CommentCard({comment}) {
    const formattedDate = 
        new Date(comment.created_at).toLocaleDateString({
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
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