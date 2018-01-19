
var cultureListapp = angular.module('cultureList',[]);
cultureListapp.controller('cultureListcontroller', function ($scope, $http) {
    $http({
        url:wenhuaju+'/activity/type/list',
        method:'POST'
    }).success(function (response_type) {
        $scope.types = response_type.data;
    });

//分页
    $scope.p_pernum=12;
    $scope.p_current=1;
    $scope.p_all_page=0;
    $scope.pages=[];
    $scope.search_content;
    //首次读取为全部，id为0；
    var _get=function(page,size,id_get,callback){
    	search_content = $(".museum_search").val();
        $(".museum_nomore").css('display','none');
        $(".page").css('display','block');
        //首次加载显示页数及第一页内容
        $http({
            url:wenhuaju+'/activity/list/count',
            method:'POST',
            params:{
                'pageNumber':1,
                'pageSize':12,
                'trainingType':0,  //文化活动
                'typeId':id_get,//表示全部
                'title':search_content
            }
        }).success(function(response_all_page){
            $scope.p_all_page = response_all_page.data;
        });
        $http({
            url:wenhuaju+"/activity/list",
            method:"POST",
            params:{
                'pageSize':size,
                'pageNumber':page,
                'trainingType':0,  //文化活动
                'typeId':id_get,//表示全部
                'title':search_content,
                'orderType':1//按照时间降序
            }
        }).success(function(response_list){
            $scope.lists = response_list.data;
            var length;
            if($scope.lists==""||$scope.lists==null)
            {
                length=0;
            }
            else
            {
                length = $scope.lists.length;
            }
            if(length==0)
            {
                $(".museum_nomore").css('display','block');
                $(".page").css('display','none');
            }
            $scope.p_current=page;
            reloadPno();
            callback();
        });
        //首页
        $scope.p_index = function(){
            $scope.load_page(1);
        };
        //尾页
        $scope.p_last = function(){
            $scope.load_page($scope.p_all_page);
        };
        //加载某一页,添加分页点击的种类id
        $scope.load_page = function(page){
            _get(page,$scope.p_pernum,id_get,function(){ });
        };
        //初始化页码
        var reloadPno = function(){
            $scope.pages=calculateIndexes($scope.p_current,$scope.p_all_page,8);
        };
        //分页算法
        var calculateIndexes = function (current, length, displayLength) {
            var indexes = [];
            var start = Math.round(current - displayLength / 2);
            var end = Math.round(current + displayLength / 2);
            if (start <= 1) {
                start = 1;
                end = start + displayLength - 1;
                if (end > length - 1) {
                    end = length;
                    start=end-displayLength+1;
                }
            }
            if (end > length - 1) {
                end = length;
                start = end - displayLength + 1;
                if (start <= 1) {
                    start = 1;
                }
            }
            for (var i = start; i <= end; i++) {
                indexes.push(i);
            }
            return indexes;
        };

        $scope.listS = function (id) {
        	$(".businesscon-search").find('img').attr("id",id);
        	$(".businesscon-search").find('input').val("");
            $http({
                url:wenhuaju+'/activity/list/count',
                method:'POST',
                params:{
//                  'pageNumber':1,
                    'pageSize':12,
                    'trainingType':0,  //文化活动
                    'typeId':id,
//                  'name':search_content
                }
            }).success(function(response_all_page){
                $scope.p_all_page = response_all_page.data;
            });
            $http({
                url:wenhuaju+"/activity/list",
                method:"POST",
                params:{
                    'pageSize':size,
                    'pageNumber':page,
                    'trainingType':0,  //文化活动
                    'typeId':id,
//                  'name':search_content
                    'orderType':1,//按照时间降序
                }
            }).success(function(response_list) {
                $scope.lists = response_list.data;
                var length;
                if($scope.lists==""||$scope.lists==null)
                {
                    length = 0;
                }
                else
                {
                    length = $scope.lists.length;
                }
                if(length == 0){
                    $(".museum_nomore").css('display','block');
                    $(".page").css('display','none');
                }else{
                    $(".museum_nomore").css('display','none');
                    $(".page").css('display','block');
                }
                $scope.p_current=page;
                reloadPno();
                callback();
                //var a2=true;
                //$("#jifen").click(function(){
                //    if(a2===true){
                //        $("#jifen").attr("class","glyphicon glyphicon-arrow-up");
                //        a2 = false;
                //        $http({
                //            url:wenhuaju+"/goods/list",
                //            method:"POST",
                //            params:{
                //                'pageNumber':page,
                //                'pageSize':size,
                //                'goodsTypeId':1, //5
                //                'orderType':1,
                //                'goodsName':search_content
                //            }
                //        }).success(function (response) {
                //            $scope.goods = response.data;
                //        })
                //    }else{
                //        $("#jifen").attr("class","glyphicon glyphicon-arrow-down");
                //        a2 = true;
                //        $http({
                //            url:wenhuaju+"/goods/list",
                //            method:"POST",
                //            params:{
                //                'pageNumber':page,
                //                'pageSize':size,
                //                'goodsTypeId':1, //5
                //                'orderType':2,
                //                'goodsName':search_content
                //            }
                //        }).success(function (response) {
                //            $scope.goods = response.data;
                //        })
                //    }
                //});
            });
            //上一页
            $scope.p_index = function(){
                $scope.load_page(page-1);
            };
            //下一页
            $scope.p_last = function(){
                $scope.load_page(page+1);
            };
            //加载某一页
            $scope.load_page = function(page){
                _get(page,$scope.p_pernum,id,function(){ });
            };
            //初始化页码
            var reloadPno = function(){
                $scope.pages=calculateIndexes($scope.p_current,$scope.p_all_page,8);
            };
            //分页算法
            var calculateIndexes = function (current, length, displayLength) {
                var indexes = [];
                var start = Math.round(current - displayLength / 2);
                var end = Math.round(current + displayLength / 2);
                if (start <= 1) {
                    start = 1;
                    end = start + displayLength - 1;
                    if (end > length - 1) {
                        end = length;
                        start=end-displayLength+1;
                    }
                }
                if (end > length - 1) {
                    end = length;
                    start = end - displayLength + 1;
                    if (start <= 1) {
                        start = 1;
                    }
                }
                for (var i = start; i <= end; i++) {
                    indexes.push(i);
                }
                return indexes;
            };
        };

        $('.all').click(function () {
            $http({
                url:wenhuaju+"/activity/list",
                method:"POST",
                params:{
                    'pageSize':size,
                    'pageNumber':page,
                    'trainingType':0,  //文化活动
//                  'title':search_content,
                    'orderType':1,//按照时间降序
                }
            }).success(function(response_list) {
                $scope.lists = response_list.data;
                $scope.listS("");
            })
        })
    };
    $scope.fun=function(id_fun){
        search_content = $(".museum_search").val();
        _get($scope.p_current,$scope.p_pernum,id_fun,function(){
        })
    };
    //首次加载，""表示全部；
    $scope.fun("");
    $scope.museum_search = function()
    {
    	var id_img = $(".businesscon-search").find('img').attr("id");
    	if(id_img=='undefined'||id_img==null||id_img=="")
    	{
    		id_img = "";//设置为全部；
    	}
        $scope.p_pernum=12;
        //变量
        $scope.p_current=1;
        $scope.p_all_page=0;
        $scope.pages=[];
        $scope.fun(id_img);
    }

});