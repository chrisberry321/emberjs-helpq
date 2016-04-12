import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createTicket: function() {
      var params = {
        location: this.get('location'),
        summary: this.get('summary'),
        description: this.get('description'),
        datecreated: Firebase.ServerValue.TIMESTAMP
      };
      this.set('location', null); //clear location input in UI
      this.set('summary', null); //clear summary input in UI
      this.set('description', null); //clear description input in UI
      this.sendAction('createTicket', params); //send save action to index route handler with params defined above
    }
  }
});
