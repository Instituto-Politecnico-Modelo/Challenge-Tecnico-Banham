import styles from './Input.module.css'

/**
 * Componente Input reutilizable
 * @param {string} label - Etiqueta del input
 * @param {string} type - Tipo de input (text, email, password, etc.)
 * @param {string} placeholder
 * @param {string} value
 * @param {function} onChange
 * @param {string} error - Mensaje de error
 */
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
  ...rest
}) {
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
        {...rest}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  )
}

export default Input
