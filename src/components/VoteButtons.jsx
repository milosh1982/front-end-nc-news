import React, { useState } from "react";
import { patchVotesMinus, patchVotesPlus } from "../api-utils";

function VoteButtons({ article_id, votes }) {
  const [vote, setVote] = useState(0);
  const [likeButtonCount, setLikeButtonCount] = useState(0);
  const [dislikeButtonCount, setDislikeButtonCount] = useState(0);
  const [error, setError] = useState(false);

  const onClickHandlerPlus = () => {
    setError(false);
    if (likeButtonCount === 0) {
      setLikeButtonCount((currentLikeButtonCount) => {
        return currentLikeButtonCount + 1;
      });
      setVote((currentVote) => {
        return currentVote + 1;
      });
      patchVotesPlus(article_id).catch((err) => {
        setVote((currentVote) => {
          return currentVote - 1;
        });
        setError(true);
      });
    }
    if (likeButtonCount === 1) {
      setVote((currentVote) => {
        return currentVote - 1;
      });
      patchVotesMinus(article_id).catch((err) => {
        setVote((currentVote) => {
          return currentVote + 1;
        });
        setError(true);
      });
      setLikeButtonCount(0);
    }
  };

  const onClickHandlerMinus = () => {
    setError(false);
    if (dislikeButtonCount === 0) {
      setDislikeButtonCount((currentDislikeButtonCount) => {
        return currentDislikeButtonCount + 1;
      });
      setVote((currentVote) => {
        return currentVote - 1;
      });
      patchVotesMinus(article_id).catch((err) => {
        setVote((currentVote) => {
          return currentVote + 1;
        });
        setError(true);
      });
    }
    if (dislikeButtonCount === 1) {
      setVote((currentVote) => {
        return currentVote + 1;
      });
      patchVotesPlus(article_id).catch((err) => {
        setVote((currentVote) => {
          return currentVote + 1;
        });
        setError(true);
      });
      setDislikeButtonCount(0);
    }
  };

  return (
    <>
      <p>Votes: {votes + vote}</p>
      <div className="vote-buttons-box">
        <button
          onClick={onClickHandlerPlus}
          className="btn"
          aria-label="Like this article"
        >
          Like👍
        </button>
        <button
          onClick={onClickHandlerMinus}
          className="btn"
          aria-label="Dislike this article"
        >
          Dislike👎
        </button>
      </div>
      {error && <p>Oooops something went wrong, please try again</p>}
    </>
  );
}

export default VoteButtons;
