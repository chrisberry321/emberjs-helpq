import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save: function() {
      var params = {
        title: this.get('title'),
        content: this.get('content')
      };

      this.set('title',null);
      this.set('content',null);
      this.sendAction('save', params);
    }
  }
});