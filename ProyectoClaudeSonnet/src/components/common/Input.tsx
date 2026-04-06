import type { ChangeEvent } from 'react'
import styles from './Input.module.css'

interface InputProps {
  label?: string
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  error?: string
  id?: string
  name?: string
  disabled?: boolean
  className?: string
}

function Input({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error = '',
  id,
  name,
  disabled = false,
  className = '',
}: InputProps) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  )
}

export default Input