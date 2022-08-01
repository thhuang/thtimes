import React, { useContext } from 'react';
import CTX from '../../context';
import './list.css';
import Title from './Title';
import ListHeader from './ListHeader';
import ArticleList from './ArticleList';

const List = () => {
  const ctx = useContext(CTX);

  return (
    <div className={ctx.article === null ? 'list' : 'hidden'}>
      <Title />
      <ListHeader />
      <ArticleList />
    </div>
  );
};

export default List;
