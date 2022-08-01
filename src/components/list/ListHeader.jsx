import React from 'react';

const ListHeader = () => {
  return (
    <section className="list-header">
      <div className="list__row">
        <div className="list__id">ID</div>
        <div className="list__date">Date</div>
        <div className="list__author">Author</div>
        <div className="list__title">Title</div>
      </div>
    </section>
  );
};

export default ListHeader;
