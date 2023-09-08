import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar'

function ConfidenceBar() {

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
      <>
          <ProgressBar className='max-w-sm' animated now={data.conf} label={`Confidence: ${data.conf}%`}/>
      </>
    )
}

export default ConfidenceBar