import React, { useState } from "react";
import Article from "./components/Article";


 function App () {

  const article = {
      description: 'Article description:',
      preview: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
      content: 'Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.',
  }
  const [isShow, setIsShow]  = useState(false);
  const [isRead, setIsRead]  = useState('');
  const [lang, setLang] = useState('en');

  const toggleArticle = () => {
    setIsShow(!isShow);
  }

  const  markAsRead = () => {
   setIsRead('read');
  }

  const markAsUnread = () => {
    setIsRead('');
  }

  return (
    <div className={"wrapper"}>
      <h1 className="title">NVIDIA news</h1>
      <div className="article">
          <Article lang={lang} read={isRead} show={isShow} text={article}>
          <div className="article__title">
            <h2>NVIDIA Accelerated AI on Azure</h2>
          </div>
          </Article>
        <div className="article__actions">
          <button onClick={markAsRead} className="article__btn">Mark as read</button>
          <button onClick={toggleArticle} className="article__btn" >{isShow ? "Close": "Read"}</button>
          <button onClick={markAsUnread} className="article__btn">Mark as unread</button>
        </div>
      </div>
      <div className="lang">
        <button className="lang-btn">UA</button>
        <button className="lang-btn">EN</button>
      </div>
    </div> 
    );
  }
export default App;