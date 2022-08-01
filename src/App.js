import { useReducer } from 'react';
import CTX from './context';
import List from './components/list/List';
import Article from './components/article/Article';

const initialArticle = null;

const articleReducer = (_, action) => {
  switch (action.type) {
    case 'select':
      return action.payload;
    case 'reset':
      return initialArticle;
    default:
      throw new Error();
  }
};

function App() {
  const [article, dispatchArticle] = useReducer(articleReducer, initialArticle);

  return (
    <CTX.Provider
      value={{ article: article, dispatchArticle: dispatchArticle }}
    >
      <List />
      <Article />
    </CTX.Provider>
  );
}

export default App;
