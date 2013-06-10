window.myStore = angular.module('myStore', []);

// Configure routes
myStore.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', { templateUrl: 'app/views/splash.html', controller: 'SplashCtrl' }).
        when('/Catalog', { templateUrl: 'app/views/Catalog.html', controller: 'CatalogCtrl' }).
        when('/Cart', { templateUrl: 'app/views/Cart.html', controller: 'CartCtrl' }).
        otherwise({ redirectTo: '/' });
}]);

myStore.directive('ngNavbar', function ($location, toast) {
    return {
        link: function (scope, elm, attrs) {
            //attach to route change event
            scope.$on('$routeChangeSuccess', function (event, current, previous) {
                //get anchor elements
                var links = elm.find('a');
                //store the current route
                var currentRoute = $location.path();
                //remove 'active' css class from all items
                angular.element(links[0].parentNode.parentNode).find('LI').removeClass('active');
                for (var i = 0; i < links.length; i++) {
                    //check to see if the current route matches the anchor
                    if (typeof links[i].href !== 'undefined' && links[i].href.split('#')[1] == currentRoute) {
                        var parent = links[i].parentNode;
                        //add the active css class to this matched element
                        if (parent.tagName == 'LI')
                            parent.className = 'active'
                        toast.toast('Navigation Changed to: ' + currentRoute);
                        return;
                    }
                };
                //default to first item in list
                links[1].parentNode.className = 'active';
            });
        }
    };
});