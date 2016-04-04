import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  model() {
    return this.store.findAll('ticket');
  },
});
