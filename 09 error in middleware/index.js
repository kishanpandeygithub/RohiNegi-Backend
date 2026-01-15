const express = require("express");
const app = express();
const auth = require("./middleware/autontication");

app.use(express.json());
// crud opreation in the creare    , reas   , update , delete 
// database Array 
const foodMenu = [
    { id: 1, food: "Veg Chowmein", category: "veg", price: 500 },
    { id: 2, food: "Chicken Hakka Noodles", category: "non-veg", price: 400 },
    { id: 3, food: "Paneer Tikka", category: "veg", price: 690 },
    { id: 4, food: "Mutton Rogan Josh", category: "non-veg", price: 467 },
    { id: 5, food: "Spring Rolls", category: "veg", price: 250 },
    { id: 6, food: "Butter Chicken", category: "non-veg", price: 550 },
    { id: 7, food: "Garlic Naan", category: "veg", price: 80 },
    { id: 8, food: "Fish Fry", category: "non-veg", price: 420 },
    { id: 9, food: "Dal Makhani", category: "veg", price: 320 },
    { id: 10, food: "Egg Fried Rice", category: "non-veg", price: 380 },
    { id: 11, food: "Mix Veg Curry", category: "veg", price: 290 },
    { id: 12, food: "Prawn Tempura", category: "non-veg", price: 750 },
    { id: 13, food: "Gulab Jamun", category: "veg", price: 120 },
    { id: 14, food: "Chicken Biryani", category: "non-veg", price: 480 },
    { id: 15, food: "Mushroom Risotto", category: "veg", price: 520 },
    { id: 16, food: "Beef Steak", category: "non-veg", price: 890 }
];

// here the food is added by the user
const addToCart = [];

// this is the crud api end point 
app.get("/food", (req, res) => {
    res.send(foodMenu);
});

//seperate function for the authontication 
app.use("/admine", auth)

app.post("/admine", (req, res) => {
    // add item to the food menu 
    foodMenu.push(req.body);
    res.status(200).send("Item added successfully");
})

app.delete("/admine/:id", (req, res) => {

    const id = req.params.id;
    let index = foodMenu.findIndex((data) => {
        return data.id == id;
    })
    if (index != -1) {
        foodMenu.splice(index, 1);
        res.status(200).send("Item Deleted successfully");
    }
    else {
        res.status(202).send("Itemnot found");
    }
})

app.patch("/admine", (req, res) => {
    const id = req.body.id;
    let data = foodMenu.find((data) => {
        return data.id == id;
    })
    if (data) {
        if (req.body.food)
            data.food = req.body.food;
        if (req.body.price)
            data.price = req.body.price;
        res.status(200).send("Item modified successfully");
    }
    else {
        res.status(202).send("Item not found");
    }

})




// from the rohit nedi revision  
app.get("/user", (req, res) => {
    res.send(addToCart);
})
app.post("/user/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let data = foodMenu.find((data) => {
        return data.id == id;
    });
    if (data) {
        addToCart.push(data);
        res.status(200).send("Item addedd successfully");
    }
    else {
        res.status(400).send("Item is out of stock");
    }
})

app.delete("/user/:id", (req, res) => {
    let id = req.params.id;
    let index = addToCart.findIndex((data) => {
        return data.id == id;
    })
    if (index != -1) {
        addToCart.splice(index, 1);
        res.status(200).send("The idem is successfully from the cart");
    }
    else {
        res.status(400).send("The idem is not present in the cart");
    }
})
app.listen("3000", () => {
    console.log("The app is the listning on the 3000 port");
})