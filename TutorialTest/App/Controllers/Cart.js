myStore.controller('CartCtrl',
    ['$scope', 'toast', 'datacontext',
    function ($scope, toast, datacontext) {
        $scope.cartItems = datacontext.cartItems;
        $scope.removeItem = function (item) {
            var index = datacontext.cartItems.indexOf(item);
            if (index > -1)
                datacontext.cartItems.splice(index, 1);
        };
        $scope.$watch('cartItems.length', function () {
            var total = 0;
            for (var i = 0; i < $scope.cartItems.length; i++) {
                total += ($scope.cartItems[i].product.Price * $scope.cartItems[i].quantity);
            }
            $scope.total = total;
        });
    }]);