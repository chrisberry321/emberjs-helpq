import Ember from 'ember';
import Firebase from 'firebase';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'), //access to session service is essential

  actions: {

    authenticate(params) {

    var ref = new Firebase('https://mklgallegos-qna.firebaseio.com/users'); //Firebase Users URL
    var returnedRecord; // declare variable
    var returnedRecordId; //declare variable
    
      ref.orderByChild('usernameandpassword').equalTo(params.username + params.password).on("value", function(snapshot) {
        returnedRecord = snapshot.val(); // set variable equal to snapshot.val(), if record not found value will be null

        if (returnedRecord) {
          returnedRecordId = Object.keys(returnedRecord)[0]; // set variable equal to the firebase record ID
        }
        
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });

      if (returnedRecord) { //this code executes if a record is stored in returnedRecord
        this.get('session').authenticate('authenticator:test', params.username, params.password).catch((reason) => {
          this.set('errorMessage', reason.error || reason);
        });
        this.get('session').set('data.user', params.username); //set user in session service
        this.get('session').set('data.userId', returnedRecordId); //set userId in session service
      } else {
        alert('invalid username or password');
      }
    }
  }
});