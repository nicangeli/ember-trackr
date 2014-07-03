// This file is auto-generated by `ember build`.
// You should not modify it.

var App = window.App = require('./config/app');
require('./templates');


App.ApplicationController = require('./controllers/application_controller');
App.TicketController = require('./controllers/ticket_controller');
App.TicketsNewController = require('./controllers/tickets/new_controller');
App.Ticket = require('./models/ticket');
App.TicketRoute = require('./routes/ticket_route');
App.TicketsRoute = require('./routes/tickets_route');
App.TicketsNewRoute = require('./routes/tickets/new_route');
App.ApplicationView = require('./views/application_view');
App.TextField = require('./views/text_field');

require('./config/routes');

module.exports = App;

