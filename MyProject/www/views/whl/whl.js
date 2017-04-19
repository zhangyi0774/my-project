app.controller('whlCtrl',function($scope,$http,$stateParams) {
//	console.log($stateParams)
	$http.get('http://www.aizhiyi.com/mobile/index.php',{
		params:{
			act:'goods',
			op:'goods_detail',
			goods_id:$stateParams.id,
			key:''		
		}
	}).then(function(res) {
//		console.log(res.data.datas)
//		$scope.whlDatas = res.data.datas
	
	}).catch(function(err) {
		console.log('获取失败')
	})
	

	$('.whl-header ul').children().click(function() {
		
		$(this).addClass('on').siblings().removeClass('on')
		
	})
	
	

})

