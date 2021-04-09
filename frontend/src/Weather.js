import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Weather() {
     const [weatherNY, setweatherNY] = useState('not set yet')

     useEffect(() => {
          axios.get('/get_NY_weather')
               .then((res) => {
                    //console.log(res.data.tempu)
                    setweatherNY(res.data.tempu)
               })
     }, [])

     return (
          <div>
               <h1>The weather of NY now is: {weatherNY} </h1>
          </div>
     )
}

export default Weather
