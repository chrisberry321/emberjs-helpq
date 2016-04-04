import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  model: function() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      users: this.store.findAll('user'),
    });
  },

  actions: {
    save: function(params) {
      var userId = this.get('session.data.userId');
      var newQuestion = this.store.createRecord('question', params);
      
      // grab the user record which matches the session service user
      // then add newQuestion to the questions property of that user
      // then save newQuestion
      // then save user

      this.store.findRecord('user', userId).then(function (user) {
        user.get('questions').addObject(newQuestion);
        newQuestion.save().then(function() {
        return user.save();
      });
      });
    }
  } 
});