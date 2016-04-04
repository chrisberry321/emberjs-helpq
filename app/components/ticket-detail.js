import Ember from 'ember';

export default Ember.Component.extend({

  duration: Ember.computed('model.datecreated', 'model.dateclosed', function() {
    return this.get('model.dateclosed') - this.get('model.datecreated');
  }),

  actions: {
    resolve: function(ticket, params) {
      this.sendAction('resolve', ticket, params);
    }
  }

});
