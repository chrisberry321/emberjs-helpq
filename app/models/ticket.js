import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr(),
  summary: DS.attr(),
  description: DS.attr(),
  datecreated: DS.attr(),
  dateclosed: DS.attr({ defaultValue: "not closed yet..."}),
  closed: DS.attr('boolean', {defaultValue: false}),
  closedBy: DS.belongsTo('user', {async: true, defaultValue: 'test', inverse: 'ticketsClosed'}),
  user: DS.belongsTo('user', {async: true}),
});
