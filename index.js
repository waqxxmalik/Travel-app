const express = require('express')
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3200


  app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/home', (req, res) => res.render('pages/home'))
  .get('/about', (req, res) => res.render('pages/about'))
  .get('/package', (req, res) => res.render('pages/package'))
  .get('/book', (req, res) => res.render('pages/book'))
  .post('/book',  (req, res) => res.send('SUCCESFULLY SUBMITTED'))




  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
