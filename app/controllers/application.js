import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
     _populateCurrentUser: function () {
      return this.store.findRecord('user', this.get('session.data.authenticated.uid')).then(user => this.get('currentUser').set('content', {firstName: user.get('firstName'), lastName: user.get('lastName'), admin: user.get('admin'), userId: user.get('id')}) && user);
    },
  }
});
