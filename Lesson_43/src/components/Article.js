import React from "react";
import ArticleAuthor from "./ArticleAuthor";
import ArticleBody from "./ArticleBody";

function Article(props) {
  
    return (
    <>
    {props.children}
    <ArticleBody lang={props.lang} read={props.read} show={props.show} text={props.text} />
    <ArticleAuthor lang={props.lang} text={props.text} /> 
    </>
    );
  }
  export default Article;


