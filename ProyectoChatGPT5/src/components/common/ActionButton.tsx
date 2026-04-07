import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './ActionButton.module.css'

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  tone: 'start' | 'click'
}

function ActionButton({ children, className = '', tone, ...props }: ActionButtonProps) {
  const toneClass = tone === 'start' ? styles.start : styles.click
  const composedClassName = [styles.button, toneClass, className].filter(Boolean).join(' ')

  return (
    <button className={composedClassName} type="button" {...props}>
      {children}
    </button>
  )
}

export default ActionButton