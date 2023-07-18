import React, { useEffect, useState } from "react";
import { addComment, getUsers } from "../api-utils";

function CommentAdder({ article_id, setComments }) {
  const [noUser, setNoUser] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [inputs, setInputs] = useState({
    username: "",
    comment: "",
  });
  const commentLength = inputs.comment.length;

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputs({ ...inputs, [event.target.name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setError(false);
    users.forEach((user) => {
      if (user.username !== inputs.username) {
        return setNoUser(true);
      }
    });

    addComment(inputs.username, inputs.comment, article_id)
      .then((postedComment) => {
        setComments((currentComments) => {
          return [postedComment, ...currentComments];
        });
        setInputs({ username: "", comment: "" });
        setNoUser(false);
        alert("Your comment has been posted.");
      })
      .catch((err) => {
        setError(true);
      });
  };
  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          name="username"
          value={inputs.username}
          onChange={handleChange}
          required
        ></input>
        {noUser && <p>User not exist!</p>}
        <label htmlFor="comment">Write your comment:</label>
        <textarea
          id="comment"
          type="text-area"
          name="comment"
          value={inputs.comment}
          onChange={handleChange}
          maxLength={250}
          required
        ></textarea>
        <p>Max characters: {commentLength}/250</p>
        <button>Submit</button>
        {error && <p>Somethink went wrong, please submit form again</p>}
      </form>
    </section>
  );
}

export default CommentAdder;
