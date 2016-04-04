import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service('session'),

  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {

    save: function(params) {
      var userId = this.get('session.data.userId');
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      this.store.findRecord('user', userId).then(function (user) {
        user.get('answers').addObject(newAnswer);
        question.get('answers').addObject(newAnswer);
        newAnswer.save().then(function() {
          return question.save().then(function() {
            return user.save();
          });
        });
      });
    },
    
    updateQuestion: function(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
    }
  }
});