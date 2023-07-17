import React from "react";
import { useState, useEffect } from "react";
import { getCommentsById } from "../api-utils";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getCommentsById(article_id).then((data) => {
      setComments(data);
    });
  }, []);
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
    </div>
  );
}

export default Comments;
