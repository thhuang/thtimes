import React from 'react';
import './list.css';

const List = () => {
  return (
    <>
      <section className="list__title">
        <div className="list__moderator">[thhuang]</div>
        <div className="list__description">The TH Times</div>
        <div className="list__id">thtimes</div>
      </section>
      <section className="list__header">
        <div>ID</div>
        <div>Date</div>
        <div>Author</div>
        <div>Title</div>
      </section>
    </>
  );
};

export default List;
