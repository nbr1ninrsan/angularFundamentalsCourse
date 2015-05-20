/**
 * Created by Julius Hernandez on 5/2/2015.
 */

'use strict';

eventsApp.controller('EditEventController',

    function EditEventController($scope, eventData, $route) {
        console.log($route.current.foo);
        console.log("------");
        console.log($route.current.params.qux);

        $scope.saveEvent = function (event, newEventForm) {
            console.log(newEventForm);
            if(newEventForm.$valid) {
                eventData.save(event)
                    .$promise.then(
                    function (response) { console.log("success", response); },
                    function (response) { console.log("failure", response); }
                );
                window.alert('event '+event.name+' saved()!');
            }
        }

        $scope.cancelEdit = function () {
            window.location = "/EventDetails.html";
            console.log("in cancelEdit");
        }

    }
);