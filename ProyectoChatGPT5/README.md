# JuegoContador

En este proyecto construí una aplicación web con React, Vite y TypeScript para medir la mayor cantidad de clicks que una persona puede hacer en una ventana de 5 segundos. Además de desarrollar la aplicación, dejé documentado cómo fue evolucionando el proyecto, qué prompts utilicé, qué respuestas obtuve y qué conclusiones saqué sobre el proceso.

## Qué hice en este proyecto

Yo construí una web app que cumple con estos puntos:

- Inicio una ronda mostrando la secuencia `preparados`, `listos` y `ya`.
- Arranco el juego cuando aparece `ya`.
- Permito contar clicks durante una ventana exacta de 5 segundos.
- Comparo el resultado de la última ronda contra el récord actual.
- Persisto el récord en el navegador para no perderlo al recargar la página.
- Organicé el proyecto con una estructura separada por componentes, hooks, servicios, tipos y utilidades.

## Requisitos

- Yo necesito Node.js 18 o superior.
- Yo necesito npm 9 o superior.

## Instalación

1. Yo abro una terminal dentro de la carpeta del proyecto.
2. Yo ejecuto `npm install` para instalar las dependencias.

## Ejecución en desarrollo

1. Yo ejecuto `npm run dev`.
2. Yo abro en el navegador la URL que me muestra Vite, normalmente `http://localhost:5173`.

## Build de producción

- Yo ejecuto `npm run build` para generar la versión de producción en `dist/`.
- Yo ejecuto `npm run preview` para levantar una vista previa local del build generado.

## Funcionalidad actual

- El juego comienza con el récord en `0` si todavía no hay datos guardados.
- Al iniciar una ronda se muestra la secuencia `preparados`, `listos` y `ya`, con intervalos de 1 segundo.
- Cuando aparece `ya`, comienza una ventana de 5 segundos para sumar clicks.
- Al finalizar la ronda, el resultado se compara con el récord actual.
- Si la cantidad de clicks supera el récord anterior, el nuevo valor se guarda en el navegador.

## Evolución del proyecto

Yo dividí la evolución del proyecto en tres etapas claras.

### Etapa 1: creación del scaffold inicial

En esta etapa partí de un directorio vacío. Mi objetivo fue dejar una base funcional de React con Vite y TypeScript, con carpetas iniciales y archivos mínimos para poder continuar sin perder tiempo en estructura.

- Yo definí la base del proyecto con `package.json`, `tsconfig.json`, `vite.config.ts` e `index.html`.
- Yo creé la estructura inicial dentro de `src/`.
- Yo validé que el proyecto instalara dependencias y compilara correctamente.

### Etapa 2: implementación de JuegoContador

En esta etapa convertí la base en una aplicación real. Reemplacé archivos genéricos, puse nombres más descriptivos y desarrollé la lógica principal del juego.

- Yo eliminé los `index.ts` genéricos.
- Yo armé la pantalla principal y el componente del juego.
- Yo encapsulé la lógica en un hook específico.
- Yo agregué persistencia del récord con `localStorage`.
- Yo validé el flujo completo con build exitoso.

### Etapa 3: revisión de mantenibilidad y documentación

En esta etapa me concentré en revisar la calidad del código y la documentación. Ajusté detalles de mantenibilidad, ortografía y claridad general del README.

- Yo corregí una lectura innecesaria de `localStorage` en cada render.
- Yo normalicé textos visibles de la interfaz.
- Yo amplié la documentación de instalación, ejecución y funcionalidad.
- Yo dejé documentados riesgos residuales, especialmente la falta de tests automáticos.

## Historial de prompts y respuestas

En esta sección dejo los prompts principales que utilicé y las respuestas finales que obtuve, tomando como referencia el archivo `chatChatGPT5.json`.

### Prompt 1

Este fue el primer prompt que hice:

> Necesito que me empieces a hacer la estructura de un proyecto con React, primeramente me gustaría que puedas crearme las carpetas básicas con sus respectivos archivos. Todo esto en el directorio que te adjunto como contexto.

Esta fue la respuesta final que obtuve:

> Dejé armado el scaffold base de React en [ProyectoChatGPT5/package.json](ProyectoChatGPT5/package.json), usando Vite + TypeScript para que quede alineado con el otro proyecto del workspace. También quedaron creados los archivos de configuración principales en [ProyectoChatGPT5/index.html](ProyectoChatGPT5/index.html), [ProyectoChatGPT5/tsconfig.json](ProyectoChatGPT5/tsconfig.json) y [ProyectoChatGPT5/vite.config.ts](ProyectoChatGPT5/vite.config.ts).
>
> La estructura inicial de código ya está lista en [ProyectoChatGPT5/src/main.tsx](ProyectoChatGPT5/src/main.tsx), [ProyectoChatGPT5/src/App.tsx](ProyectoChatGPT5/src/App.tsx), [ProyectoChatGPT5/src/pages/Home.tsx](ProyectoChatGPT5/src/pages/Home.tsx) y las carpetas base dentro de [ProyectoChatGPT5/src](ProyectoChatGPT5/src): `assets`, `components`, `pages`, `hooks`, `services` y `utils`. También dejé [ProyectoChatGPT5/public/README.md](ProyectoChatGPT5/public/README.md) para fijar la carpeta `public` y [ProyectoChatGPT5/README.md](ProyectoChatGPT5/README.md) con una guía corta.
>
> Validé el proyecto ejecutando `npm install` y `npm run build`, y compila correctamente. Como nota aparte, `npm install` reportó 2 vulnerabilidades moderadas en dependencias transitivas según `npm audit`.
>
> Si quieres, lo siguiente más útil sería:
> 1. Agregarte una estructura de componentes más completa con `layout`, `common` y `features`.
> 2. Dejar configurado React Router desde ahora.
> 3. Preparar estilos base mejores, con CSS Modules o Sass según prefieras.

### Prompt 2

Este fue el segundo prompt que hice:

> Me pareció perfecto que hayas utilizado como contexto el otro directorio que es otro proyecto, aunque básicamente te iba a pedir lo mismo. Primeramente, me gustaría que vayas cambiando los nombres de los archivos TypeScript porque son todos "index.ts", y también crear el resto de archivos necesarios. Aparte de esto, la app se debe llamar "JuegoContador". Complétame el resto del proyecto, que es una webapp donde tenés que realizar un contador máximo de clicks que un usuario puede hacer en un rango de 5 segundos, donde se deben poder observar 2 botones: uno que inicia el juego, en el que al iniciarlo se deben poder observar 3 mensajes, que son "preparados", "listos" y "ya", con intervalos de 1 segundo entre cada uno menos el último; al decir "ya", el juego arranca. El otro debe ser el botón para contar la cantidad de clicks realizados. Obviamente, la web app debe inicializar con un récord en 0, y luego ir realizando la lógica de chequear si es que la última cantidad de clicks es superior al récord.

Esta fue la respuesta final que obtuve:

> Reorganicé el proyecto para que deje de depender de archivos genéricos y lo completé como la app JuegoContador. La base ahora queda montada sobre [ProyectoChatGPT5/src/pages/JuegoContadorPage.tsx](ProyectoChatGPT5/src/pages/JuegoContadorPage.tsx), [ProyectoChatGPT5/src/components/JuegoContador/JuegoContador.tsx](ProyectoChatGPT5/src/components/JuegoContador/JuegoContador.tsx) y [ProyectoChatGPT5/src/hooks/useJuegoContador.ts](ProyectoChatGPT5/src/hooks/useJuegoContador.ts). También dejé la persistencia del récord en [ProyectoChatGPT5/src/services/recordStorage.ts](ProyectoChatGPT5/src/services/recordStorage.ts), los tipos en [ProyectoChatGPT5/src/types/juegoContador.ts](ProyectoChatGPT5/src/types/juegoContador.ts) y las constantes en [ProyectoChatGPT5/src/utils/gameConstants.ts](ProyectoChatGPT5/src/utils/gameConstants.ts). Actualicé además [ProyectoChatGPT5/package.json](ProyectoChatGPT5/package.json), [ProyectoChatGPT5/index.html](ProyectoChatGPT5/index.html) y [ProyectoChatGPT5/README.md](ProyectoChatGPT5/README.md) para que el proyecto y la app se llamen JuegoContador.
>
> La app ya cumple el flujo que pediste: arranca con récord en 0 cuando no hay datos guardados, muestra la secuencia preparados, listos y ya con intervalos de 1 segundo, habilita el botón de clicks solo durante una ventana de 5 segundos y al terminar compara la ronda contra el récord anterior para actualizarlo si corresponde. También eliminé todos los `index.ts` dentro de `src` y los reemplacé por nombres descriptivos. Validé el resultado con `npm run build` y compiló correctamente.
>
> Si quieres, el siguiente paso natural sería:
> 1. Levantar el proyecto en desarrollo y hacer un ajuste visual fino de la UI.
> 2. Agregar tests para la lógica de [ProyectoChatGPT5/src/hooks/useJuegoContador.ts](ProyectoChatGPT5/src/hooks/useJuegoContador.ts).
> 3. Sumar un ranking o historial de partidas además del récord único.

### Prompt 3

Este fue el tercer prompt que hice:

> Necesito que ahora verifiques varias cosas, como por ejemplo si el código es mantenible y prolijo, aparte de que se deben mantener buenas prácticas de programación. También necesitaría que verifiques que dentro del #file:README.md esté bien detallado cómo instalar y ejecutar el proyecto, y también que no haya errores de ortografía.

Esta fue la respuesta final que obtuve:

> **Hallazgos**
> 1. Encontré un punto de mantenibilidad en [ProyectoChatGPT5/src/hooks/useJuegoContador.ts](ProyectoChatGPT5/src/hooks/useJuegoContador.ts): el hook leía localStorage en cada render y además repetía el tipo de estado del juego en línea. Ya lo corregí usando inicialización perezosa del estado y reutilizando el tipo compartido GameState.
> 2. El README estaba corto para alguien que llegue sin contexto: describía scripts, pero no dejaba tan claro requisitos, instalación, ejecución en desarrollo, build de producción y funcionalidad esperada. Ya quedó ampliado y corregido en [ProyectoChatGPT5/README.md](ProyectoChatGPT5/README.md).
> 3. Había varios detalles de ortografía y acentuación en textos visibles de la app, por ejemplo récord, cómo, última, más, está, cuántos y desafía. Ya quedaron ajustados en [ProyectoChatGPT5/src/components/JuegoContador/JuegoContador.tsx](ProyectoChatGPT5/src/components/JuegoContador/JuegoContador.tsx), [ProyectoChatGPT5/src/pages/JuegoContadorPage.tsx](ProyectoChatGPT5/src/pages/JuegoContadorPage.tsx), [ProyectoChatGPT5/src/components/layout/AppHeader.tsx](ProyectoChatGPT5/src/components/layout/AppHeader.tsx) y [ProyectoChatGPT5/src/components/layout/AppFooter.tsx](ProyectoChatGPT5/src/components/layout/AppFooter.tsx).
>
> Después de esas correcciones, no encontré errores de compilación ni problemas inmediatos de prolijidad estructural. La organización sigue siendo razonable: lógica separada en hook, persistencia aislada en servicio, tipos compartidos y componentes acotados por responsabilidad. También verifiqué el proyecto con npm run build y compila correctamente.
>
> Sobre el README, ahora sí quedó bien detallado para instalar y ejecutar: incluye requisitos, pasos de instalación, cómo correr el servidor de desarrollo, cómo generar el build y qué hace la aplicación. Como riesgo residual, lo principal que todavía falta para una base más sólida de buenas prácticas es cobertura de pruebas para la lógica temporal del juego en [ProyectoChatGPT5/src/hooks/useJuegoContador.ts](ProyectoChatGPT5/src/hooks/useJuegoContador.ts).
>
> Si quieres, el siguiente paso útil sería:
> 1. Agregar tests unitarios para la cuenta regresiva, la ventana de 5 segundos y la actualización del récord.
> 2. Preparar ESLint y Prettier para dejar la prolijidad verificada automáticamente en cada cambio.

## Cómo evalué el resultado

Yo considero que el proyecto quedó bien encaminado desde el punto de vista funcional y estructural. La aplicación cumple el objetivo principal, tiene una separación razonable de responsabilidades y fue validada con compilación correcta.

## Fortalezas que observé durante el proceso

Yo observé estas fortalezas de forma objetiva durante el desarrollo:

- Yo logré partir de un directorio vacío y convertirlo rápidamente en una base funcional.
- Yo aproveché el contexto del otro proyecto para no reinventar decisiones básicas de configuración.
- Yo ordené la lógica principal en un hook específico, lo que mejora la mantenibilidad.
- Yo separé persistencia, tipos y constantes para evitar mezclar responsabilidades.
- Yo verifiqué varias veces el estado del proyecto con compilación real y no solo por inspección visual.
- Yo corregí detalles de ortografía y claridad tanto en la interfaz como en la documentación.
- Yo mantuve una progresión razonable: primero estructura, después funcionalidad y por último revisión de calidad.

## Debilidades que observé durante el proceso

Yo también detecté estas debilidades o límites de forma objetiva:

- Yo no dejé tests automáticos implementados, y eso sigue siendo la principal deuda técnica.
- Yo hice varias mejoras de documentación después de la implementación, en lugar de acompañar todo el proceso desde el inicio.
- Yo dependí bastante del proyecto hermano como referencia inicial, lo cual aceleró el trabajo, pero también pudo sesgar algunas decisiones estructurales.
- Yo no incorporé todavía herramientas automáticas de control de estilo como ESLint y Prettier.
- Yo no documenté métricas de rendimiento ni escenarios de borde más complejos, como múltiples reinicios rápidos del juego o pruebas de accesibilidad más profundas.

## Qué aprendí de la evolución del proyecto

Yo confirmé varias cosas mientras avanzaba:

- Yo necesito una estructura base clara desde el inicio para no perder tiempo más adelante.
- Yo obtengo mejores resultados cuando separo lógica, presentación y persistencia desde el primer momento.
- Yo mejoro mucho la calidad final cuando reviso ortografía, documentación y mantenibilidad como una etapa propia.
- Yo no debería considerar terminado un proyecto así sin una capa mínima de tests automatizados.

## Estructura actual del proyecto

- `public/` contiene archivos estáticos públicos.
- `src/assets/` contiene recursos internos del proyecto.
- `src/components/` contiene los componentes de interfaz.
- `src/hooks/` contiene la lógica reutilizable del juego.
- `src/pages/` contiene la página principal.
- `src/services/` contiene la persistencia del récord.
- `src/types/` contiene tipos compartidos.
- `src/utils/` contiene constantes del juego.

## Comparación con Claude Sonnet 4.6

En paralelo a este proyecto, yo desarrollé la misma aplicación JuegoContador con Claude Sonnet 4.6 a través de GitHub Copilot. Esa comparación me sirvió para medir no solo la calidad del resultado final, sino también la cantidad de correcciones necesarias, el tipo de problemas que aparecieron y el contexto con el que trabajó cada modelo.

Antes de comparar, yo considero importante aclarar una diferencia de partida: con Claude Sonnet 4.6 arranqué prácticamente desde cero y con muy poco contexto previo del repositorio. Con GPT-5.4, en cambio, yo arranqué después, cuando ya tenía más contexto acumulado del workspace, del objetivo funcional y de la estructura que quería alcanzar. Por eso, yo no considero que la comparación sea completamente simétrica, aunque igualmente me resulta útil para evaluar el comportamiento de ambos modelos.

### Cantidad de iteraciones necesarias

Yo observé que con GPT-5.4 llegué al resultado funcional en menos iteraciones. En este proyecto resolví la estructura inicial, la implementación del juego y la revisión de calidad en tres grandes rondas de trabajo. En el caso de Claude Sonnet 4.6 necesité más iteraciones, porque aparecieron correcciones adicionales relacionadas con React Router, problemas de encoding, un ajuste del timing del countdown y la generación tardía de `vite-env.d.ts`.

### Uso del contexto disponible

Yo noté una diferencia importante en cómo se aprovechó el contexto. Con GPT-5.4, el modelo trabajó cuando yo ya había acumulado bastante información útil del proyecto y del repositorio vecino, lo que hizo más fácil tomar decisiones correctas desde el principio. Claude Sonnet 4.6 tuvo que construir mucho más desde una base menos informada, así que en ese caso hubo más decisiones tentativas y más necesidad de corrección posterior.

### Estructura del código

Yo vi que GPT-5.4 llegó antes a una separación más limpia entre responsabilidades. En este proyecto quedaron definidos desde temprano un hook dedicado para la lógica del juego, un servicio específico para persistir el récord y un archivo de tipos compartidos. En el recorrido con Claude Sonnet 4.6 también terminé con una estructura ordenada, pero me llevó más pasos depurarla y recortar elementos que no eran necesarios para el alcance real del challenge.

### Problemas detectados durante el desarrollo

Yo tuve con Claude Sonnet 4.6 algunos problemas concretos que no aparecieron acá con GPT-5.4: generación inicial de funcionalidades no pedidas, errores de encoding en Windows, un segundo extra en la cuenta regresiva y omisiones de soporte de tipos que después hubo que corregir. En este proyecto con GPT-5.4 también hubo ajustes posteriores, pero estuvieron más relacionados con refinamiento de mantenibilidad, ortografía y documentación que con fallas funcionales de base.

### Resultado final

Yo considero que los dos proyectos terminaron en un buen nivel general. Los dos llegaron a una aplicación funcional, con separación razonable de responsabilidades y una base válida para seguir creciendo. La diferencia principal que yo veo no está tanto en el resultado final, sino en el recorrido: con GPT-5.4 sentí un avance más directo, mientras que con Claude Sonnet 4.6 necesité más correcciones intermedias para llegar a un estado equivalente.

## Conclusión final

Yo considero que este proyecto evolucionó de manera ordenada y lógica. Empecé definiendo una base clara, después convertí esa base en la aplicación JuegoContador y finalmente revisé la calidad del código y de la documentación. El resultado me deja una aplicación funcional, clara y razonablemente prolija para seguir creciendo.

Yo también concluyo que este resultado hay que leerlo teniendo en cuenta el contexto con el que trabajé: con GPT-5.4 arranqué después y con bastante más información disponible sobre el workspace, el objetivo y las decisiones ya exploradas. Eso hizo que el proceso fuera más directo y que varias decisiones salieran mejor encaminadas desde el inicio.

Yo sigo viendo margen de mejora. Si quisiera llevar el proyecto a un estándar más sólido, mi siguiente paso sería agregar tests unitarios, validaciones automáticas de estilo y una documentación todavía más técnica sobre decisiones de implementación. Aun así, desde un punto de vista práctico, yo considero que esta versión ya cumple bien con el objetivo planteado y deja una base firme para continuar.
