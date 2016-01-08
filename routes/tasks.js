var route = require('express').Router();
var members = require('./members')
var messages = require('./messages');
var planits = require('./planits');
var proposals = require('./proposals');
var reviews = require('./reviews');

module.exports = route;



route.use('/:id', function(request, response, next) {
  request.routeChain = request.routeChain || {};
  request.routeChain.taskId = request.params.id;
  next();
});

route.use('/:id/members', members);
route.use('/:id/messages', messages);
route.use('/:id/planits', planits);
route.use('/:id/proposals', proposals);
route.use('/:id/reviews', reviews);



// C
route.post('/', function(request, response, next) {

});

// R
route.get('/:id', function(request, response, next) {

});

// U
route.put('/:id', function(request, response, next) {

});

// D
route.delete('/:id', function(request, response, next) {

});

// L
route.get('/', function(request, response, next) {

});
