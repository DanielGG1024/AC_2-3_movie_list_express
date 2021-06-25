const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

//看不懂
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))


app.get('/', (req, res) => {
    const movieOne = [{
        id: 1,
        title: 'FuCK FUCK fUCk',
        image: 'https://movie-list.alphacamp.io/posters/2slvblTroiT1lY9bYLK7Amigo1k.jpg'
    }, {
        id: 1,
        title: 'FuCK FUCK fUCk',
        image: 'https://movie-list.alphacamp.io/posters/2slvblTroiT1lY9bYLK7Amigo1k.jpg'
    }, {
        id: 1,
        title: 'FuCK FUCK fUCk',
        image: 'https://movie-list.alphacamp.io/posters/2slvblTroiT1lY9bYLK7Amigo1k.jpg'
    }, {
        id: 1,
        title: 'FuCK FUCK fUCk',
        image: 'https://movie-list.alphacamp.io/posters/2slvblTroiT1lY9bYLK7Amigo1k.jpg'
    }, {
        id: 1,
        title: 'FuCK FUCK fUCk',
        image: 'https://movie-list.alphacamp.io/posters/2slvblTroiT1lY9bYLK7Amigo1k.jpg'
    }, {
        id: 1,
        title: 'FuCK FUCK fUCk',
        image: 'https://movie-list.alphacamp.io/posters/2slvblTroiT1lY9bYLK7Amigo1k.jpg'
    }, {
        id: 1,
        title: 'FuCK FUCK fUCk',
        image: 'https://movie-list.alphacamp.io/posters/2slvblTroiT1lY9bYLK7Amigo1k.jpg'
    }, {
        id: 1,
        title: 'FuCK FUCK fUCk',
        image: 'https://movie-list.alphacamp.io/posters/2slvblTroiT1lY9bYLK7Amigo1k.jpg'
    }]
    const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    res.render('index', { movies: movieOne, numbers: numberList })
})

app.listen(port, () => {
    console.log(`On http://localhost:${port}`)
}) 