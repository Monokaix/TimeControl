//购买积分商品
var buygoodsapp = angular.module('buygoods',['CommonApp']);
buygoodsapp.controller('buygoodscontroller', function ($scope,$http,URLParam) {
//  var goodsId = window.location.hash.substring(1,3);
    //var specificationId = window.location.hash.substring(3,6);
    var objid=URLParam.getParams();
    $scope.goodsId = objid.id;
    $scope.spe_id = objid.spe_id;
    $scope.num = objid.num;
    $scope.name = objid.name;
    $scope.price = objid.price;
    $scope.sum = 
//  $http({
//      url: wenhuaju + '/order/buyPointGoods' ,
//      method: 'POST',
//      params: {
//          'token':'40b7ff2395dc70c6491d83bcb1cbc57512f0e1dd',
//          'goodsId':53,
//          'specificationId':263,
//          'goodsAmount':1
//      }
//  }).success(function (response) {
//      $scope.items = response.data;
//      $scope.goodsName = response.data;
//      $scope.goodsOriginalPrice = response.data;
//      $scope.goodsCurrentPrice = response.data;
//      $scope.usePoint = response.data;
//      $scope.goodsPoint = response.data;
//      //$scope.orderNumber = response.data.orderNumber;
//      $scope.payTime = response.data;
//      $scope.goodsAmount = response.data;
//      //$("#testhref").attr("href","payment.html#"+response.data.orderNumber);
//  });

//    获取收货地址信息
//    $http({
//        url: wenhuaju + '/address/list/province',
//        method: 'POST'
//    }).success(function (response_province) {
//        $scope.province_address = response_province.data[0].provinceId;
//        $http({
//            url: wenhuaju + '/address/list/city',
//            method: 'POST',
//            params: {
//                'fatherId': $scope.province_address
//            }
//        }).success(function (response_city) {
//            $scope.city_address = response_city.data[0].cityId;
//            $http({
//                url: wenhuaju + '/address/list/area',
//                method: 'POST',
//                params: {
//                    'fatherId': $scope.city_address
//                }
//            }).success(function (response_area) {
//                $scope.area_address = response_area.data[0].area;
//            })
//        })
//    });

//    保存收货地址
//    $http({
//        url: wenhuaju + '/address/save',
//        method: 'POST',
//        params:{
//            'token':'9e2c2425d5cf0998661b125b27a21373d28fa018',
//            'userName':'小明',
//            'phone':18222950000,
//            'province':'河北省',
//            'city':'石家庄市',
//            'area':'裕华区',
//            'address':'中山路100号'
//        }
//    }).success(function (response_save) {
//        $scope.save = response_save.data;
//    })

});


//购买现金商品
var buycashapp = angular.module('buycash',['CommonApp']);
buycashapp.controller('buycashcontroller', function ($scope,$http,URLParam) {
	 var objid=URLParam.getParams();
     $scope.goodsId = objid.id;
     $scope.specificationId = objid.spe_id;
     $scope.num = objid.num;
     $scope.name = objid.name;
     $scope.price = objid.price;
     $scope.sum = parseFloat($scope.num)*parseFloat($scope.price);
//  $http({
//      url: wenhuaju + '/order/buyCashGoods' ,
//      method: 'POST',
//      params: {
//          'token':'40b7ff2395dc70c6491d83bcb1cbc57512f0e1dd',
//          'goodsId':goodsId,
//          'specificationId':specificationId,
//          'goodsAmount':num,
//          'addressId':13
//      }
//  }).success(function (response_Cash) {
//      $scope.items = response_Cash.data;
//      $scope.goodsName = response_Cash.data;
//      $scope.goodsOriginalPrice = response_Cash.data;
//      $scope.goodsCurrentPrice = response_Cash.data;
//      $scope.usePoint = response_Cash.data;
//      $scope.goodsPoint = response_Cash.data;
//      $scope.orderNumber = response_Cash.data;
//      $scope.payTime = response_Cash.data;
//      $scope.goodsAmount = response_Cash.data;
//      //$("#testhref").attr("href","payment.html#"+response_Cash.data.orderNumber);
//  });
});

