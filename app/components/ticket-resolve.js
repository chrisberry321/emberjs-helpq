import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    resolve: function(ticket) {
      var date = new Date();
      var params = {
        dateclosed: date.getTime(),
      };

      this.sendAction('resolve', ticket, params);
    }
  }
});
