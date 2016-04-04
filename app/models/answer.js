import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  user: DS.belongsTo('user', {async: true}),
  question: DS.belongsTo('question', {async: true}),
});
