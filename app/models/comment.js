import Model, { belongsTo, hasMany, attr } from '@ember-data/model';

export default class CommentModel extends Model {
  @attr
  text;

  @belongsTo
  post;

  @hasMany
  authors;
}
