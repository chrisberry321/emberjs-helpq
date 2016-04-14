import Ember from 'ember';

export function avgResolutionTime(params) {

  var allTickets = params[0];

  var allClosedTickets = [];

  var timeTotal = 0;

  for (var i = 0; i < allTickets.get('length'); i++) {
    if (allTickets.objectAtContent(i).get('closed', true)) {
      allClosedTickets.push(allTickets.objectAtContent(i));
    }
  }
    
  for (var i = 0; i < allClosedTickets.get('length'); i++) {
    var dateCreated = allClosedTickets[i].get('datecreated');
    var dateClosed = allClosedTickets[i].get('dateclosed');
    var duration = dateClosed - dateCreated;
    timeTotal += duration;
  }
    return Math.round(moment.duration(timeTotal / allClosedTickets.length).asMinutes());
  }
export default Ember.Helper.helper(avgResolutionTime);