import './list.css';
import Title from './Title';
import ListHeader from './ListHeader';
import ArticleList from './ArticleList';

const List = () => {
  return (
    <div className="list">
      <Title />
      <ListHeader />
      <ArticleList />
    </div>
  );
};

export default List;
