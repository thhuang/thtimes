import React from 'react';
import { faker } from '@faker-js/faker';
import { useContext } from 'react';
import CTX from '../../context';
import './article.css';
import Header from './Header';
import Content from './Content';

const Article = () => {
  const ctx = useContext(CTX);

  const article = {
    id: ctx.article,
    time: faker.date.future().toISOString(),
    author: faker.name.firstName(),
    title: faker.random.words(10),
    tag: faker.random.alpha(4),
    content: faker.lorem.paragraphs(20, '\n\n'),
  };

  return (
    <div className={ctx.article === null ? 'hidden' : 'article'}>
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
