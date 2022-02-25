import Model, { belongsTo, attr } from '@ember-data/model';

export default class AuthorModel extends Model {
  @attr
  name;

  @belongsTo
  comment;
}
