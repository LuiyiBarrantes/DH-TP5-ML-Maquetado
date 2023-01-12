const express = require("express")
const path = require("path")
const port = 3030
const app = express()


app.use(express.static(path.resolve(__dirname, "public")))



app.listen(port, () => console.log(`Servidor corriendo en https://localhost:${port}`))

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views", "home.html"))
})
app.get("/registro", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views","user", "register.html"))
})
app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views","user", "login.html"))
})