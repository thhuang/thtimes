const articles = [];
for (let i = 1; true; ++i) {
  try {
    articles.push(require('./' + i.toString() + '.json'));
  } catch (err) {
    break;
  }
}
articles.reverse();

export default articles;
