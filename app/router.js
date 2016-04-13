import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users');
  this.route('login');
  this.route('protected');
  this.route('about');
  this.route('signup');
  this.route('user', {path: '/user/:user_id'});
  this.route('ticket', {path: '/ticket/:ticket_id'});
});

export default Router;
