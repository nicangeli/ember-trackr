var Ticket = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	status: DS.attr('string')
});

Ticket.FIXTURES = [
	{
		id: 1,
		title: 'Ticket 1',
		description: 'My first ticket',
		status: 'New'
	}
];

module.exports = Ticket;

