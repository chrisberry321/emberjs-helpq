import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  model: function(params) {
    return this.store.findRecord('user', params.user_id);
  },

  actions: {

  }
});
