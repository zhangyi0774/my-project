app.controller('seagoodsCtrl', function($scope, $http,instance) {	
   $scope.isChange = true
// console.log(instance)
   console.log(instance.name)
$scope.keyWord = instance.name
//console.log($scope.keyWord)

	
	$scope.page = 0
	$scope.goodsLists=[]
	$scope.loadMore = function() {
		
		if($scope.page<=13){
			$scope.page++
			$http.get('/api/mobile/index.php', {
				params: {
					act: 'goods',
					op: 'goods_list',
					keyword: $scope.keyWord,
					page: 10,
					curpage: $scope.page,
					keyword: $scope.keyWord
				}
			}).then(function(res) {
					$scope.total = res.data.page_total
//			console.log($scope.total)
				$scope.goodsLists = $scope.goodsLists.concat(res.data.datas.goods_list)
               console.log($scope.goodsLists)
				$scope.$broadcast('scroll.infiniteScrollComplete');
			});
		}
			

	};
	$scope.$on('stateChangeSuccess', function() {
		$scope.loadMore();
	});
	
})