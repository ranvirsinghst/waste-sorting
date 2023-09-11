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

  }, [])

  const wasteTypeClass =
  data.obj === 'compost'
    ? 'text-emerald-600' // Green for compost
    : data.obj === 'trash'
    ? 'text-slate-700' // Dark gray for trash
    : data.obj === 'recycle'
    ? 'text-sky-700' // Dark blue for recycle
    : '';

  return (
    <div className='maintext flex-row background-black'>
      <div className='self-start p-4 bg-white text-black rounded-xl shadow-xl max-w-sm'>
        <p>
          Waste Type: <span className={wasteTypeClass}>{data.obj}</span>
        </p>
        <ProgressBar className='max-w-sm' animated now={data.conf} label={`Confidence: ${data.conf}%`}/>
      </div>
      <AccordionText />
    </div>
  )
}

export default MainText