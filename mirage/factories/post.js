import { Factory, trait } from 'miragejs';

export default Factory.extend({
  title: (id) => `post title ${id}`,

  withComments: trait({
    afterCreate(post, server) {
      server.createList('comment', 4, { post });
    },
  }),

  withCommentsAndAuthors: trait({
    afterCreate(post, server) {
      server.createList('comment', 4, 'withAuthors', { post });
    },
  }),
});
