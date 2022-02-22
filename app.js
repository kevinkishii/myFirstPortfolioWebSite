const express = require('express')
const app = express()

app.use(express.static('./home'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('*',(req,res) => res.status(404).json({error:'not found'}))

app.listen(4000,()=>{
    console.log('listening on port 4000')
})