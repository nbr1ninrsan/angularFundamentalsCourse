/**
 * Created by Julius Hernandez on 5/4/2015.
 */

'use strict';

eventsApp.factory('EventData3', function ($http, $q) {
    return {
        eventInfo: function () {
            var deferred = $q.defer();
            $http({method: 'GET', url: '/data/event/1'})
                .success(function (data, status, config, headers) {
                    deferred.resolve(data); 
                })
                .error(function (data, status, config, headers) {
                    deferred.reject(status);
                });
        },
        event: "some pretend data in an array"
    }
})