let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];


console.log("QTY       ITEM              TOTAL");

let totalCost = 0;

order.forEach((item) => {
  const {itemName, quantity, unitPricePence} = item;

  const itemTotalPence = quantity * unitPricePence;
  const itemTotalPounds = (itemTotalPence / 100).toFixed(2);

  totalCost += itemTotalPence;

  console.log(
    `${quantity.toString().padEnd(8)}${itemName.padEnd(20)}${itemTotalPounds}`
  );
});

console.log("");
console.log(`Total: ${(totalCost / 100).toFixed(2)}`);