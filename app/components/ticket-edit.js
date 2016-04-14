import Ember from 'ember';

export default Ember.Component.extend({
  showCommentForm: false,

  actions: {

    addComment: function() {
      var date = new Date();
      var params = {
        content: this.get('comment'),
        ticket: this.get('ticket'),
        date: date.getTime(),
      };
      this.set('comment', null);
      this.set('showCommentForm', false);
      this.sendAction('addComment', params);
    },

    showCommentForm: function() {
      this.set('showCommentForm', true);
    },

    hideCommentForm: function() {
      this.set('showCommentForm', false);
    },

    resolve: function(ticket) {
      var date = new Date();
      var params = {
        dateclosed: date.getTime(),
      };
      this.sendAction('resolve', ticket, params);
    }
  }
});
