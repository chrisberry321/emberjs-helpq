import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service('session'),

  model(params) {
    return this.store.findRecord('ticket', params.ticket_id);
  },

  actions: {
    resolve: function(ticket, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          ticket.set(key,params[key]);
        }
      });
      ticket.save();
      this.transitionTo('index');
    }
  }
});
