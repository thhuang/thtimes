import { Link } from 'react-router-dom';
import articles from '../../assets/articles/articles';

const ArticleList = () => {
  return (
    <section className="article-list">
      {articles.map((a) => {
        return <ArticleRow key={a.id} article={a} />;
      })}
    </section>
  );
};

const ArticleRow = (props) => {
  return (
    <Link to={'/thtimes/' + props.article.id}>
      <div className="list__row article-list__row">
        <div className="list__id">{props.article.id}</div>
        <div className="list__date">{props.article.date}</div>
        <div className="list__author">{props.article.author}</div>
        <div className="list__title">
          {(props.article.tag ? '[' + props.article.tag + '] ' : '') +
            props.article.title}
        </div>
      </div>
    </Link>
  );
};

export default ArticleList;
