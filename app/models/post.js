import Model, { hasMany, attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default class PostModel extends Model {
  @attr
  title;

  @hasMany
  comments;

  @computed('comments.@each.author'/*, 'comments.isFulfilled' */)
  get authors() {
    console.log('post#authors comments fulfilled', this.comments.isFulfilled);
    return this.comments.map((c) => c.get('author'));
  }

  get authorsTracked() {
    console.log('post#authorsTracked comments fulfilled', this.comments.isFulfilled);
    return this.comments.map((c) => c.get('author'));
  }
}
