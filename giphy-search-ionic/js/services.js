angular.module('starter.services', [])

.factory('Giphy', function($http) {
    return {
        search: function(term) {
            var searchTerm = term.replace(/ /g, '+');

            var link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + searchTerm;

            return $http.get(link).then(function(result) {
                return result.data.data;
            });
        }
    };
});
