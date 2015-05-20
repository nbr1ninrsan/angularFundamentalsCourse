/**
 * Created by Julius Hernandez on 5/16/2015.
 */

var cacheSampleController = function ($scope, myCache) {
    $scope.addToCache = function (key, value) {
        myCache.put(key, value);
    }

    $scope.readFromCache = function (key) {
        return myCache.get(key);
    }

    $scope.getCacheStats = function () {
        return myCache.info();
    }
}

eventsApp.controller("CacheSampleController", cacheSampleController);
