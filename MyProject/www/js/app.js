var app = angular.module('myApp', ['ionic'])
app.run(function($rootScope) {
	$rootScope.$on('child1', function(ev, val) {
		console.log(val)
		$rootScope.val = val
	})
})

app.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/tabs/home')
		$stateProvider.state('tabs', {
			url: '/tabs',
			templateUrl: 'views/tabs/tabs.html',
			abstract: true,
			controller: 'tabsCtrl'
		}).state('tabs.home', {
			url: '/home',
			views: {
				'tabs-home': {
					templateUrl: 'views/home/home.html',
					controller: 'homeCtrl'
				}
			}
		}).state('tabs.hot', {
			url: '/hot',
			views: {
				'tabs-hot': {
					templateUrl: 'views/hot/hot.html',
					controller:'hotCtrl'
				}
			}
		}).state('tabs.category', {
			url: '/category',
			views: {
				'tabs-category': {
					templateUrl: 'views/category/category.html',
					controller: 'categoryCtrl'
				}
				
			}
		})
		.state('tabs.cart', {
			url: '/cart',
			views: {
				'tabs-cart': {
					templateUrl: 'views/cart/cart.html',
					controller: 'cartCtrl'
				}
			}
		}).state('tabs.mine', {
			url: '/mine',
			views: {
				'tabs-mine': {
					templateUrl: 'views/mine/mine.html',

				}
			}
		}).state('whl', {
			url: '/whl/:id',
			views: {
				'': {
					templateUrl: 'views/whl/whl.html',
					controller: 'whlCtrl'
				},
				'whl-goods@whl': {
					templateUrl: 'views/goods/goods.html',
					controller: 'goodsCtrl'
				}

			}

		}).state('whl.goods', {
			url: '/goods',
			views: {
				'whl-goods': {
					templateUrl: 'views/goods/goods.html',
					controller: 'goodsCtrl'
				}
			}
		}).state('whl.detail', {
			url: '/detail',
			views: {
				'whl-goods': {
					templateUrl: 'views/detail/detail.html',
					controller: 'detailCtrl'
				}
			}
		}).state('whl.evaluate', {
			url: '/evaluate',
			views: {
				'whl-goods': {
					templateUrl: 'views/evaluate/evaluate.html',
					controller: 'evaluateCtrl'
				}

			}
		}).state('search', {
			url: '/search',
			templateUrl: 'views/search/search.html',
			controller: 'searchCtrl'

		}).state('searchgoods', {
			url: '/searchgoods',
			templateUrl: 'views/searchgoods/searchgoods.html',
			controller: 'seagoodsCtrl'

		})

	})

	.factory('rmzq', function() {
		var rmzqDatas = {
			rmzqData: [
				{
					imgUrl: '../../img/405.png',
					name: '今日上新',
				},
				{
					imgUrl: '../../img/404.png',
					name: '个性定制',
				},
				{
					imgUrl: '../../img/403.png',
					name: '企业专区',
				},
				{
					imgUrl: '../../img/402.png',
					name: '狂销特卖',
				},

			]
		}
		return rmzqDatas
	})
	.factory('ctgy', function() {
		var ctgyDatas = {
			ctgyData: [
				{
					imgUrl: '../../img/1744.jpg',
					child:[
					{gc_name:'荣昌陶'},
					{gc_name:'宜兴紫砂'}
					]
				},
				{
					imgUrl: '../../img/1745.jpg',
					child:[
					{gc_name:'浮雕'}
					
					]
				},
				{
					imgUrl: '../../img/1746.jpg',
					child:[
					{gc_name:'刺绣'},
					{gc_name:'绸缎'},
					{gc_name:'棉质品'}
					]
				}

			]
		}
		return ctgyDatas
	})
	.factory('mswh', function() {
		var mswhDatas = {
			mswhData: [
				{
					imgUrl: '../../img/1754.jpg',
					child:[
					{gc_name:'传统乐器'}
					]
				},
				{
					imgUrl: '../../img/1755.jpg',
					child:[
					{gc_name:'摆件'}
					
					]
				},
				{
					imgUrl: '../../img/1756.jpg',
					child:[
					{gc_name:'书画'},
					{gc_name:'文房四宝'}
					]
				}

			]
		}
		return mswhDatas
	})
	.factory('cycd', function() {
		var cycdDatas = {
			cycdData: [
				{
					imgUrl: '../../img/1761.jpg',
					child:[
					{gc_name:'红茶'},
					{gc_name:'绿茶'},
					{gc_name:'乌龙茶'},
					{gc_name:'黑茶'},
					{gc_name:'普洱茶'},
					{gc_name:'白茶'},
					{gc_name:'花茶'}
					]
				},
				{
					imgUrl: '../../img/1491.jpg',
					child:[
					{gc_name:'茶壶'},
					{gc_name:'茶杯'},
					{gc_name:'茶叶罐'}
					
					]
				},
				{
					imgUrl: '../../img/1762.jpg',
					child:[
					{gc_name:'茶桌'}
					
					]
				}

			]
		}
		return cycdDatas
	})
	
	.factory('tcms', function() {
		var tcmsDatas = {
			tcmsData: [
				{
					imgUrl: '../../img/1775.jpg',
					child:[
					{gc_name:'米面'},
					{gc_name:'杂粮'},
					{gc_name:'南北干货'},
					{gc_name:'食用油'},
					{gc_name:'普洱茶'},
					{gc_name:'调味品'}
					]
				},
				{
					imgUrl: '../../img/1776.jpg',
					child:[
					{gc_name:'坚果炒货'},
					{gc_name:'肉脯肉干'},
					{gc_name:'糕点'},
					{gc_name:'零食'},
					{gc_name:'蜜饯果干'}
					
					]
				},
				{
					imgUrl: '../../img/1777.jpg',
					child:[
					{gc_name:'枸杞'},
					{gc_name:'蜂蜜'}
					
					]
				},
				{
					imgUrl: '../../img/1778.jpg',
					child:[
					{gc_name:'四川特产'},
					{gc_name:'长白山特产'},
					{gc_name:'江西特产'}
					
					]
				},
				{
					imgUrl: '../../img/1779.jpg',
					child:[
					{gc_name:'养生酒'},
					{gc_name:'白酒'},
					{gc_name:'果酒'}
					
					]
				},

			]
		}
		return tcmsDatas
	})
	
	.factory('zbss', function() {
		var zbssDatas = {
			zbssData: [
				{
					imgUrl: '../../img/1798.jpg',
					child:[
					{gc_name:'项链'},
					{gc_name:'戒指'},
					{gc_name:'耳饰'},
					{gc_name:'手镯'},
					{gc_name:'手链'},
					{gc_name:'胸针'},
					{gc_name:'花茶'}
					]
				},
				{
					imgUrl: '../../img/1799.jpg',
					child:[
					{gc_name:'合金'},
					{gc_name:'银饰'},
					{gc_name:'玉石'},
					{gc_name:'珍珠'}
					
					]
				},
				{
					imgUrl: '../../img/1800.jpg',
					child:[
					{gc_name:'珐琅工艺'},
					{gc_name:'镶嵌工艺'},
					{gc_name:'浮雕工艺'}
					
					]
				}

			]
		}
		return zbssDatas
	})
	
	.factory('whcy', function() {
		var whcyDatas = {
			whcyData: [
				{
					imgUrl: '../../img/1818.jpg',
					child:[
					{gc_name:'家具'},
					{gc_name:'照明'},
					{gc_name:'家纺'}					
					]
				},
				{
					imgUrl: '../../img/1819.jpg',
					child:[
					{gc_name:'环保电子'}									
					]
				},
				{
					imgUrl: '../../img/1820.jpg',
					child:[
					{gc_name:'车饰'}				
					]
				}

			]
		}
		return whcyDatas
	})
	
	.factory('gxdz', function() {
		var gxdzDatas = {
			gxdzData: [
				{
					imgUrl: '../../img/1830.jpg',
					child:[
					{gc_name:'陶器'}			
					]
				},
				{
					imgUrl: '../../img/1831.jpg',
					child:[
					{gc_name:'紫砂壶'},
					{gc_name:'荣昌陶壶'}
					]
				}
			]
		}
		return gxdzDatas
	})
