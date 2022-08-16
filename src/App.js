import { Routes, Route } from 'react-router-dom';
import List from './components/list/List';
import Article from './components/article/Article';

function App() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/:articleId" element={<Article />} />
    </Routes>
  );
}

export default App;
