import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    authenticate(){
      var params = {
        username: this.get('identification'),
        password: this.get('password')
      };
      this.sendAction('authenticate', params);
    }
  }
});