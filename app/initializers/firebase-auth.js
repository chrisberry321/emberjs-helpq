import FirebaseAuthenticator from '../authenticators/firebase';

export default {
	name: 'firebase-auth',
	before: 'ember-simple-auth',
	initialize: function(application) {
		application.register('authenticator:firebase', FirebaseAuthenticator);
	}
};
