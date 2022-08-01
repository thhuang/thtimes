import React from 'react';

const Header = (props) => {
  return (
    <section className="article__header">
      <div className="bg-primary">
        {(props.tag ? '[' + props.tag + '] ' : '') + props.title}
      </div>
      <div className="bg-background-varient text-right">
        {props.author} | {props.time.replace('T', ' ').slice(0, 19)}
      </div>
    </section>
  );
};

export default Header;
