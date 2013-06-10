myStore.controller('CatalogCtrl',
    ['$scope', 'toast', 'datacontext',
    function ($scope, toast, datacontext) {

        $scope.products = datacontext.getProductList();
        $scope.addProduct = datacontext.addProductToCart;

    }]);