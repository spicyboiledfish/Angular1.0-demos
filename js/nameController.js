/**
 * Created by RWang on 2016/12/20.
 */
var app=angular.module("myApp",[]);
app.controller("nameController",function ($scope) {
    $scope.names=[
        {name:'Alice',country:'China'},
        {name:'Charles',country:'American'},
        {name:'Michael',country:'Rome'}
    ]

});