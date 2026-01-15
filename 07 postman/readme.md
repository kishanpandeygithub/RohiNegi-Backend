To send the request from the frontend and we write the 
const responce = await fetch("asdfghjkl" , {
    method :'post' , 
    headers:{
        'Content-Type ': 'application/json'
    },
    body: JSON.stringify({name:'John' , age:30});
})


How to Convert JSON to a JavaScript Object, and vice-versa
JavaScript has two built-in methods to convert JSON data into a JavaScript object and vice-versa.

How to Convert JSON Data to a JavaScript Object
To convert JSON data into a JavaScript object, use the JSON.parse() method. It parses a valid JSON string into a JavaScript object.


const userJSONData = `{
    "name": "Alex C",
    "age": 2,
    "city": "Houston"
}`;

const userObj = JSON.parse(userJSONData);
console.log(userObj);
Output:

ImageThe output

How to Convert a JavaScript Object to JSON Data
To convert a JavaScript object into JSON data, use the JSON.stringify() method.

const userObj = {
    name: 'Alex C', 
    age: 2, 
    city: 'Houston'
}

const userJSONData = JSON.stringify(userObj);
console.log(userJSONData);
Output:

ImageThe output

Did you notice the JSON term we used to invoke the parse() and stringify() methods above? That's a built-in JavaScript object named JSON (could have been named JSONUtil as well) but it's not related to the JSON data format we've discussed so far. So, please don't get confused