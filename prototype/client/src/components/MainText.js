import React, { useState, useEffect } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import AccordionText from './AccordionText'

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
    <div className='maintext flex-row background-black'>
      <div className='self-start p-4 bg-white text-black rounded-xl shadow-xl max-w-sm'>
        <p>Waste Type: {data.obj}</p>
        <ProgressBar className='max-w-sm' animated now={data.conf} label={`Confidence: ${data.conf}%`}/>
      </div>
      <AccordionText />
    </div>
  )
}

export default MainText