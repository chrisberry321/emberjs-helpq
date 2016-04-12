import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  actions: {
    login: function(email, password) {
      this.get('session').authenticate('authenticator:firebase', {
        provider: 'password',
        email: email,
        password: password
      }).then(function() {
        debugger;
        this.controllerFor('application').send('_populateCurrentUser');
      }.bind(this));
    }
  }
});
