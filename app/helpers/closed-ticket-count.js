import Ember from 'ember';

export function closedTicketCount(params) {
  var allTickets = params[0];
  var allClosedTickets = [];
  for (var i = 0; i < allTickets.get('length'); i++) {
    if (allTickets.objectAtContent(i).get('closed') === true) {
      allClosedTickets.push(allTickets.objectAtContent(i));
    }
  }
  return allClosedTickets.length
}
export default Ember.Helper.helper(closedTicketCount);