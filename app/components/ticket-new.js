import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save: function() {
      var params = { //declare the params that will be passed to the index route handler
        location: this.get('location'),
        description: this.get('description'),
        datecreated: Firebase.ServerValue.TIMESTAMP
      }
      this.set('location', null); //clear location input in UI
      this.set('description', null); //clear description input in UI
      this.sendAction('save', params); //send save action to index route handler with params defined above
    }
  }
});
