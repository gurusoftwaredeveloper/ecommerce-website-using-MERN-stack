const express = require("express")
const app = express();
const Router = require("./routers/productRoute");
const {coustomErrorHandler} = require("./middleware/coustomErrorAPI")
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/v1/", Router)
app.use(coustomErrorHandler)

app.listen(PORT, () => {
    console.log(`Server is Runing ${PORT}`);

})