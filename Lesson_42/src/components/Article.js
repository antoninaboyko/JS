import React, {Component} from "react";
import ArticleActions from "./ArticleActions";
import ArticleBody from "./ArticleBody";
import LangContext from "./lang-context";

class Article extends Component {

    render (){
        return (
            <div className="article">
             <LangContext.Consumer>
          {lang => (
            <>
              <div className="article__title">
                <h2>{lang.title_text}</h2>
              </div>
              <ArticleBody lang={lang} />
              <ArticleActions lang={lang} />
            </>
          )}
        </LangContext.Consumer>
            </div>
            );
    }
}
export default Article;





