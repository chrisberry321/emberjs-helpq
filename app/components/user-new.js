import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
    signUp: function() {

      var firstName = this.get('firstName');
      var lastName = this.get('lastName');
      var email = this.get('email');
      var password = this.get('password');

      this.sendAction('signUp', firstName, lastName, email, password);
    }
  }
});
