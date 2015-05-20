'use strict';

eventsApp.factory("eventData2", function ($http, $q) {
    return{
        getEvent: function () {
            var deferred = $q.defer();
            $http.get({method: 'GET', url:'/data/event/1'}).
                success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config){
                   deferred.reject(status);
                });
            return deferred.promise;
        },
        event: {
            name: 'Think Camp', date: '5-1-2015', time: "5:05pm",
            location: {address: 'Google Headquarters', city: 'Mountain View', province: 'CA'},
            imageUrl: '/img/WideProfileBG.png',
            sessions: [
                {
                    name: 'Directives Masterclass', num: 101,
                    creatorName: 'Bob Smith', duration: 1,
                    level: 'advanced', abstract: 'lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim'
                    , upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit', num: 201,
                    creatorName: 'John Doe', duration: 4,
                    level: 'beginner', abstract: 'lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim'
                    , upVoteCount: 3
                },
                {
                    name: 'Well behaved controllers', num: 301,
                    creatorName: 'Jane Doe', duration: 2,
                    level: 'intermediate', abstract: 'lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim lorem epsim'
                    , upVoteCount: 5
                }
            ]
        }
    }
})