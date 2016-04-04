import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    resolve: function(ticket) {
      var params = {
        closed: true,
        dateclosed: Firebase.ServerValue.TIMESTAMP,
      };
      this.sendAction('resolve', ticket, params);
    }
  }
});
