const shopName = "Lyn's Anime Corner";
const currentYear = new Date().getFullYear();

let runningTotal = 0;

const shopHeading = document.getElementById("shop-name");

if (shopHeading) {
    shopHeading.textContent = shopName;
}

const copyright = document.getElementById("copyright");

if (copyright) {
    copyright.textContent = `© ${currentYear} ${shopName}`;
}

const products = document.querySelectorAll(".product-card");
const productCount = products.length;

const productCountDisplay = document.getElementById("product-count");

if (productCountDisplay) {
    productCountDisplay.textContent = productCount;
}

console.log("Shop Name:", shopName);
console.log("Current Year:", currentYear);
console.log("Running Total:", runningTotal);
console.log("Product Count:", productCount);