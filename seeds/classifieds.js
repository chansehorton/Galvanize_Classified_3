'use strict'
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classifieds').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('classifieds').insert({
          id: 1,
          title: 'NES Classic',
          description: 'I got lucky and found it, and decided to charge 10x what it was worth.',
          price: 600,
          item_image: 'http://www.nintendo.com/images/page/nes-classic/nes-classic-edition-box.png',
          created_at: '2016-06-26T14:26:16.000Z',
          updated_at: '2016-06-26T14:26:16.000Z'
        }),
        knex('classifieds').insert({
          id: 2,
          title: 'Pikachu 9" Plush Stuffed Toy',
          description: 'Polyester fiber construction Officially licensed.',
          price: 10,
          item_image: 'https://images-na.ssl-images-amazon.com/images/I/41VwGotRZsL._SY300_.jpg',
          created_at: '2016-06-26T14:26:16.000Z',
          updated_at: '2016-06-26T14:26:16.000Z'
        }),
        knex('classifieds').insert({
          id: 3,
          title: "Marcellus Wallace's briefcase",
          description: "You can't afford this.",
          price: 100000,
          item_image: 'http://www.snopes.com/wordpress/wp-content/uploads/2016/03/briefcase.gif',
          created_at: '2017-02-01T12:26:16.000Z',
          updated_at: '2017-02-01T12:26:16.000Z'
        }),
        knex('classifieds').insert({
          id: 4,
          title: 'A comic book',
          description: 'Not from a toy store',
          price: 2000,
          item_image: 'http://vignette2.wikia.nocookie.net/villains/images/f/f3/Elijah_Price.jpg/revision/latest?cb=20120511213535',
          created_at: '2016-05-26T14:26:16.000Z',
          updated_at: '2016-05-26T14:26:16.000Z'
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('classifieds_id_seq', (SELECT MAX(id) FROM classifieds))");
    });
};
