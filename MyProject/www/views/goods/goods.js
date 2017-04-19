app.controller('goodsCtrl',function($scope,$http,$stateParams) {
		$http.get('http://www.aizhiyi.com/mobile/index.php',{
		params:{
			act:'goods',
			op:'goods_detail',
			goods_id:$stateParams.id,
			key:''		
		}
	}).then(function(res) {
		console.log(res.data.datas)
		$scope.whlDatas = res.data.datas
	
	}).catch(function(err) {
		console.log('获取失败')
	})
})