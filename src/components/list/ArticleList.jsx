import React, { useContext } from 'react';
import { faker } from '@faker-js/faker';
import CTX from '../../context';

let articles = [];

for (let i = 1; i <= 100; i++) {
  articles.push({
    id: i,
    date: faker.date.future().toISOString().slice(0, 10),
    author: faker.name.firstName(),
    title: faker.random.words(4),
    tag: faker.random.alpha(4),
  });
}

const ArticleList = () => {
  return (
    <section className="article-list">
      {articles.reverse().map((a) => {
        return <ArticleRow key={a.id} article={a} />;
      })}
    </section>
  );
};

const ArticleRow = (props) => {
  const ctx = useContext(CTX);

  const onClick = () => {
    ctx.dispatchArticle({ type: 'select', payload: props.article.id });
  };

  return (
    <div className="article-list__row" onClick={() => onClick()}>
      <div>{props.article.id}</div>
      <div>{props.article.date}</div>
      <div>{props.article.author}</div>
      <div>
        {(props.article.tag ? '[' + props.article.tag + '] ' : '') +
          props.article.title}
      </div>
    </div>
  );
};

export default ArticleList;
