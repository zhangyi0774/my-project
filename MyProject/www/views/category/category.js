app.controller('categoryCtrl', function($scope, $http, rmzq, ctgy, mswh, cycd,tcms,zbss,whcy,gxdz) {
    $scope.isColor = true
	$http.get('/api/mobile/index.php?act=goods_class')
		.then(function(res) {
			//  	console.log(res.data.datas.class_list)
			res.data.datas.class_list.splice(6, 1)
			$scope.menulists = res.data.datas.class_list
			//  		console.log($scope.menulists)

		}).catch(function(err) {
			console.log(err)
		})

	$('.left-menus li').click(function() {
		$(this).addClass('onClick').siblings().removeClass('onClick')
		
		var index = $(this).index()
//		console.log(index)
		$('.category-right').children().eq(index).css('display', 'block')
			.siblings().css('display', 'none')
	})

	$http.get('/api/mobile/index.php?act=brand&op=store_recommend_list')
		.then(function(res) {
//			console.log(res.data.datas.store_list)
			$scope.stores = res.data.datas.store_list
		}).catch(function(err) {
			console.log('失败')
		})

	//  console.log(rmzq.rmzqData)
	$scope.rmzqs = rmzq.rmzqData
	//  console.log(ctgy.ctgyData)
	$scope.ctgys = ctgy.ctgyData
	//  console.log(mswh.mswhData)
	$scope.mswhs = mswh.mswhData
//	console.log(cycd.cycdData)
	$scope.cycds = cycd.cycdData
	$scope.tcmss = tcms.tcmsData
//	console.log(zbss.zbssData)
	$scope.zbsss = zbss.zbssData
	$scope.whcys = whcy.whcyData
	$scope.gxdzs = gxdz.gxdzData
})