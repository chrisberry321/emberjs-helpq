import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createTicket: function() {
      debugger;
      var date = new Date();

      var params = {
        location: this.get('location') ? this.get('location'): "",
        summary: this.get('summary') ? this.get('summary'): "",
        description: this.get('description') ? this.get('summary'): "",
        datecreated: date.getTime(),
      }

      if (params.location === "" || params.summary === "" || params.description === "") {
        return alert('CANNOT BE BLANK!');
      }

      this.set('location', null); //clear location input in UI
      this.set('summary', null); //clear summary input in UI
      this.set('description', null); //clear description input in UI
      this.sendAction('createTicket', params); //send save action to index route handler with params defined above

    }
  }
});
