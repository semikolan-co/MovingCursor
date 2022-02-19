import React from 'react'

import MovingCursor from 'movingcursor'

const App = () => {
  return (
    <>
      <MovingCursor />
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
