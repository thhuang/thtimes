import React from 'react';
import { faker } from '@faker-js/faker';

let articles = [];

for (let i = 1; i <= 30; i++) {
  articles.push({
    id: i,
    date: faker.date.future().toISOString().slice(0, 10),
    author: faker.name.firstName(),
    title: faker.random.words(4),
  });
}

const ArticleList = () => {
  return (
    <section className="article-list">
      {articles.reverse().map((a) => {
        return (
          <div className="article-list__row">
            <div>{a.id}</div>
            <div>{a.date}</div>
            <div>{a.author}</div>
            <div>{a.title}</div>
          </div>
        );
      })}
    </section>
  );
};

export default ArticleList;
