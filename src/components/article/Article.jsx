import React from 'react';
import { useContext } from 'react';
import CTX from '../../context';
import './article.css';
import Header from './Header';
import Content from './Content';

const Article = () => {
  const ctx = useContext(CTX);

  if (ctx.article === null) return <></>;

  const articleId = ctx.article.toString();
  const article = require('../../assets/articles/' + articleId + '.json');

  return (
    <div className="article">
      <Header
        title={article.title}
        author={article.author}
        time={article.time}
        tag={article.tag}
      />
      <hr className="article__divider" />
      <Content content={article.content} />
    </div>
  );
};

export default Article;
