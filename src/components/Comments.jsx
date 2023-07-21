import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { deleteComment, getCommentsById } from "../api-utils";
import CommentAdder from "./CommentAdder";
import { UserContext } from "../App";

function Comments({ article_id }) {
  const user = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    getCommentsById(article_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, []);
  const handleDelete = (index, id) => {
    setDeleted(true);
    setComments((values) => {
      return values.filter((_, i) => i !== index);
    });
    deleteComment(id).then(() => {
      alert("Your comment has been deleted");
      setDeleted(false);
    });
  };
  if (comments.length === 0) {
    return <p>No comments to show. Why not be the first one to add one?</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="comments-box">
      <CommentAdder article_id={article_id} setComments={setComments} />
      <p>Comments:</p>
      {comments.map((comment, index) => {
        const dateFormat = new Date(comment.created_at).toLocaleString();
        return (
          <div className="comment-box" key={comment.comment_id}>
            <p>{comment.body}</p>
            <div className="comment-footer">
              <p>author: {comment.author} </p>
              <p>votes: {comment.votes}</p>
              <p>date: {dateFormat}</p>
              {comment.author === user.user && (
                <button
                  disabled={deleted}
                  onClick={() => {
                    handleDelete(index, comment.comment_id);
                  }}
                >
                  Delete Comment
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
