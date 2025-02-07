import { sum } from "./sum.js";

document.addEventListener("DOMContentLoaded", (event) => {
   const n = sum(1, 2)
    document.getElementById("sum").innerText = n;
});

