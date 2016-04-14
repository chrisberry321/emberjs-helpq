import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  model: function() {
    return this.store.findAll('ticket');
    // return Ember.RSVP.hash({
    //   tickets: this.store.findAll('ticket'),
    //   closedTickets: this.store.query('ticket', { orderBy: 'closed', equalTo: true }),
    // });
  },

  // setupController: function(controller, model){
  //   this._super(controller, model);
  //   this.liveUpdate(controller);
  // },
  // liveUpdate: function(controller){
  //   var self = this;
  //   Ember.run.later(function(){
  //     self.refresh();
  //   }, 5000);
  // },

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
    },
  }
});
