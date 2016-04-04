import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    save: function() {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        question: this.get('question')
      };
      this.sendAction('save', params);
    }
  }
});