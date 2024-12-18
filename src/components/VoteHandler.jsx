import { updateArticleById } from "../api"
import {useState} from 'react'

function VoteHandler({votes, article_id}) {
    const [votesAdded, setVotesAdded] = useState (0)
   function handleClick() {
      updateArticleById(article_id)
      setVotesAdded((currVotesAdded) => {
      return currVotesAdded +1
      })
   }


    return (
        <>
          <p>Votes: {votes + votesAdded}</p>
          <button onClick={handleClick}>Vote this article</button>
        </>
    )
}

export default VoteHandler