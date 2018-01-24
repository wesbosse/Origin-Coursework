(function() {
    'use strict';
    angular
        .module('vstdapp')
        .controller('VSTDAController', VSTDAController);
    console.log("Controller starting!");

    VSTDAController.$inject = ['VSTDAFactory', '$log'];

    /* @ngInject */
    function VSTDAController(VSTDAFactory, $log) {

        var vm = this;
        vm.text = "";
        vm.priority = 0;
        vm.sort = 'priority';
        vm.toDoArray = [];
        var priorityList = [{ title: "High Priority", value: 1 },
            { title: "Medium Priority", value: 2 },
            { title: "Low Priority", value: 3 }
        ];
        vm.priorityList = priorityList;
        var selectedNode = 0;


        vm.text = 'text';
        vm.reverse = false;

        vm.order = function(text) {
            vm.reverse = (vm.text === text) ? !vm.reverse : false;
            vm.text = text;
        };

        function getToDoList() {
            VSTDAFactory.getToDoList()
                .then(function(response) {
                        vm.toDoArray = response.data;
                    },
                    function(error) {
                        $log.error('Failure getting VSTDA data.', error);
                    });
        };

        function postToDoItem(newNode) {
            VSTDAFactory.postToDoItem(newNode)
                .then(function(response) {
                        $log.log("Good data post!!!");
                    },
                    function(error) {
                        $log.error('Failure putting VSTDA data.', error);
                    });
        };

        function putToDoItem(newNode) {
            VSTDAFactory.putToDoItem(newNode)
                .then(function(response) {
                        $log.log("Good data post!!!");
                    },
                    function(error) {
                        $log.error('Failure putting VSTDA data.', error);
                    });
        };

        function deleteToDoItem(idToDelete) {
            VSTDAFactory.deleteToDoItem(idToDelete)
                .then(function(response) {
                        vm.toDoArray = response.data;
                        $log.log("Good delete call!!!");
                    },
                    function(error) {
                        $log.error('Failure deleting VSTDA data.', error);
                    });
        };

        vm.getClassInfo = function(pr) {
            switch (pr) {
                case 1:
                    return 'danger';
                case 2:
                    return 'warning';
                case 3:
                    return 'info';
            }
        };

        vm.addItem = function() {
            if (vm.text === "" || vm.priority === 0 || vm.priority > 3) {
                alert("Bad Input Data!");
                return; //  Get out if bad data!!
            }
            var newNode = { text: vm.text, priority: parseInt(vm.priority) };
            vm.toDoArray.push(newNode);
            clearInput();
            postToDoItem(newNode);
        };

        vm.selectItemByDblClk = function(td) {
            selectedNode = td;
            vm.text = td.text;
            vm.priority = td.priority;

        };

        vm.deleteItem = function() {
            deleteToDoItem(selectedNode.id);
            var index = vm.toDoArray.indexOf(selectedNode);
            if (index > -1) {
                vm.toDoArray.splice(index, 1);
            }
            clearInput();
        };

        vm.updateItem = function() {

            if (vm.text === "" || vm.priority === 0 || vm.priority > 3) {
                alert("Bad Input Data!");
                return;
            }

            var newNode = { id: selectedNode.id, text: vm.text, priority: vm.priority };
            putToDoItem(newNode);
            selectedNode.text = newNode.text;
            selectedNode.priority = newNode.priority;
            clearInput(); // Clear the input
        };


        function clearInput() {
            vm.text = "";
            vm.priority = 0;
        };


        function activate() {
            getToDoList();
        };


        activate();
    };
})();
