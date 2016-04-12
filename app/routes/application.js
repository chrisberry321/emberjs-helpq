import Ember from 'ember';
import Firebase from 'firebase';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

  session: Ember.inject.service('session'),

  beforeModel() {
    if (this.get('session.isAuthenticated')) {
     this.controllerFor('application').send('_populateCurrentUser');
    }
  },

  actions: {
    logout: function() {
      this.get('session').invalidate().then(function() {
        this.transitionTo('index');
      }.bind(this));
    },
  }
});
