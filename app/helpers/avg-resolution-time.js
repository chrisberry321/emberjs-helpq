import Ember from 'ember';

export function avgResolutionTime(params) {

  var allTickets = params[0];

  var timeTotal = 0;

    for (var i = 0; i < allTickets.get('length'); i++) {
      var dateCreated = allTickets.objectAtContent(i).get('datecreated');
      var dateClosed = allTickets.objectAtContent(i).get('dateclosed');
      var duration = dateClosed - dateCreated;
      timeTotal += duration;
    }
    return Math.round(moment.duration(timeTotal / allTickets.get('length')).asMinutes());
  }
export default Ember.Helper.helper(avgResolutionTime);