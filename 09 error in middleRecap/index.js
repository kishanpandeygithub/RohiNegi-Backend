const express = require("express");
const app = express();
const auth = require("./middleware/authontication");
const err = require("./middleware/error");
const { error } = require("console");
const { ppid } = require("process");
app.use(express.json());
const foodItems = [
    { id: 1, item: "Paneer Butter Masala", type: "veg", price: 220 },
    { id: 2, item: "Veg Biryani", type: "veg", price: 180 },
    { id: 3, item: "Masala Dosa", type: "veg", price: 120 },
    { id: 4, item: "Chole Bhature", type: "veg", price: 150 },
    { id: 5, item: "Veg Burger", type: "veg", price: 90 },
    { id: 6, item: "Chicken Biryani", type: "nonveg", price: 250 },
    { id: 7, item: "Butter Chicken", type: "nonveg", price: 270 },
    { id: 8, item: "Egg Fried Rice", type: "nonveg", price: 160 },
    { id: 9, item: "Chicken Momos", type: "nonveg", price: 140 },
    { id: 10, item: "Fish Curry", type: "nonveg", price: 260 },
    { id: 11, item: "Cheese Pizza", type: "veg", price: 300 },
    { id: 12, item: "Veg Sandwich", type: "veg", price: 80 },
    { id: 13, item: "Chicken Roll", type: "nonveg", price: 130 },
    { id: 14, item: "Pasta Alfredo", type: "veg", price: 200 },
    { id: 15, item: "Mutton Curry", type: "nonveg", price: 320 }
];

//here the food item will store of the user in the cart
const cart = [];

app.get("/food", (req, res, next) => {
    // res.status(200).json({ mesage: "The food item are sown" });
    // res.status(200).send({
    //     "message": "the user is fetched"
    // });
    const error = new Error("crash");
    next(error);
})

app.use(err);
// how i can use the middleware for the authentication 
// app.use("/admine", (req, res, next) => {
//     // dummy code 
//     let token = "ABCDE";
//     const Access = token == "ABCDE" ? 1 : 0;
//     if (!Access) {
//         res.status(403).send("NO permition");
//     }
//     else {
//         next();
//     }
// })
app.use("/admine", auth);
//to add the item in the food manu 
app.post("/admine", (req, res) => {
    // // dummy code 
    // let token = "ABCDE";
    // const Access = token == "ABCDE";
    foodItems.push(req.body);
    res.send("item add successful");
})

app.delete("/admine/:id", auth, (req, res) => {
    let index = foodItems.findIndex((data) => {
        return data.id == req.params.id;
    });
    if (index != -1)
        foodItems.splice(index, 1);
    else
        res.send("Item dose not exist");
    res.send("item deleted successful");
})
//patch request 
app.patch("/admine", (req, res) => {
    let data = foodItems.find((data) => {
        return data.id == req.body.id;
    });
    if (data) {
        if (req.body.item)
            data.item = req.body.item;
        if (req.body.type)
            data.type = req.body.type;
        if (req.body.price)
            data.price = req.body.price;
        res.send("The data updated successfully");
    }
    else {
        res.status(403).send("The item is not found");
    }
})

//this is the data modification on the cort and the user responce
app.get("/user", (req, res) => {
    res.send(cart);
})

app.post("/user", (req, res) => {
    let id = req.body.id;
    let data = foodItems.find((data) => {
        return id == data.id;
    })
    if (data) {
        cart.push(data);
        res.send("data saved successful");
    }
    else {
        res.send("data Already present");
    }
})

app.delete("/user/:id", (req, res) => {
    let id = req.params.id;
    let index = cart.findIndex((data) => {
        return id == data.id;
    })
    if (index != -1) {
        cart.splice(index, 1);
        res.send("food successfully deleted from the cart");
    }
    else {
        res.send("the food is not found in the cart");
    }
})
app.listen(3000, () => {
    console.log("App is the listing on the port number 3000");
})