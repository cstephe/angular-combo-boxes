//TODO break this up into file per each control group

'use strict';
(function(window, angular, undefined) {
    angular.module('cscb.comboboxes', [])
.directive('cscbTextSelectCombo', ['$document' ,'_', 'CSCBService',
    function($document, _, CSCBService) {
        var settings = CSCBService.getSettings();
        var directive = {
            restrict : 'E',
            scope : {
                comboData : '=',
                comboList : '='
            }
        };
        var linkFn = function(scope, el){
            var onClickAnyWhereElse = function(event){
                var originalTargetScope = angular.element(event.originalEvent.srcElement).scope() || {};
                if(originalTargetScope.$id !== scope.$id)
                {
                    scope.popupVisible=false;
                    scope.$apply(scope.popupVisible);
                    $document.unbind('click', onClickAnyWhereElse);
                }
            };
            scope.isRequired = el.attr("required") === "required";
            scope.popUp = function(){
                scope.popupVisible = !scope.popupVisible;
                // Close all instances when user clicks elsewhere
                $document.bind('click', onClickAnyWhereElse);
            };
            scope.selectItem = function(item){
                scope.comboData = item;
                scope.popupVisible = false;
            };
            scope.popupVisible=false;
        };
        directive.link = linkFn;
        directive.templateUrl = settings.templatePath + "text-select-combo.html";
        return directive;
}])// Service to allow host pages to change settings for all instances (in their module.run function)
        .factory('CSCBService', function () {

            var defaultSettings = {
                "templatePath": "templates"
            };

            return {
                getSettings: function () {
                    // Add trailing "/" to template path if not present
                    var len = defaultSettings.templatePath.length;
                    if (len > 0 && defaultSettings.templatePath.substr(len - 1, 1) !== "/") {
                        defaultSettings.templatePath += "/";
                    }
                    return angular.copy(defaultSettings);
                },
                updateSetting: function (settingName, value) {
                    if (defaultSettings.hasOwnProperty(settingName)) {
                        defaultSettings[settingName] = value;
                    }
                }
            };
        });
})(window, window.angular);