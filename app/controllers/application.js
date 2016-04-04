import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
      this.get('session').set('data.user', undefined);
      this.get('session').set('data.userId', undefined);
    }
  }
});