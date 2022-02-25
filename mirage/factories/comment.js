import { Factory, trait } from 'miragejs';

export default Factory.extend({
  text: (id) => `comment ${id}`,

  withAuthors: trait({
    afterCreate(comment, server) {
      server.createList('author', 10, { comment });
    },
  }),
});
