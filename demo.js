'use strict';
angular.module('cscb.combobox', [
        'cscb.comboboxes'
    ]).controller('demoController', ['$scope', function($scope){
        $scope.listOfStuff = ['1','2','3','4'];
        $scope.textData = "A";
        $scope.onButtonPressed = function(){
            $scope.listOfStuff = _.filter($scope.listOfStuff, function(item){
                if($scope.textData === item){
                    return false;
                }
                return true;
            });
            $scope.listOfStuff.unshift($scope.textData);
            if($scope.listOfStuff.lenght > 10){
                $scope.listOfStuff.pop();
            }
        };
    }])
.constant('_', _);