app.controller('evaluateCtrl',function($scope,$http,$stateParams) {
	$http.get('http://www.aizhiyi.com/mobile/index.php',{
		params:{
			act:'goods',
			op:'goods_evaluate',
			goods_id:$stateParams.id,
			curpage:1,
			page:10
			
		}
	}).then(function(res) {
		console.log(res.data.datas)
		$scope.evaluates = res.data.datas
	
	}).catch(function(err) {
		console.log('获取失败')
	})
})