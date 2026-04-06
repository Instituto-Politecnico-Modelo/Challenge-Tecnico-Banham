import styles from './Button.module.css'

/**
 * Componente Button reutilizable
 * @param {string} variant - 'primary' | 'secondary' | 'danger'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {boolean} disabled
 * @param {function} onClick
 * @param {React.ReactNode} children
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ...rest
}) {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[variant]} ${styles[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
