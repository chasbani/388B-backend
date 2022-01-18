let products = [{
    name: "Licensed Metal Fish",
    price: 694.00
},
{
    name: "Tasty Rubber Chicken",
    price: 345.00
},
{
    name: "Handmade Fresh Chicken",
    price: 984.00
},
{
    name: "Ergonomic Frozen Computer",
    price: 838.00
},
{
    name: "Tasty Cotton Tuna",
    price: 914.00
},
{
    name: "Fantastic Steel Mouse",
    price: 93.00
},
{
    name: "Practical Rubber Keyboard",
    price: 319.00
},
{
    name: "Incredible Wooden Hat",
    price: 930.00
},
{
    name: "Fantastic Metal Soap",
    price: 351.00
},
{
    name: "Ergonomic Concrete Mouse",
    price: 829.00
}
];

let filtered = products.filter(p => {
   return p.price > 900
});
let printProduct = p => {
    console.log(`${p.name} ${p.price}`)
};

filtered.forEach(printProduct);
