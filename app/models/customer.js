import DS from 'ember-data';

export default DS.Model.extend({
  id: attr(),
  name: attr('string'),
  phone: attr(),
  cell: attr(),
  fax: attr(),
  email: attr(),
  address: attr(),
  contactName: attr('string'),
  created: attr('date')
});
