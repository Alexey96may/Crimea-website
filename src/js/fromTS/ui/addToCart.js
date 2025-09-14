var AddToCart = /** @class */ (function () {
    function AddToCart(numberBar) {
        var _loop_1 = function (i) {
            var actualNum = 0;
            var actualBar = numberBar[i];
            numberBar[i].addEventListener("click", function (event) {
                event.stopPropagation();
                var counter = actualBar === null || actualBar === void 0 ? void 0 : actualBar.querySelector('[name="counter"]');
                if (event.target.textContent.toLowerCase() ===
                    "+") {
                    actualNum++;
                }
                else if (event.target.textContent.toLowerCase() ===
                    "-" &&
                    actualNum > 0) {
                    actualNum--;
                }
                counter.innerText =
                    actualNum.toString();
            });
        };
        for (var i = 0; i < numberBar.length; i++) {
            _loop_1(i);
        }
    }
    return AddToCart;
}());
export { AddToCart };
