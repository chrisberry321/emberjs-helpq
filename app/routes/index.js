import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  model: function() {
    return Ember.RSVP.hash({
      tickets: this.store.findAll('ticket'),
      closedTickets: this.store.query('ticket', { orderBy: 'closed', equalTo: true })
    });
  },

  actions: {
    createTicket: function(params) {
      var userId = this.get('currentUser.content.userId');
      var newTicket = this.store.createRecord('ticket', params);

      this.store.findRecord('user', userId).then(function (user) {
        user.get('tickets').addObject(newTicket);
        newTicket.save().then(function() {
          return user.save();
        });
      });
    }
  }
});
