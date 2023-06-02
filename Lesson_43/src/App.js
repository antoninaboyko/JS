import React, { useState } from "react";
import Article from "./components/Article";


 function App () {

  const article = {
    en: { 
        title: 'NVIDIA NEWS',
        title_text: 'NVIDIA Accelerated AI on Azure',
        description: 'Article description:',
        preview: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
        content: 'Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.',
        author: 'Author: Mike',
        published: 'Published: 06.12.2022',
        theme: 'Theme: Video cards',
        markAsRead: 'Mark as read',
        read: 'Read',
        close: 'Close',
        markAsUnread: 'Mark as unread',
      },
    ua: {
        title: 'НОВИНИ NVIDIA ',
        title_text: 'Прискорений штучний інтелект NVIDIA в Azure',
        description: 'Опис статті:',
        preview: 'NVIDIA на Azure надає підприємствам штучний інтелект, мережі та високопродуктивні обчислення.',
        content: 'Microsoft Azure та NVIDIA дозволяють підприємствам у хмарі використовувати об\'єднану міць прискорених обчислень NVIDIA та мереж NVIDIA на запит для задоволення різноманітних обчислювальних вимог ІІ, машинного навчання, аналізу даних, графіки, віртуальних робочих столів та високопродуктивних обчислень додатків HPC. Від дрібних графічних процесорів і одиночних графічних процесорів до кількох графічних процесорів на кількох вузлах для розподілених обчислень - отримайте доступ до прискорення графічного процесора потрібного розміру для робочих навантажень.',
        author: 'Автор: Майк',
        published: 'Опубліковано: 06.12.2022',
        theme: 'Тема: відео карти',
        markAsRead: 'Прочитано',
        read: 'Читати',
        close: 'Закрити',
        markAsUnread: 'Не прочитано',
    },
};
  const [isShow, setIsShow]  = useState(false);
  const [isRead, setIsRead]  = useState('');
  const [lang, setLang] = useState('en');

  const toggleArticle = () => {
    setIsShow(!isShow);
    setIsRead('read');
  }

  const  markAsRead = () => {
   setIsRead('read');
  }

  const markAsUnread = () => {
    setIsRead('');
  }

  const changeLanguage = (selectedLang) => {
    setLang(selectedLang);
  };

  return (
    <div className={"wrapper"}>
      <h1 className="title">{article[lang].title}</h1>
      <div className="article">
          <Article lang={lang} read={isRead} show={isShow} text={article}>
          <div className="article__title">
            <h2>{article[lang].title_text}</h2>
          </div>
          </Article>
        <div className="article__actions">
          <button onClick={markAsRead} className="article__btn">{article[lang].markAsRead}</button>
          <button onClick={toggleArticle} className="article__btn" >{isShow ? article[lang].close : article[lang].read}</button>
          <button onClick={markAsUnread} className="article__btn">{article[lang].markAsUnread}</button>
        </div>
      </div>
      <div className="lang">
        <button onClick={() => changeLanguage("ua")} className="lang-btn">UA</button>
        <button onClick={() => changeLanguage("en")} className="lang-btn">EN</button>
      </div>
    </div> 
    );
  }
export default App;