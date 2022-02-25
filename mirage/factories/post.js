import { Factory } from 'miragejs';

export default Factory.extend({
  title: (id) => `post title ${id}`
});
