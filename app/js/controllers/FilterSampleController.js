/**
 * Created by Julius Hernandez on 5/16/2015.
 */

eventsApp.controller("FilterSampleController", function ($scope, durationsFilter, $cookieStore) {

    $scope.data = {};

    $scope.data.dur_1 = durationsFilter(1);
    $scope.data.dur_2 = durationsFilter(2);
    $scope.data.dur_3 = durationsFilter(3);
    $scope.data.dur_4 = durationsFilter(4);

    //here I am prac using $cookieStore
    $scope.event = {name: "Julius", age: 26};

    $scope.saveEventToCookie = function (event) {
        $cookieStore.put('event', event);
    };

    $scope.getEventFromCookie = function () {
      console.log($cookieStore.get('event'));
    };

    $scope.removeEventCookies = function () {
        $cookieStore.remove('event');
    }
});

