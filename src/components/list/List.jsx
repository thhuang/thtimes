import React from 'react';
import './list.css';
import Title from './Title';
import Header from './Header';
import ArticleList from './ArticleList';

const List = () => {
  return (
    <div className="list">
      <Title />
      <Header />
      <ArticleList />
    </div>
  );
};

export default List;
