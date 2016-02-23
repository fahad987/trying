var express = require("express");
var bodyparser = require("body-parser");
var path = require('path');
var app = express();




var staticd = path.resolve(__dirname ,"./static")
app.use(express.static(staticd))
app.use(bodyparser.json())
app.set("port", (process.env.PORT || 8000))

app.get("*" , function (req,res) {
    var indexViewPage = path.resolve(__dirname, "./static/index.html");
    res.sendFile(indexViewPage)
});

    app.listen(app.get('port') , function () {
        console.log("Server Started");
    })