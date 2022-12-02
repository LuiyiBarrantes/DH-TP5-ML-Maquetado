const express = require ("express")
const path = require ("path")
const port=3030
const app= express()


app.use(express.static(path.resolve(__dirname, "public")))



app.listen(port,()=> `Servidor corriendo en https://localhost:${port}`)

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "views", "home.html"))
})