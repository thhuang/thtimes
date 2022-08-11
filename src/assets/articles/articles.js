// import { faker } from '@faker-js/faker';
const articles = [];
for (let i = 1; i <= 3; ++i) {
  articles.push(require('./' + i.toString() + '.json'));
}

// for (let i = 3; i <= 100; i++) {
//   articles.push({
//     id: i,
//     date: faker.date.future().toISOString().slice(0, 10),
//     author: faker.name.firstName().toLowerCase(),
//     title: faker.random.words(4),
//     tag: faker.random.alpha(4),
//   });
// }

articles.reverse();

export default articles;
