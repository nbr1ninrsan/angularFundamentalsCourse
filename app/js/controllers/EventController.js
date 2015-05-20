'use strict';

/**
 *
 */
eventsApp.controller('EventController',
    function EventController($scope, eventData, $anchorScroll, $routeParams) {
        $scope.snippet = '<span style="color:red">well hello there good sir</span>';
        $scope.boolValue = true;
        $scope.mystyle = {color:'blue'};
        $scope.myclass="blue";
        $scope.buttonDisabled = true;


        $scope.sortorder = 'name';
        $scope.event = eventData.getEvent($routeParams.eventId);
        /* this is what we do if we just want to bind w/out using the promise
        This is what we have to do to use the promise attached to our returned $resource ob
         this obj does have a promise attached to it so that we can use it if we wanted to
         inspect the data before binding to it, we would add eventData.getEvent().$promise.then() */

        //we ended up not using this way
        //eventData.getEvent().$promise.then(
        //    function(event){ $scope.event = event; console.log(event) },
        //    function(response){ console.log(response) }
        //);

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };

        //$scope.scrollToSession = function () {
        //    $anchorScroll();
        //}
    });