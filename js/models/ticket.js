var Ticket = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	status: DS.attr('string'),
	creator: DS.belongsTo('user', {
		async: true,
		inverse: 'ticketsCreated'
	}),
	assignee: DS.belongsTo('user', {
		async: true,
		inverse: 'ticketsAssigned'
	})
});

Ticket.FIXTURES = [
	{
		id: 1,
		title: 'Ticket 1',
		description: 'My first ticket',
		status: 'New',
		creator: 1,
		assignee: 2
	},
	{
		id: 2, 
		title: 'Ticket 2',
		description: 'My second ticket',
		status: 'New',
		creator: 2,
		assignee: 1
	},
	{
		id: 3,
		title: 'Ticket 3',
		description: 'My third ticket',
		status: 'New',
		creator: 1
	}
];

module.exports = Ticket;

