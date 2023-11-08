const express = require('express')
const mongoose = require('mongoose')
const app = express()
const URL = 'mongodb+srv://32av32:32av32@cluster0.7fiabdg.mongodb.net/intocode-pharmacy?retryWrites=true&w=majority'


app.use(express.json())
app.use('/users', require('./routes/users.route'))
app.use('/products', require('./routes/products.route'))
app.use('/carts', require('./routes/carts.route'))
app.use('/categories', require('./routes/categories.route'))
app.use('/admin', require('./routes/admin.route'))

async function connectToMongoose(url) {
    try{
        await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log('Успешно соединились с сервером MongoDB')
        app.listen(4000)
    } catch (err) {
        console.log(`Ошибка при соединении с сервером MongoDB. Message: ${err.message}`)
    }

}

connectToMongoose(URL)