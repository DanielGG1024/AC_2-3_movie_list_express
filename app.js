const express = require('express')
const app = express()
const movieList = require('./movies.json')
const port = 3000

const exphbs = require('express-handlebars')

//看不懂
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))


app.get('/', (req, res) => {
    const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    res.render('index', { movies: movieList.results, numbers: numberList })
})

app.get('/movies/:movie_id', (req, res) => {
   const movie = movieList.results.find(movie => movie.id.toString() === req.params.movie_id)    
    // console.log(req.params.movie_id)
    console.log(movie)
    res.render('show', {movie:movie})
})
app.listen(port, () => {
    console.log(`On http://localhost:${port}`)
})