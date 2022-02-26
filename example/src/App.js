import React from 'react'

import MovingCursor from 'movingcursor'

const App = () => {
  const cursorConfig = {
    color: '#64ffda',
    size: '35px',
    borderSize: '2px',
    delay: '0.2s'
  }
  return (
    <>
      <MovingCursor config={cursorConfig} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100%',
          backgroundColor: '#000',
          fontSize: '2rem',
          color: '#fff',
          overflow: 'hidden',
        }}
      >
        <div data-active={1} >Hover this</div>
      </div>
    </>
  )
}

export default App
