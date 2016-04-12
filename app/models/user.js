import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  admin: DS.attr('boolean', { defaultValue: false}),
  tickets: DS.hasMany('ticket', {async: true}),
});
