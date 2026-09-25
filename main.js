function isValidPrice(price){
    return typeof  price == "number" && price>0;
}
function isValidEmail(email){
    return includes("@") && includes(".");
}
function calculateDiscount(price ,discoutPercentage){
    if(!isValidPrice(price)){
        return 0;
    }

    let discountAmount = (price*discoutPercentage)/100;
    return price-discountAmount;
}
function calculateFinalBill(price, vatPercentage=15){
        let vat = (price*vatPercentage)/100;
        return price + vat;
}
function formateBdt(amout){
    return `${amout.toFixed(2)} BDT `
}
function capitalizedString(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function processOrder(user, itmePrice, discoutCode  ){
    console.log(`-----Order Process for ${capitalized(user.name)}`);
    if(!isValidEmail(user.email)){
        console.log("error: the email is not valid");
        return;
    }
    let currentPrice = itmePrice;
    if(discoutCode=="HAFIZ"){
        currentPrice = calculateDiscount(itmePrice, 20);
        console.log("20% discout Applied");
        
    }
    


}