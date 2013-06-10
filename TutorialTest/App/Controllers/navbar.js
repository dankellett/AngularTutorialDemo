myStore.controller('navbarCtrl',
    ['$scope', 'toast', 'datacontext',
    function ($scope, toast, datacontext) {
                  
        $scope.$watch(function () { return datacontext.cartItems.length; }, function (cartItemsCount) {
            $scope.itemsInCart = cartItemsCount;
        });

    }]);