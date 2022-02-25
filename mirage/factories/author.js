import { Factory } from 'miragejs';

export default Factory.extend({
  name: (id) => `Author ${id}`,
});
