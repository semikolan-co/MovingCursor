import * as React from 'react'
import styles from './styles.module.css'
import MovingCursor from './MovingCursor.js'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return (
    <div className={styles.test}>
      <MovingCursor />
      TypeScript: {text}
    </div>
  )
}
