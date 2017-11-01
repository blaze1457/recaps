
	var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);
	app.controller('myctrl', function($scope) {

	$scope.employees = [
		{
	 "name": "Krishna Karteek",
	 "company": "ofs",
	 "place": "chennai",
	 "salary": "20K"
	}, {
	"name": "uday",
	 "company": "tcs",
	 "place": "uk",
	 "salary": "50k"
	}, {
	"name": "harsha",
	 "company": "infosys",
	 "place": "london",
	 "salary": "15k"
	}, {
	"name": "yuraj",
	 "company": "hcl",
	 "place": "us",
	 "salary": "30k"
	}, {
	 "name": "somu",
	 "company": "capgemini",
	 "place": "pune",
	 "salary": "78k"
	 },
	 {
	 "name": "saravanan",
	 "company": "ofs",
	 "place": "delhi",
	 "salary": "62k"
	 },
	 {
	 "name": "poovrasan",
	 "company": "tcs",
	 "place": "mumbai",
	 "salary": "14k"
	 },
	 {
	 "name": "raj",
	 "company": "full creative",
	 "place": "hyderabad",
	 "salary": "23k"
	 }
	 ];
	 $scope.orderByMe= function(x){
	 $scope.myOrderBy=x;
	}
	 
	 });
	 