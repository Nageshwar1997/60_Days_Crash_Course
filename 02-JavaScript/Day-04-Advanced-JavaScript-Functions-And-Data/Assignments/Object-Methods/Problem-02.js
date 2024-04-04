/* 
# Problem 2

### **Products Cart Object**

- Given an input of products in the below format (Name Quantity Price)
- Input

```
["Rice", "Dal", "Salt"]
[2, 3, 1]
[60, 50, 20]

```

- Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
- The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
- Sample output for the above case `290`
*/

let products = ["Rice", "Dal", "Salt"];
let quantities = [2, 3, 1];
let prices = [60, 50, 20];

let data = [];
for (let i = 0; i < products.length; i++) {
  data.push({ name: products[i], quantity: quantities[i], price: prices[i] });
}

let cart = {
  data: data,
  total: function () {
    let total = 0;
    for (let i = 0; i < this.data.length; i++) {
      total += this.data[i].quantity * this.data[i].price;
    }
    return total;
  },
};
console.log("Cart Data", cart.data);
console.log("Total: ", cart.total());
