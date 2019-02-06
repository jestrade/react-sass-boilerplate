const express = require("express")
const app = express()
const path = require("path")

app.use(express.static(__dirname + "/dist"))


const server = app.listen(process.env.PORT  || 3000,()=>{
  console.log("Servidor iniciado en el puerto "+server.address().port)
})