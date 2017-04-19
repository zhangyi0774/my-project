app.controller('hotCtrl', function($scope, $http) {
	$http.get('/mll/tuangou/category-0-0-0-0-0-0-1-0-0-0.html')
		.then(function(res) {
			console.log(res.data)
			$scope.hots = res.data
		}).catch(function(err) {
			console.log(err)
		})
})