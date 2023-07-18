import React from "react";
import { useState, useEffect } from "react";
import { getCommentsById } from "../api-utils";
import CommentAdder from "./CommentAdder";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getCommentsById(article_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, []);
  if (comments.length === 0) {
    return <p>No comments to show. Why not be the first one to add one?</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="comments-box">
      {comments.map((comment) => {
        const dateFormat = new Date(comment.created_at).toLocaleString();
        return (
          <div className="comment-box" key={comment.comment_id}>
            <p>{comment.body}</p>
            <div className="comment-footer">
              <p>author: {comment.author} </p>
              <p>votes: {comment.votes}</p>
              <p>date: {dateFormat}</p>
            </div>
          </div>
        );
      })}
      <CommentAdder article_id={article_id} setComments={setComments} />
    </div>
  );
}

export default Comments;
