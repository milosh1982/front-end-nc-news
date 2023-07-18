import React, { useState } from "react";
import { patchVotesMinus, patchVotesPlus } from "../api-utils";

function VoteButtons({ article_id, votes }) {
  const [vote, setVote] = useState(0);
  const [likeButton, setLikeButton] = useState(false);
  const [dislikeButton, setDislikeButton] = useState(false);

  const onClickHandlerPlus = () => {
    setLikeButton(true);
    setVote((currentVote) => {
      return currentVote + 1;
    });
    patchVotesPlus(article_id).catch((err) => {
      setVote((currentVote) => {
        return currentVote - 1;
      });
    });
  };
  const onClickHandlerMinus = () => {
    setDislikeButton(true);
    setVote((currentVote) => {
      return currentVote - 1;
    });
    patchVotesMinus(article_id).catch((err) => {
      setVote((currentVote) => {
        return currentVote + 1;
      });
    });
  };

  return (
    <>
      <p>Votes: {votes + vote}</p>
      <div className="vote-buttons-box">
        <button
          onClick={onClickHandlerPlus}
          className="btn"
          disabled={likeButton === true}
        >
          Like👍
        </button>
        <button
          onClick={onClickHandlerMinus}
          className="btn"
          disabled={dislikeButton === true}
        >
          Dislike👎
        </button>
      </div>
    </>
  );
}

export default VoteButtons;
