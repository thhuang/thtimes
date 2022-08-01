import React from 'react';

const Header = (props) => {
  return (
    <div className="article__header">
      <section className="article__title">
        {(props.tag ? '[' + props.tag + '] ' : '') + props.title}
      </section>
      <section className="article__info">
        ‣ {props.author} · {props.time.replace('T', ' ').slice(0, 19)}
      </section>
    </div>
  );
};

export default Header;
