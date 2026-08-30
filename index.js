let finalPrice = 0;

let monthlyPrice = 350;

let months = Number(
  prompt('Enter number of months'));

finalPrice = months * monthlyPrice;

console.log( 'Membership: ' + months +' months => ' + finalPrice + ' EGP');




if (months >= 12) {

  let discountValue = (15 / 100) * finalPrice;

  finalPrice = finalPrice - discountValue;

  console.log( '12+ Months Discount 15% => - ' + discountValue + ' EGP');

} else if (months >= 6) {

  let discountValue = (10 / 100) * finalPrice;

  finalPrice = finalPrice - discountValue;

  console.log('6+ Months Discount 10% => - ' + discountValue + ' EGP');

}




let personalTraining = confirm( 'Do you want to add Personal Training for 200 EGP?');

if (personalTraining == true) {

  finalPrice = finalPrice + 200;

  console.log( 'Personal Training => + 200 EGP');
}




let vat = (14 / 100) * finalPrice;

finalPrice = finalPrice + vat;

console.log('VAT 14% value => ' + vat.toFixed(2) + ' EGP');


console.log(
  'Final Membership Price is : ' +
  finalPrice.toFixed(2) + ' EGP');