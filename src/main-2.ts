import { longest } from "./utils-2";


const body =  document.getElementsByTagName("body")[0]
const displaySpan = document.createElement("span")
displaySpan.textContent = longest("Peter-Meyer-Squibb", "Sigmar-Dainer-Mayer")
body.appendChild(displaySpan)

