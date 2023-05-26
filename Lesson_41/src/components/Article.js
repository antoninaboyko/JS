import React from "react";
import ArticleBody from "./ArticleBody";
import ArticleActions from "./ArticleActions";
import ArticleAuthor from "./ArticleAuthor";
function Article() {
    return (
    <div className="article__title">
        <h2>NVIDIA Accelerated AI on Azure</h2>
        <ArticleBody />
        <ArticleActions />
        <ArticleAuthor />
    </div> 
    );
  }
  export default Article;