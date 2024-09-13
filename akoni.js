class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price; 
    }

    displayProduct() {
        console.log(`Product: ${this.name}`); 
        console.log(`Price: $${this.price.toFixed(2)}`); 
    }

    calculateTotal(saleTax) {
        return this.price + (this.price * saleTax);
    }
}

const saleTax = 0.10; 

const product1 = new Product("iPhone 14", 999.99);
const product2 = new Product("Samsung Galaxy S23", 849.99);
const product3 = new Product("Google Pixel 8", 699.99);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total1 = product1.calculateTotal(saleTax);
const total2 = product2.calculateTotal(saleTax);
const total3 = product3.calculateTotal(saleTax);

console.log(`Total price (with tax) for ${product1.name}: $${total1.toFixed(2)}`);
console.log(`Total price (with tax) for ${product2.name}: $${total2.toFixed(2)}`);
console.log(`Total price (with tax) for ${product3.name}: $${total3.toFixed(2)}`);
