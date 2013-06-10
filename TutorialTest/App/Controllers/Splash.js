myStore.controller('SplashCtrl',
    ['$scope', 'toast',
    function ($scope, toast) {

        //logger.log("creating SplashCtrl");

        $scope.displayName = "Dan Kellett";
        $scope.toastMessage = "This is a toast";
        $scope.displayToastMessage = displayToast;

        //#region private functions 
        function displayToast(message) {
            console.log(message + ' - by ' + $scope.displayName);
            toast.toast(message + ' - by ' + $scope.displayName);
        }

        //#endregion
    }]);