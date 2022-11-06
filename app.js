const express = require('express')

const cors = require('cors')


const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use(cors());



app.post('/', (req, res) => {
    const  operation_type = req.body.operation_type
    const  x = req.body.x
    const  y = req.body.y
  
    if (isNaN(x) || isNaN(y))
      return res.send({
        error: "Values are invalid"
      })
  
    let result = ''
  
    if (operation_type.toLowerCase() === "addition") {
      result = x + y
    }
    else if (operation_type.toLowerCase() === "multiplication") {
      result = +x * +y
    }
    else if (operation_type.toLowerCase() === "subtraction") {
      result = +x - +y
    }
  res.send({slackUsername: 'Philip-D21', result, operation_type })
  })
  
  app.listen(port, () => {
    console.log(`Connected to the server on ${port}`)
  })
