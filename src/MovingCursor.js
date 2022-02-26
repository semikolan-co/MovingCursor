import React, { useState, useEffect } from 'react'
import './MovingCursor.css'

export default function MovingCursor(props) {
  const defaultConfig = {
    color: '#64ffda',
    size: '35px',
    borderSize: '2px',
    delay: '0.2s'
  }
  const config = props.config
  const style = {
    left: '-20px',
    top: '-20px',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    height: config?.size || defaultConfig.size,
    width: config?.size || defaultConfig.size,
    borderRadius: '50%',
    border: `${config?.borderSize || defaultConfig.borderSize} solid ${
      config?.color || defaultConfig.color
    }`,
    transition: `all ${config?.delay || defaultConfig.delay} ease 0s`
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
