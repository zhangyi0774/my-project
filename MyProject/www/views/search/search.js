app.controller('searchCtrl', function($scope, $http,instance) {

		$scope.inputs = {
			keys: ''
		}
		$scope.hisWords = []
		$http.get('http://www.aizhiyi.com/mobile/index.php?act=index&op=search_key_list')
			.then(function(res) {
				//			console.log(res.data.datas)
				$scope.hotWords = res.data.datas
				$scope.btnSearch = function() {
					if($scope.hisWords.indexOf($scope.inputs.keys) == -1) {
						$scope.hisWords.push($scope.inputs.keys)
					}

				}
			}).catch(function(err) {
				console.log('获取失败!!')

			})

		$scope.clearWords = function() {
			console.log('清空历史..')
			$scope.hisWords.splice(0)
		}
		$scope.inputs = function() {
			console.log('开始搜索...')
			$http.get('/api/mobile/index.php', {
				params: {
					act: 'goods',
					op: 'auto_complete',
					term: $scope.inputs.keys

				}
			}).then(function(res) {

				$scope.autoWords = res.data.datas
				//			console.log(res)

			}).catch(function(err) {
				console.log('获取失败!!')
			})
		}

		$scope.getVal = function(val) {
			console.log(val)
			instance.name = val

		}
	})

	.factory('instance', function() {
		return {}
	})
	