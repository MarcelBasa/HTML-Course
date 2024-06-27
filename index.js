//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
//import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
let isAuthorised = false;

app.use(express.urlencoded({extended: true}));

function checkPassword(req, res, next){
    let inputPassword = "";
    inputPassword = req.body["password"];
    if(inputPassword === "ILoveProgramming") {
        isAuthorised = true;
    }
    next();
}
app.use(checkPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/index.html");
});

app.post("/check", (req, res) => {
    if( isAuthorised ){
        res.sendFile(__dirname+"/public/secret.html");
    }else{
        res.sendFile(__dirname+"/public/index.html");
    }
});

app.listen(port, () => {
    console.log(`server working on port ${port}`);
});