import React, {Component} from "react";

class ArticleActions extends Component{

  render(){
    //console.log(this.props);
    return (
      <div className="article__actions">
        <button className="article__btn">{this.props.lang.button_read}</button>
      </div>
    );
  }
}

export default ArticleActions;



