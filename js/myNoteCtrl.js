/**
 * Created by RWang on 2017/2/9.
 */
app.controller("myCtrl",function ($scope) {
    $scope.message='';
    $scope.save=function () {
        alert('Your note has been saved!')
    };
    $scope.clear=function () {
        $scope.message='';
    };
    $scope.left=function () {
        return 100-$scope.message.length;
    };
});