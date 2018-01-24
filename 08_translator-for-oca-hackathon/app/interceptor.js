(function() {

        'use strict';

        angular.module('app').factory('mashapeHttpInterceptor', function() {
                return {
                			request:function(request){

                			request.headers["X-Mashape-Key"] = 'Kn18iQITxCmshiqvnWo2ax8Oye3Hp16pKpGjsnIEzDLw9R8k9G';

                			return request;
                }
            };
        });
})();


