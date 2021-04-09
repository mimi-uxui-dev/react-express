const express = require('express')
const app = express()
const request = require('request')
const port = 5020
const apiLink = 'http://api.weatherstack.com/current?access_key=abb53a4c4e14ba65ef2738361eb3b528&query=New%20York'


app.get('/', (req, res) => res.send('hello w0rld'))

app.get('/get_NY_weather', (req, res) => {
     request(apiLink, function (error, response, body) {
          if (!error && response.statusCode == 200) {
               var parsedBody = JSON.parse(body)
               var tempu = parsedBody['current']['temperature']
               res.send({ tempu })
               // res.send(body)
          }
     })
})

app.listen(port, () => console.log(`Listening to ${port} `))

