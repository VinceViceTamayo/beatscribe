const express = require("express");
const app = express();
const cors=require("cors");
const corsOptions = {
   origin:'*',
   credentials:true,
   optionSuccessStatus:200,
}
const PORT = 1010;

app.use(cors(corsOptions))

app.get("/song", (request, response) => {
    response.send("Greetings from bins' server");
});

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
});