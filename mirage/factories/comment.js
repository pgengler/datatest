import { Factory } from 'miragejs';

export default Factory.extend({
  text: (id) => `comment ${id}`,
});
