var App=angular.module('portfolio',['ui.bootstrap']);App.run(['$rootScope',function($rootScope,$templateCache){$rootScope.$on('$viewContentLoaded',function(){$templateCache.removeAll();});}]);App.factory('dataFactory',['$http',function($http){var urlBase='http://180.211.99.162/ap/php/taskportal/portfolio/api/';var dataFactory={};dataFactory.getProjects=function(){return $http.get(urlBase+'projects');};return dataFactory;}]);App.controller('portfolioCtrl',['$scope','dataFactory','$interval',function($scope,dataFactory,$interval){$scope.showContent=false;$scope.oneAtATime=false;$scope.getProjects=function(){dataFactory.getProjects()
.success(function(response){for(var i=0;i<response.length;i++){response[i].isOpen=true;};$scope.data=response;$scope.showContent=true;})
.error(function(){alert("Error while loading portfolio!");});};$scope.status={isFirstOpen:true,open:false};$scope.getProjects();$interval(function(){$scope.getProjects();},5000);}]);