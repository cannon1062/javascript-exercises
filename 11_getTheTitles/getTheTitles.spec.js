const getTheTitles = require('./getTheTitles')

describe('getTheTitles', () => {
    const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ];

    const books2 = [
      {
        title: 'The Sorcerer\'s Stone',
        author: 'J.K. Rowling'
      },
      {
        title: 'The Chamber of Secrets',
        author: 'J.K. Rowling'
      },
      {
        title: 'The Prisoner of Azkaban',
        author: 'J.K. Rowling'
      }
    ]
  test('gets titles', () => {
    expect(getTheTitles(books)).toEqual(['Book', 'Book2']);  
  }),
  test('gets titles', () => {
    expect(getTheTitles(books2)).toEqual(['The Sorcerer\'s Stone',
      'The Chamber of Secrets', 'The Prisoner of Azkaban']);
  })
});
