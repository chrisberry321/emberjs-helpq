import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  date: DS.attr(),
  user: DS.belongsTo('user', {async: true}),
  ticket: DS.belongsTo('ticket', {async: true}),
});
