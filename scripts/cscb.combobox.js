//TODO break this up into file per each control group

'use strict';
(function(window, angular, undefined) {
    angular.module('cscb.comboboxes', [])
.directive('cscbTextSelectCombo', ['_',
    function(_) {
        var directive = {
            restrict : 'E',
            scope : {
                comboData : '=',
                comboList : '='
            }
        };
        var linkFn = function(scope){
            scope.popUp = function(){
                scope.popupVisible = !scope.popupVisible;
            };
            scope.selectItem = function(item){
                scope.comboData = item;
            };
            scope.popupVisible=false;
        };
        directive.link = linkFn;
        directive.templateUrl = "templates/text-select-combo.html";
        return directive;
}])
})(window, window.angular);