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
    save: function(params) {
      var userId = this.get('session.data.userId');
      var newTicket = this.store.createRecord('ticket', params);

      // grab the user record which matches the session service user
      // then add newQuestion to the questions property of that user
      // then save newQuestion
      // then save user

      this.store.findRecord('user', userId).then(function (user) {
        user.get('tickets').addObject(newTicket);
        newTicket.save().then(function() {
        return user.save();
      });
      });
    }
  }
});
