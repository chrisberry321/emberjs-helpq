import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  password: DS.attr(),
  usernameandpassword: DS.attr(),
  admin: DS.attr('boolean', { defaultValue: false}),
  tickets: DS.hasMany('ticket', {async: true}),
});
