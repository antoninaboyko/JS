import React, {Component} from "react";
import ArticleBody from "./components/ArticleBody";
import ArticleActions from "./components/ArticleActions";
import Article from "./components/Article";
import LangContext from "./components/lang-context";

let EN = {
  title: 'NVIDIA NEWS',
  title_text: 'NVIDIA Accelerated AI on Azure',
  description: 'Article description:',
  description_text: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
  current_lang: 'EN',
  button_read: 'Read'
}
let UA = {
  title: 'НОВИНИ NVIDIA',
  title_text: 'Прискорений штучний інтелект NVIDIA в Azure',
  description: 'Опис статті:',
  description_text: 'NVIDIA на Azure надає підприємствам можливості штучного інтелекту, мереж та високопродуктивних обчислень.',
  current_lang: 'UA',
  button_read: 'Читати'
}

let langBtns;
class App extends Component{
  constructor(){
    super()
    this.state = {
      lang: EN
    };
  }

  componentDidMount(){
  langBtns = document.querySelectorAll('.lang-btn');
  langBtns[1].classList.add('active');
  
  let saveLang = localStorage.getItem('lang');
  if(saveLang) {
    if (saveLang === 'UA') {
      this.setState({lang: UA});
      langBtns[0].classList.add('active');
    } else {
      this.setState({lang: EN});
      langBtns[1].classList.add('active');
    }
  }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.lang !== this.state.lang){
    langBtns.forEach(btn => btn.classList.remove('active'));
    this.state.lang.current_lang === 'UA' ? langBtns[0].classList.add('active')
                                          : langBtns[1].classList.add('active') 
    }
  } 

  SetLangEN(){
    localStorage.setItem('lang', 'EN');
    this.setState({lang: EN})
  }

  SetLangUA(){
    localStorage.setItem('lang', 'UA');
    this.setState({lang: UA})
  }

  render() {
    return (
      <div className="wrapper">
        {this.props.children}
        <h1 className="title">{this.state.lang.title}</h1>
        <LangContext.Provider value={this.state.lang}>
          <Article />
        </LangContext.Provider>
        <div className="lang">
          <button onClick={this.SetLangUA.bind(this)} className="lang-btn">UA</button>
          <button onClick={this.SetLangEN.bind(this)} className="lang-btn">EN</button>
        </div>
      </div>
    );
  }
}

export default App;