module('User', {
    setup: function() {
        App.reset();
    }
});

test('listing users', function() {
    visit('/')
        .click('a:contains("Users")')
   	.then(function() {
        	ok(find('a:contains("Tom Dale")').length, 'expected to find Tom Dale');  
    });
});

test('viewing user details', function() {
	visit('/')
		.click('a:contains("Users")')
		.click('a:contains("Tom Dale")')
		.then(function() {
			ok(find('img[src^="http://gravatar.com/avatar/9bf3a766e037b9d5a4da0a6f9d0f4f68.jpg"]').length, 'expected to find gravatar image');
		});
});

test('editing user details', function() {
    visit('/users/1')
        .click('button:contains("Edit")')
        .fillIn('input[name="firstName"]', 'Tomhuda')
        .fillIn('input[name="lastName"]', 'Katzdale')
        .fillIn('input[name="email"]', 'tomster@emberjs.com')
        .click('button:contains("Done")')
        .then(function() {
            ok(find('.list-group-item:contains("Tomhuda Katzdale")').length, 'expected title in master list to update');
            ok(find('.panel-title:contains("Tomhuda Katzdale")').length, 'expected title in detail view to update');
            ok(find('img[src^="http://gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a.jpg"]').length, 'expected gravatar to update');
        })
});

test('creating a user', function() {
    visit('/users')
        .click('a:contains("New User")')
        .fillIn('[name="firstName"]', 'Peter')
        .fillIn('[name="lastName"]', 'Wagenet')
        .fillIn('[name="email"]', 'peter@tilde.io')
        .click('button:contains("Save")')
        .then(function() {
            ok(find('.list-group-item:contains("Peter Wagenet")').length, 'expected new user to appear in master view');
            ok(find('.panel-title:contains("Peter Wagenet")').length, 'expected to see user in detail view');
            ok(find('img[src^="http://gravatar.com/avatar/dc9c0271686d50337151a0f862edf3c2.jpg"]').length, 'expected to see gravatar image in detail view');
        });
});

test('cancelling creation of user', function() {
    visit('/users/new')
        .click('button:contains("Cancel")')
        .then(function() {
            equal(find('[name="firstName"]').length, 0, 'expected not to find firstName field');
        });
});