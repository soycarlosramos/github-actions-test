import * as dotenv from 'dotenv'
import express from 'express'
dotenv.config()

const app = express()

app.set('port', process.env.PORT ?? 3000)

app.get('/', (req, res) => {
  res.json({
    msg: 'Hello world',
    node_env: process.env.NODE_ENV,
    root: process.cwd(),
    date: new Date().toLocaleDateString('es-co', {
      weekday: "long", day: "numeric", month: "long", year: "numeric",
    })
  })
})

app.listen(app.get('port'), () => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`Server running on http://localhost:${app.get('port')}`);
    return
  }

  console.log('Node server is working!')
})