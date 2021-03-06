module('Tickets', {
	setup: function() {
		App.reset();
	}
});

test('listing tickets', function() {
	visit('/')
		.click('a:contains("Tickets")')
		.then(function( ) {
			ok(find('a:contains("Ticket 1")').length, 'expected to find Ticket 1');
		});
});

test('viewing ticket details', function() {
	visit('/')
		.click('a:contains("Tickets")')
		.click('a:contains("Ticket 1")')
		.then(function() {
			ok(find('*:contains("My first ticket")').length, 'expected to find ticket description');
		});
});

test('editing ticket details', function() {
	visit('/tickets/1')
		.click('button:contains("Edit")')
		.fillIn('input[name="title"]', 'Foo Bar')
		.fillIn('select[name="status"]', 'Open')
		.fillIn('textarea[name="description"]', 'New description')
		.click('button:contains("Done")')
		.then(function() {
			ok(find('.list-group-item:contains("Foo Bar")').length, 'expected title in master list to update');
			ok(find('.panel-title:contains("Foo Bar")').length, 'expected title in detail view to update');

			ok(find('.list-group-item .badge:contains("Open")').length, 'expected status in master list to update');
			ok(find('.panel-title .badge:contains("Open")').length, 'expected status in detail view to update');

			ok(find('.panel-body:contains("New description")').length, 'expected description to update');
		});
});

test('creating a ticket', function() {
	visit('/tickets')
		.click('a:contains("New Ticket")')
		.fillIn('[name="title"]', 'My New Ticket')
		.fillIn('[name="status"]', 'Open')
		.fillIn('[name="description"]', 'Foo bar baz.')
		.click('button:contains("Save")')
		.then(function() {
			ok(find('.list-group-item:contains("My New Ticket")').length, 'expected new ticket to appear in master list');
			ok(find('.panel-title:contains("My New Ticket")').length, 'expected to see new ticket in details view');
			ok(find('.panel-title:contains("Open")').length, 'expected ticket status to be "Open"');
		});
});

test('cancelling a ticket', function() {
	visit('/tickets/new')
		.click('button:contains("Cancel")')
		.then(function() {
			equal(find('[name="title"]').length, 0, 'expect not to find the title field');
		});
});