const express = require("express");
const faker = require("faker");
const app = express();

// Classes
class Product {
    constructor() {
        this.name = faker.commerce.productName();
        this.price = `$${faker.commerce.price()}`;
        this.department = faker.commerce.department();
    }
}
const newProduct = new Product();
console.log(newProduct);


class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
const newUser = new User();
console.log(newUser);


class Address {
    constructor() {
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}
const newAddress = new Address();
console.log(newAddress);


class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = newAddress;
    }
}
const newCompany = new Company();
console.log(newCompany);


//Server
app.get("/api/:type/:new", (req, res) => {
    if (req.params.type === "users" && req.params.new === "new") {
        res.json(newUser);
    }
    if (req.params.type === "company" && req.params.new === "new") {
        res.json(newCompany);
    }
    if (req.params.type === "users" && req.params.new === "company") {
        res.json({ user: newUser, company: newCompany });
    }
});

const server = app.listen(8000, () =>
    console.log(`Server is listening on port ${server.address().port}`)
);





