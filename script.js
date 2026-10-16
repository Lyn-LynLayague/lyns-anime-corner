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


  
// 1. Stock Status
const stockCount = 5;
let stockMessage = "";

if (stockCount > 10) {
    stockMessage = "In stock";
} else if (stockCount >= 1 && stockCount <= 10) {
    stockMessage = "Only a few left";
} else if (stockCount === 0) {
    stockMessage = "Sold out";
} else {
    stockMessage = "Invalid stock count";
}

const stockStatus = document.getElementById("stock-status");

if (stockStatus) {
    stockStatus.textContent = stockMessage;
}

// 2. Free Delivery Check
const orderTotal = 1200;
const isMember = true;

const qualifiesForFreeDelivery = orderTotal >= 1000 && isMember;

const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;
const finalTotal = orderTotal + deliveryFee;

const deliveryFeeDisplay = document.getElementById("delivery-fee");

if (deliveryFeeDisplay) {
    deliveryFeeDisplay.textContent = `₱${deliveryFee}`;
}

const finalTotalDisplay = document.getElementById("final-total");

if (finalTotalDisplay) {
    finalTotalDisplay.textContent = `₱${finalTotal}`;
}

// 3. Shop Open or Closed
const isShopOpen = true;

const shopMessage = isShopOpen ? "Open today" : "Closed today";

const shopStatus = document.getElementById("shop-status");

if (shopStatus) {
    shopStatus.textContent = shopMessage;
}
