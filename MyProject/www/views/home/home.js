app.controller('homeCtrl', function($scope, $http, $interval, $ionicScrollDelegate,$stateParams) {
	//	console.log($scope)
	$http.get('http://www.aizhiyi.com/mobile/index.php?act=index&url=http://www.aizhiyi.com/wap/index.html')
		.then(function(res) {
			//		console.log(res.data.datas)
			$scope.homeDatas = res.data.datas
			$scope.time = $scope.homeDatas[3].scroll_list.item[0].time
//			console.log($scope.time)

			function show() {
				var now = new Date()
				var future = new Date($scope.time)
				var leftTime = future.getTime() - now.getTime()
				var leftSecond = Math.floor(leftTime / 1000)
				var hours = Math.floor(leftSecond / (60 * 60))
				hours = hours < 10 ? '0' + hours : hours
				var minute = Math.floor((leftSecond - hours * 60 * 60) / 60)
				minute = minute < 10 ? '0' + minute : minute
				var second = Math.floor(leftSecond - hours * 60 * 60 - minute * 60)
				second = second < 10 ? '0' + second : second
				$('.hours').html(hours)
				$('.minutes').html(minute)
				$('.seconds').html(second)
			}
			setInterval(show, 1000)

			//		console.log($scope.homeDatas)
		}).catch(function(err) {
			console.log('获取失败')
		})
	var a = 9
	$interval(function() {
		a--
		if(a <= 0) {
			a = 9
		}
		$scope.milli = a

	}, 100)

	$scope.isShow = false
	$scope.active = function() {
//		console.log($ionicScrollDelegate.getScrollPosition().top)
		var top = parseInt($ionicScrollDelegate.getScrollPosition().top) 
//		console.log(top)
		if ( top > 100 ) {
			$scope.isShow = true
		} else{
			$scope.isShow = false
		}
	}

	$scope.backTop = function() {
//		console.log('开始返回顶部')
		$ionicScrollDelegate.scrollTop([true]);

	}

})