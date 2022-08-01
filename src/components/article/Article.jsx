import React from 'react';
import { useContext } from 'react';
import CTX from '../../context';

const Article = () => {
  const ctx = useContext(CTX);

  return <div>article {ctx.article}</div>;
};

export default Article;
