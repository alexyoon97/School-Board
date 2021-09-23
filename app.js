const express = require("express");
const schoolRouter = require("./routes/school");
const port = process.env.PORT ||3001;
const app = express();

app.use(express.json());
app.use("/school", schoolRouter);

if(process.env.NODE_ENV == "production"){//if application is deplyoing
    app.use(express.static('client/build'))//html,css files
    const path = require('path')
    app.get('*',(req,res) => {//if client is making a request, send response to index.html
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(port, () => console.log("server running on", port));
