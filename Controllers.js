'use strict';

/* Controllers */
var randomApp = angular.module("someRandomApp", []);

randomApp.directive("buttonColor", function () {
  return function(scope, element, attrs){
    element.on('click', function () {
     element.css('background-color','blue');
    })
  }
});

randomApp.directive("homPopup", function () {
  return {
    scope: {
      show:'=show',
      onSave:"&popupOnSave"
    },
    templateUrl:"popup.html"
  }
});

randomApp.controller("ProductListController",["$scope",function($scope){
  $scope.products = ["Cup","Chair","Car","Doll","House"];
  $scope.addNewProduct = function () {$scope.products.push($scope.newProduct)};
  $scope.deleteProduct = function (index) {$scope.products.splice(index,1)};
  $scope.editProduct = function (index,product) {$scope.products[index] = product};
}]);