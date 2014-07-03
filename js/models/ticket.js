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
	},
	{
		id: 2, 
		title: 'Ticket 2',
		description: 'My second ticket',
		status: 'New'
	},
	{
		id: 3,
		title: 'Ticket 3',
		description: 'My third ticket',
		status: 'New'
	}
];

module.exports = Ticket;

