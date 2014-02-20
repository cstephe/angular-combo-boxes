//TODO break this up into file per each control group

'use strict';
(function (window, angular, undefined) {
angular.module('cscb.comboboxes', [])
.directive('cscbTextSelectCombo', ['$document' , '_',
    function ($document, _) {
        var directive = {
            restrict: 'E',
            scope: {
                comboData: '=',
                comboList: '='
            }
        };
        var linkFn = function (scope, el) {
            var onClickAnyWhereElse = function (event) {
                var sourceElement = event.srcElement || event.originalEvent.srcElement;
                if (sourceElement.className !== "cscb-select-image") {
                    scope.popupVisible = false;
                    scope.$apply(scope.popupVisible);
                    $document.unbind('click', onClickAnyWhereElse);
                }
            };
            scope.isRequired = el.attr("required") === "required";
            scope.type = el.attr("type") || "text";
            scope.popUp = function () {
                scope.popupVisible = !scope.popupVisible;
                // Close all instances when user clicks elsewhere
                $document.bind('click', onClickAnyWhereElse);
            };
            scope.selectItem = function (item) {
                scope.comboData = item;
                scope.popupVisible = false;
            };
            scope.popupVisible = false;
        };
        directive.link = linkFn;
        directive.template = '<div class="cscb-select-combo-wrapper">' +
            '<div class="cscb-select-control-container">' +
            '<div class="cscb-select-control-container-row">' +
            '<div><input ng-required="isRequired" type="{{type}}" class="form-control" ng-model="comboData"></div>' +
            '<div class="cscb-select-image" ng-click="popUp()"></div> </div> </div>' +
            '<div class="cscb-select-popup" ng-show="popupVisible"> <div class="cscb-select-list">' +
            '<ul> <li ng-repeat="item in comboList" ng-click="selectItem(item)"> {{item}} </li> </ul>' +
            '</div>' +
            '</div>' +
            '</div>'
        return directive;
    }
])
})(window, window.angular);