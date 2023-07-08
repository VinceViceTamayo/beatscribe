const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const PORT = 1010;

const corsOptions = {
   origin:'*',
   credentials:true,
   optionSuccessStatus:200,
}

app.use(cors(corsOptions));
//code below allows us to access the music folder from our API link
app.use("/music", express.static("music"));

app.get("/song", (request, response) => {
    const path = "./music/SpongeCola/Neon";
    const audioData = fs.readdirSync(path);
    const info = fs.readFileSync("./music/SpongeCola/Neon/info.json");
    const parsedInfo = JSON.parse(info);
    response.send({...parsedInfo, "track": `${path}/${audioData[1]}`});
});

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
});