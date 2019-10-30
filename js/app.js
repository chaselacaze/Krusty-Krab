function checkTotal(){
    event.preventDefault();
    let rating = document.querySelector('input[name = "rating"]:checked').value;
    let patties = document.getElementById('patties').value * 2;
    let comboMeal = document.getElementById('comboMeal').value * 4;
    let deluxe = document.getElementById('deluxe').value * 3;
    let salad = document.getElementById('salad').value * 1.5;
    let bits = document.getElementById('bits').value * 1.59;
    let subtotal = patties + comboMeal + deluxe + salad + bits ;
    let tax = subtotal * .09;
    let tip = subtotal * rating;
    let finalTotal = subtotal + tip + tax;
    document.getElementById('output').innerText = finalTotal.toFixed(2);

};