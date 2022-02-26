# movingcursor

> MovingCursor is a simple React Package which implements a Cursor that follows Mouse Position

[![NPM](https://img.shields.io/npm/v/movingcursor.svg)](https://www.npmjs.com/package/movingcursor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save movingcursor
```

#### Import in your React App
You can Import the package in your React App by using the following code:
```jsx
import MovingCursor from 'movingcursor';
```

#### Make components Active
You can make the components active by adding a data attribute `data-active` as `1` to the component. Like this:
```jsx
<span data-active="1">Hover Me</span>
```
This will make the cursor glow when the component is hovered.

#### Add Custom Configuration
You can add custom configuration to the package by passing a parameter named `config` to the component. Like this:
```jsx
<MovingCursor config={{
    color: '#64ffda',
    size: '35px',
    borderSize: '2px',
    delay: '0.2s'
}} />
```

## Usage
```js
import React from 'react'
import MovingCursor from 'movingcursor'

const MyComponent = () => {
  const cursorConfig = {
    color: '#64ffda',
    size: '35px',
    borderSize: '2px',
    delay: '0.2s'
  }
  return (
    <>
      <MovingCursor config={cursorConfig} />
      <div>
        <h1>Hello World</h1>
        <span data-active={1}>Hover Me</span>
      </div>
    </>
  )
}
```

## License

MIT © [meinhoonharsh](https://github.com/meinhoonharsh)
