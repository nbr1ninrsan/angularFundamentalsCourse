'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/newEvent',
            {
                foo: 'Hello World ^_^',
                templateUrl: 'templates/NewEvent.html',
                controller: 'EditEventController'
            });
        $routeProvider.when('/events',
            {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/events/:eventId',
            {
                foo: 'bar',
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventController'
            });
        $routeProvider.otherwise({redirect: '#/events'});
    });


