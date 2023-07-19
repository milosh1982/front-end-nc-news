import React, { useEffect, useState } from "react";
import { addComment, getUsers } from "../api-utils";

function CommentAdder({ article_id, setComments }) {
  const [error, setError] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const commentLength = newComment.length;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    addComment(newComment, article_id)
      .then((postedComment) => {
        setComments((currentComments) => {
          return [postedComment, ...currentComments];
        });
        setNewComment("");
        alert("Your comment has been posted.");
        setSubmitted(false);
      })
      .catch((err) => {
        setError(true);
      });
  };
  return (
    <section className="form-adder">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="comment">Write your comment:</label>
        <textarea
          id="comment"
          type="text-area"
          name="comment"
          value={newComment}
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
          maxLength={250}
          required
        ></textarea>
        <p>Max characters: {commentLength}/250</p>
        <button disabled={submitted} aria-label="Add new comment">
          Submit
        </button>
        {error && <p>Something went wrong, please submit form again</p>}
      </form>
    </section>
  );
}

export default CommentAdder;
