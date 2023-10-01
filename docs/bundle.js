(function () {
    'use strict';

    function makeDate(mOrTimestamp, d, y) {
        if (d !== undefined && y !== undefined) {
            return new Date(y, mOrTimestamp, d);
        }
        else {
            return new Date(mOrTimestamp);
        }
    }

    var body = document.getElementsByTagName("body")[0];
    var displaySpan = document.createElement("span");
    displaySpan.textContent = makeDate(5, 5, 5).toDateString();
    body.appendChild(displaySpan);
    // even though Rollup is bundling all your files together, errors and
    // logs will still point to your original source modules
    console.log('if you have sourcemaps enabled in your devtools, click on main.js:5 -->');

})();
//# sourceMappingURL=bundle.js.map
