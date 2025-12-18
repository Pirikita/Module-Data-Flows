let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];


console.log("QTY       ITEM              TOTAL"); // formatting

let totalCost = 0; // in pence to avoid decimal errors

order.forEach((item) => { // loop through the order
  const {itemName, quantity, unitPricePence} = item; // object destructuring

  // calculate the total from pence to pounds
  const itemTotalPence = quantity * unitPricePence;
  const itemTotalPounds = (itemTotalPence / 100).toFixed(2); // guarantees 2 decimal 

  totalCost += itemTotalPence; // add to overall total 

  console.log( // format the row correctly
    `${quantity.toString().padEnd(8)}${itemName.padEnd(20)}${itemTotalPounds}`
  );
});

// print final total
console.log("");
console.log(`Total: ${(totalCost / 100).toFixed(2)}`);