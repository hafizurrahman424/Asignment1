function isValidPrice(price){
    return typeof price == "number" && price>0;
}
function isValidEmail(email){
    return email.includes("@") && email.includes('.')};

function calculateDiscout(price, discountPercent){
    if(!isValidPrice(price)){
        return 0; 
    }
    let discoutAmount = (price * discountPercent)/100;
    return price-discoutAmount;
}
function CalculateFinalBill(price, vatPercentage=15){
    let vat = (price*vatPercentage)/100;
    return price+vat;
}
function formateBdt(amout){
    return `${amout.toFixed(2)} BDT`;
}
function capitalized(str){
    if(!str) return "";
    return str.charAt(0).toUpperCase()+str.slice(1);
}
function processOrder(user, itemPrice, discountCode){
    console.log(`---processing Order for ${capitalized(user.name)} ------ `);
    if(!isValidEmail(user.email)){
        console.log("Error: Invalid user email");
        return;
    }
    let currentPrice = itemPrice;
    if(discountCode=="HAFIZ"){
        currentPrice = calculateDiscout(itemPrice, 20);
        console.log("20% Dicount applied")
    }
    let totalBill = CalculateFinalBill(currentPrice)
    console.log("Final amout to pay: ", formateBdt(totalBill))
    console.log("Oder completed succesful");
}
let user1 = {name: "mobarak", email: "mobarak@gmail.com"}
processOrder(user1, 2000, "HAFIZ");
