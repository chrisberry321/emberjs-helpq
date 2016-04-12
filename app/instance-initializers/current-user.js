import Ember from 'ember';

export default {
  name: "current-user",

  initialize: function(app) {
    const service = Ember.ObjectProxy.create({ isServiceFactory: true });
    app.register('service:current-user', service, { instantiate: false, singleton: true });
    app.inject('route', 'currentUser', 'service:current-user');
    app.inject('controller', 'currentUser', 'service:current-user');
    app.inject('component', 'currentUser', 'service:current-user');

  }
};
