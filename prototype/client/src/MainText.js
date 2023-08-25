import React, { useState, useEffect } from 'react'

function MainText() {

  const [data, setData] = useState({obj: 'none', conf: '0'})

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch("/data").then(
        res => res.json()
      ).then(
        data => {
          setData(data)
        }
      )
    }, 1000)

    return () => clearInterval(intervalId)

  })

  return (
    <div className='flex-row p-6 bg-white rounded-xl shadow-lg max-w-sm'>
      <p>Waste Type: {data.obj}</p>
      <p>Prediction Confidence: {data.conf}%</p>
    </div>
  )
}

export default MainText