import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="article__header">
      <section className="article__title">
        <div>{(props.tag ? '[' + props.tag + '] ' : '') + props.title}</div>
        <Link to="/">
          <div className="article__board_id">&lt;thtimes&gt;</div>
        </Link>
      </section>
      <section className="article__info">
        ‣ {props.author} · {props.time.replace('T', ' ').slice(0, 19)}
      </section>
    </div>
  );
};

export default Header;
