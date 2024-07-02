const express = require("express")

const app = express();
const PORT = 5000

app.get("/",function(request,response){
response.send("Hello World!")
})

app.listen(PORT, function () {
    console.log("Started application on port %d", PORT)
});