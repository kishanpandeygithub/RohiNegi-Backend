const express = require("express");
const main = require("./aichat.js")
const app = express();
app.use(express.json());

// we will install our chat history here 
// the history is stored in the key value pair
// key:id  
// value :Array 
const chatHistory = {};

app.post('/chat', async (req, res) => {
  const { id , msg } = req.body;
  if(!chatHistory[id]){
    chatHistory[id] =[];
  }
  // extect the user history 
  const History = chatHistory[id];
  // History+ current sawal ko combine karna hai 
  const promptMessage = [...History ,{
    role:'user' ,
    parts:[{text:msg}]
  }];
  const answer = await main(promptMessage);
  // now we have to put the history in the model response and the usetr text as well  
  History.push({
    role:'user' ,
    parts:[{text:msg}]
  })
  History.push({
    role:'model' ,
    parts:[{text:answer}]
  })
  res.send(answer);
});


app.listen(3000, () => {
  console.log("Listining on the port number 3000");
});