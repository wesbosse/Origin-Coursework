(function() {
    'use strict';

    angular
        .module('app')
        .controller('transCtrl', transCtrl);

    transCtrl.$inject = ['translateFactory', '$timeout'];

    /* @ngInject */

    function transCtrl(translateFactory, $timeout) {
        var vm = this;
        vm.title = 'transCtrl';
        vm.tranny = '';
        vm.speechIn = '';
        vm.messageList = [];
        vm.translationList = [];
        vm.lang = '';
        vm.voice = '';

        vm.translator = function() {
            vm.checkVoice;

            translateFactory.translate(vm.speechIn, vm.lang).then(
                function(response) {
                    console.log(vm.voice);
                    vm.tranny = response.data.data.translations[0];
                    vm.translationList.push(vm.tranny.translatedText);
                    vm.speak(vm.tranny.translatedText);
                    vm.speechIn = '';
                },
                function(error) {
                    $log.error(error);
                });
            vm.messageList.push(vm.speechIn);

            console.log(vm.translationList);
        };

        vm.checkVoice = function() {
            switch (vm.lang) {
                case 'en':
                    vm.voice = "UK English Female";
                    break;
                case 'es':
                    vm.voice = "Spanish Female";
                    break;
                case 'fr':
                    vm.voice = "French Female";
                    break;
                case 'zh-CN':
                    vm.voice = "Chinese Female";
                    break;
                case 'de':
                    vm.voice = "German Female";
                    break;
            }
        }


        $timeout(function() {

            vm.speak = function(textToSpeak) {
                //to have speak there will be a function here that has a message parameter. T
                responsiveVoice.speak(textToSpeak);
            };

        }, 1000);

    }

})();
