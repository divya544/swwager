const dotenv = require('dotenv').config({ path: './.env' }).parsed
const createError = require('http-errors')
const express = require('express')
const productRouter = require('./routes/productRouter')
const app = express()
const db = require('./models/index')

// -----------Middlewares-----------------------------------------------------
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/product', productRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

app.listen(dotenv.PORT, () => {
  console.log(`Server is listinig on ${dotenv.PORT}`)
})
// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  return res.send({
    apiResponseCode: '404',
    apiResponseMessage: err.message,
    apiResponseFrom: 'NODE',
    apiResponseTime: new Date().toLocaleString(),
    apiResponseData: {}
  })
})
