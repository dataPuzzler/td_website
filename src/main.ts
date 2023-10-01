import { makeDate } from "./utils";


const body =  document.getElementsByTagName("body")[0]
const displaySpan = document.createElement("span")
displaySpan.textContent = makeDate(1438, 5, 5).toDateString()
body.appendChild(displaySpan)

// even though Rollup is bundling all your files together, errors and
// logs will still point to your original source modules
console.log('if you have sourcemaps enabled in your devtools, click on main.js:5 -->');
