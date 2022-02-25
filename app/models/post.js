import Model, { hasMany, attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default class PostModel extends Model {
  @attr
  title;

  @hasMany
  comments;

  @computed('comments.@each.authors'/*, 'comments.isFulfilled' */)
  get authors() {
    console.log('post#authors: comments.isFulfilled=%s', this.comments.isFulfilled);
    return this.comments.reduce(
      (authors, comment) => [...authors, ...comment.get('authors').toArray()],
      []
    );
  }

  get authorsTracked() {
    console.log('post#authorsTracked comments fulfilled', this.comments.isFulfilled);
    return this.comments.reduce(
      (authors, comment) => [...authors, ...comment.get('authors').toArray()],
      []
    );
  }
}
