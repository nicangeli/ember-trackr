var container, store;

module('User', {
    setup: function() {
        container = new Ember.Container();
        container.register('store:main', DS.Store);
        container.register('model:user', App.User);
        container.register('model:ticket', App.Ticket);

        store = container.lookup('store:main');
    }
});

test('displayName', function() {
    var user; 

	Ember.run(function() {
		user = store.createRecord('user', {
			firstName: 'Nick',
			lastName: 'Angeli'
		});
	});
	equal(user.get('displayName'), 'Nick Angeli');
});

