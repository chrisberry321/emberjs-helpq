import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    login: function(){

      var email = this.get('email');
      var password = this.get('password');

      this.sendAction('login', email, password);
    }
  }
});
