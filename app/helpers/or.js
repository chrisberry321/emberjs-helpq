import Ember from 'ember';

const or = (params) => params[0] || params[1];

export default Ember.Helper.helper(or);
