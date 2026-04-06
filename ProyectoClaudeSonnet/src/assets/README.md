# Carpeta de Assets

Esta carpeta contiene todos los recursos estáticos del proyecto.

## Estructura

```
assets/
├── images/   → Imágenes del proyecto (.png, .jpg, .webp, etc.)
├── icons/    → Íconos SVG personalizados
└── fonts/    → Fuentes tipográficas personalizadas
```

## Uso

```jsx
// Importar una imagen
import logo from '@/assets/images/logo.png'

// Importar un ícono SVG como componente
import { ReactComponent as MyIcon } from '@/assets/icons/my-icon.svg'
```
