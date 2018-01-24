(function() {
    'use strict';

    angular
        .module('app')
        .factory('translateFactory', translateFactory);

    translateFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function translateFactory($http, $q) {
        var service = {
            translate: translate
        };
        return service;

        // https://www.googleapis.com/language/translate/v2?q=hello&target=es&key=AIzaSyBWe38akQmPz4KrIj1_rhD-Ng4XI0un7HA

        ////////////////
        var storage = {};

        function translate(sentence, language) {
            var first = 'https://www.googleapis.com/language/translate/v2?q=';
            var last = '&target=' + language + '&key=AIzaSyBWe38akQmPz4KrIj1_rhD-Ng4XI0un7HA';
            var url = first + sentence + last;

            var defer = $q.defer();

            $http({
                method: 'GET',
                url: url
            }).then(function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                    } else {
                        defer.reject(response);
                        //error if found but empty
                    }
                },
                // failure
                function(error) {
                    //error if the file isn't found
                    defer.reject(error);
                });

            return defer.promise;
        }




    }
})();
