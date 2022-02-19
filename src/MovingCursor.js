import React, { useState, useEffect } from 'react'
import './MovingCursor.css'

export default function MovingCursor(props) {
  const defaultConfig = {
    color: '#64ffda'
  }
  const config = props.config
  const style = {
    left: '1048px',
    top: '264px',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    height: '35px',
    width: '35px',
    borderRadius: '50%',
    border: `2px solid ${config?.color || defaultConfig.color}`,
    transition: 'all 0.5s ease 0s'
  }

  const activeStyle = {
    backgroundColor: config?.color || defaultConfig.color,
    opacity: '0.3',
    transform: 'translate(-50%,-50%) scale(2)'
  }

  const [cursorActive, setCursorActive] = useState(false)
  const [cursorPosition, setCursorPosition] = useState([0, 0])
  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      setCursorPosition([e.pageX, e.pageY])
      const cursorElement = document.elementFromPoint(e.pageX, e.pageY)
      if (
        cursorElement?.tagName === 'A' ||
        cursorElement?.getAttribute('data-active')
      ) {
        setCursorActive(true)
      } else {
        setCursorActive(false)
      }
    })
  }, [])
  return (
    <div
      className={'moving-cursor ' + (cursorActive ? 'active' : '')}
      style={{
        ...style,
        ...(cursorActive ? activeStyle : null),
        left: cursorPosition[0],
        top: cursorPosition[1]
      }}
    />
  )
}
