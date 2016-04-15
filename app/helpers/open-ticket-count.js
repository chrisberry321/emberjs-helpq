import Ember from 'ember';

export function openTicketCount(params) {
  var allTickets = params[0];
  var allOpenTickets = [];
  for (var i = 0; i < allTickets.get('length'); i++) {
    if (allTickets.objectAtContent(i).get('closed') === false) {
      allOpenTickets.push(allTickets.objectAtContent(i));
    }
  }
  return allOpenTickets.length;
}
export default Ember.Helper.helper(openTicketCount);