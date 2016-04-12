import Ember from 'ember';
import Firebase from 'firebase';

export default Ember.Route.extend({
    session: Ember.inject.service('session'),

actions: {
    signUp: function(firstName, lastName, email, password){

      var ref = new Firebase("https://mklgallegos-helpq.firebaseio.com/");
      var _this = this;

      ref.createUser({
        email    : email,
        password : password
      }, function(error, userData){
        if (error) {
          alert(error);
        } else {
          var user = _this.store.createRecord('user', {
          id: userData.uid,
          firstName: firstName,
          lastName: lastName
          });
          user.save();
          _this.transitionTo('login');
        }
      });
    }
  }
});
