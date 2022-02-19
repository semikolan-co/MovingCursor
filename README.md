# movingcursor

> MovingCursor is a simple React Package which implements a Cursor that follows Mouse Position

[![NPM](https://img.shields.io/npm/v/movingcursor.svg)](https://www.npmjs.com/package/movingcursor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save movingcursor
```

## Usage

```tsx
import React from 'react'
import MovingCursor from 'movingcursor'

const MyComponent = () => {
  return (
    <>
      <MovingCursor />
      <div >
        <h1>Hello World</h1>
        <span data-active={1}>Hover Me</span>
      </div>
    </>
  )
}
```

## License

MIT © [meinhoonharsh](https://github.com/meinhoonharsh)
