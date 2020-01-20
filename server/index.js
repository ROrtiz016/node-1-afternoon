const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller/message_controller')

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'))

const port = 3000;

app.post('/api/messages', controller.create)
app.put('/api/messages/:id', controller.update)
app.get('/api/messages', controller.read)
app.delete('/api/messages/:id', controller.delete)

app.listen(port, () => {
  console.log(`Server online ${port}`)
})