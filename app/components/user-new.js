import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
    createNewUser: function() {
      var params = {
        username: this.get('identification') ? this.get('identification') : "blankUsername" ,
        password: this.get('password') ? this.get('password') : "blankPassword",
        usernameandpassword: this.get('identification') + this.get('password')
      };
      this.sendAction('createNewUser', params);
    }
  }
});


