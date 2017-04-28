'use strict';

angular.module('myApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  	when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope','$http', function ($scope, $http) {

  $http.get('home/guides_list.json').
    success(function(data) {
    $scope.guides = data.guides; 
    angular.forEach(data.guides, function(guide, index) {
    });

    $scope.carts=[]; 
        
        $scope.add_cart = function(guide){ 
          if(guide){
            $scope.carts.push({price: guide.price, title: guide.title, location: guide.location.city, qty: guide.qty});
          } 
        }

        $scope.total = 0.0; 
 
        $scope.setTotals = function(cart){ 
          if(cart){ 
            $scope.total += cart.price; 

          }
        }
 
        $scope.remove_cart = function(cart){ 
          if(cart){ 
            $scope.carts.splice($scope.carts.indexOf(cart), 1); 
            $scope.total -= cart.price; 
          }
        }

  });

}]);
