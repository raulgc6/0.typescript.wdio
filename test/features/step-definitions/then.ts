import { Then } from "@cucumber/cucumber";
import chai from "chai";

Then (/^Inventory page should list (.*)$/, async function(noOfProducts){
    if (!noOfProducts) throw Error (`Invalid number is provided: ${noOfProducts}`)
    let eleArr = await $$(".inventory_item")
    chai.expect(eleArr.length).to.equal(parseInt(noOfProducts))  //=== parseInt pasa un char a Int

})

/**
 * 1. Get price list
 * 2. Convert string to number
 * 3. Assert if any value is <= 0
 */

Then(/^Validate all products have valid price$/, async function () {
  /** 1. Get price list*/
  let pricesArr = await $$(".inventory_item_price");
  let priceStrArr = [];
  for (let i = 0; i < pricesArr.length; i++) {
    let elePrice = await pricesArr[i].getText();
    priceStrArr.push(elePrice);
  }
  console.log(`>>>Price with $: ${priceStrArr}`);

  /**2. Convert string to number */
  let priceNumArr = priceStrArr.map((ele) => parseInt(ele.replace("$", ""))); //recorre cada elemento y ejecuta una funcion, en este caso reemplazo
  console.log(`>> Price without $ simbol, ${priceNumArr}`);

  /**3. Assert if any value is <0 */
  let priceNegArr = priceNumArr.filter((ele) => ele <= 0); //filtra cada elemento y mira si cumple una comprobación 
  chai.expect(priceNegArr.length).to.equal(0);
});