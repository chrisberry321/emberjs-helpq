import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service('session'),

  model(params) {
    return this.store.findRecord('ticket', params.ticket_id);
  },

  actions: {
    resolve: function(ticket, params) {

      var ticketId = ticket.get('id');

      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          ticket.set(key,params[key]);
        }
      });

      this.store.findRecord('ticket', ticketId).then(function (ticket) {
        ticket.toggleProperty('closed');
        ticket.save();
      });

      this.store.findRecord('user', this.get('currentUser.content.userId')).then(function (user) {
        user.get('ticketsClosed').addObject(ticket);
        ticket.save().then(function() {
          return user.save();
        });
      });
    },

    addComment: function(params) {
      var userId = this.get('currentUser.content.userId');
      var newComment = this.store.createRecord('comment', params);
      var ticket = params.ticket;

      this.store.findRecord('user', userId).then(function (user) {
        user.get('comments').addObject(newComment);
        ticket.get('comments').addObject(newComment);
        newComment.save().then(function() {
          return ticket.save().then(function() {
            return user.save();
          });
        });
      });
    },
  }
});
