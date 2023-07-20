import React from "react";

function ArticleCard(props) {
  return (
    <section>
      <p className="article-title">{props.title}</p>
      <img src={props.img} className="articles_img" alt={props.title}></img>
      <div className="comments-votes-box">
        <p>comment count: {props.comment_count}</p>
        <p>votes count: {props.votes}</p>
        <p>date: {new Date(props.created_at).toLocaleDateString()}</p>
      </div>
    </section>
  );
}

export default ArticleCard;
