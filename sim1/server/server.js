const express = require('express')
const bodyParser = require('body-parser')
const port = 3005,
const app = express()
const c = require('./controller')
const massive = require('massive')

require('dotenv').config()
app.use(bodyParser.json())
massive(process.env.connectionString).then(db => app.set('db', db))

// app.get('/api/products', c.create)
// app.get('/api/product/:id', c.getOne)
// app.put('/api/product/:id?desc=', c.update)
// app.post('/api/product', c.create)
// app.delete('/api/product/:id', c.delete)





app.listen(port,() => {
  console.log(`Listening on port ${port}`)
})