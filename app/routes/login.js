import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';


export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  session: Ember.inject.service('session'),
  actions: {
    login: function(email, password) {
      this.get('session').authenticate('authenticator:firebase', {
        provider: 'password',
        email: email,
        password: password
      }).then(function() {
        this.controllerFor('application').send('_populateCurrentUser');
      }.bind(this));
    }
  }
});
