import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  password: DS.attr(),
  usernameandpassword: DS.attr(),
  admin: DS.attr('boolean', { defaultValue: false}),
  questions: DS.hasMany('question', {async: true}),
  answers: DS.hasMany('answer', {async: true}),
});