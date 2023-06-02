import React from "react";

function ArticleAuthor(props) {
  const currentLang = props.lang;
  return (
      <div className="article__author">
        <p className="article__author--name">{props.text[currentLang].author}</p>
        <p className="article__author--date">{props.text[currentLang].published}</p>
        <p className="article__author--theme">{props.text[currentLang].theme}</p>
      </div>
    );
  }
export default ArticleAuthor;