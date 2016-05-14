var app = angular.module("github", [
		'angulartics',
		'angulartics.google.analytics',
	]);

app.controller('mainCtrl', ['$scope', '$analytics', function ($scope, $analytics) {
	
	$scope.track = function (event, category, label, value) {
		var additional = {};
		if(category) {
			additional.category = category;
		}
		if(label) {
			additional.label = label;
		}
		if(value) {
			additional.value = value;
		}

		$analytics.eventTrack(event, additional);
	};
}]);