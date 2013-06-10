myStore.service('toast', function () {
    this.toast = function (message) {
        humane.log(message);
    };
});