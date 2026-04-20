const { GoogleGenAI } = require("@google/genai");
const getWeather = require("./middleware/weather.js");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const Conversation_history = [];


const ai = new GoogleGenAI({ apiKey: "AIzaSyADTtcNQf2cKiNlMrqQgJGemsEXZPDn9U0" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: Conversation_history,
  });
  return response.text;
}





async function chating() {
  const question = 'How can I help you today? ';
  // thia ia uaed to get the input fromt he user 
  rl.question(question, async (value) => {
    const prompt = `you are an Ai agent  , Who will repond to me in the JSON format only. 
  anakyse te user query and try to fetch the city and the date detail from it date format
   should be in (yyyy-mm-date) if user ask fo rhte future otherwise mark the date as today .
   to fetch the weather detail , i have already a function which dose it for me  
   example format is 
    { "weather_detail_needed": true ,
      "location": [{"city":"delhi" ,date:"today"} ,{"city":"mumbai" ,date:"2026-03-13"}] 
    },
    like this according to the user query 
    once you have weather report detail responce in the json format only 
    json format should look like  this 
    { "weather_detail_needed": false ,
      "weather_report": "Bhai  Delhi ka weather Akdam mast hai, 28 deg temp make the pakore in the house"
    }
     the user input is 
     userInpt:${value};
     strictly folloe=w the  json format  
   `;
    Conversation_history.push({
      role: "user",
      parts: [{ text: prompt }]
    })
    while (true) {
      const answer = await main();
      Conversation_history.push({
        role: "model",
        parts: [{ text: answer }]
      })
      const data = JSON.parse(answer);
      if (data.weather_detail_needed == false) {
        console.log(data.weather_report);
        break;
      }
      // console.log(data);
      const weatherInformation = await getWeather(data.location);
      weatherInfo = JSON.stringify(weatherInformation);
      Conversation_history.push({
        role: "user",
        parts: [{ text: weatherInfo }]
      })
    }
    rl.close();
  });

}
chating();


// I said to l to give the mausam of the delhi and give the location array
// int the format [{city:"delhi" ,date:"today" } ,{city:"mumbai" , date:''}]
// location se get weather -->actual weather ko nikal ke de dega
// actual weather aya hai LLM ko dunga iska wether report taiyar kar de
// show this in the output delj