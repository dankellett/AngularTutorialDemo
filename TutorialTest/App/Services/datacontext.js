/* datacontext: data access and model management layer */

// create and add datacontext to the Ng injector
// constructor function relies on Ng injector
// to provide service dependencies
myStore.factory('datacontext',
    ['toast',
    function (toast) {

        toast.toast("creating datacontext");

        var cartItems = [];
        var cartIdGenerator = 1;
        var products = [
            { "Id": 1, "Name": "Poster", "Price": 5.0, "ProductType": 0, "ImageUrl": null },
            { "Id": 2, "Name": "Business Card", "Price": 0.1, "ProductType": 3, "ImageUrl": null },
            { "Id": 3, "Name": "Postcard", "Price": 2.0, "ProductType": 4, "ImageUrl": null },
            { "Id": 4, "Name": "Large Poster", "Price": 8.0, "ProductType": 0, "ImageUrl": null },
            { "Id": 5, "Name": "Email Blast", "Price": 20.0, "ProductType": 5, "ImageUrl": null },
            { "Id": 6, "Name": "Powerpoint", "Price": 5.0, "ProductType": 6, "ImageUrl": null }
        ];
        var datacontext = {
            getProductList: getProductList,
            addProductToCart: addProductToCart,
            removeItemFromCart: removeItemFromCart,
            cartItems: cartItems
        };

        function getProductList() { return products; };
        function addProductToCart(id, quantity) {
            var product;
            for (var i = 0; i < products.length; i++) {
                if(products[i].Id == id)
                    product = products[i];
            }
            var item = {
                id:cartIdGenerator++,
                productid: id,
                product: product,
                quantity: quantity
            };
            cartItems.push(item);
            toast.toast("Product added to cart.");
        };
        function removeItemFromCart(id) {
            for(var i = cartItems.length-1; i--;){
                if (cartItems[i].id === id) {
                    cartItems.splice(i, 1);
                    toast.toast("Product removed to cart.")
                }
            }
        };

        return datacontext;

    }]);