import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    updateQuestion: function(question) {
      var params = {
        title: this.get('updatetitle'),
        content: this.get('updatecontent')
      }
      this.sendAction('updateQuestion', question, params);
    }
  }
});