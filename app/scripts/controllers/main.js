'use strict';

/**
 * @ngdoc function
 * @name angularMy3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMy3App
 */
var ajs = angular.module('angularMy3App');

ajs.controller("myCtrl",function($scope){
	$scope.mtask = [];
	$scope.ctask = [];
	$scope.completetasklist = [];
	var count = 1;
	$scope.tcreated = 0;
	$scope.tdeleted = 0;
	$scope.tcompleted = 0;
	
	$scope.addnewtask = function(event){
		if(event.keyCode == 13){
			if($scope.addnewtasktext == ''){
				return;
			}
			$scope.enterkeypressed();
			$scope.addnewtasktext = '';
			$scope.tcreated++;
		}
	};
	
	$scope.savedata = function(index){
		$scope.savedatafunc(index);
		return true;
	};
	
	$scope.enterkeyedit = function(event,index){
		if(event.keyCode == 13){
			$scope.savedatafunc(index);
			return true;
		}
	};
	
	$scope.btnfunc = function(index,i){
		var cdate = new Date();
		var date = cdate.toDateString();
		var data = $scope.mtask[index];
		switch(i){
			case 'delete': data.stat = "Deleted"; $scope.tdeleted++; break;
			case 'complete': data.stat = "Complete"; $scope.tcompleted++;
		};
		data.compdate = date;
		$scope.completetasklist.push(data);
		$scope.mtask.splice(index,1);
	};
	
	$scope.enterkeypressed = function(){
		var data = [];
		var cdate = new Date();
		data.idno = count++;
		data.desc = $scope.addnewtasktext;
		data.day = cdate.toDateString();
		$scope.mtask.push(data);
	};
	
	$scope.savedatafunc = function(index){
		var cdate = new Date();
		var mdate1 = cdate.toDateString();
		var mdata = $scope.mtask[index];
		mdata.mdate = mdate1;
		$scope.mtask[index] = mdata;
	};
});