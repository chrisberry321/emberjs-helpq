import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  fullName: Ember.computed('firstName', 'lastName', function() {
    let firstName = this.get('firstName'),
        lastName  = this.get('lastName');
    return firstName + ' ' + lastName;
  }),
  admin: DS.attr('boolean', { defaultValue: false}),
  tickets: DS.hasMany('ticket', {async: true}),
  ticketsClosed: DS.hasMany('ticket', {async: true, inverse: 'closedBy'})
});
