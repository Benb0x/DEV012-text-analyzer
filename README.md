# Analizador de texto

## Índice

* [Resumen](#Resumen)
* [Introducción](#Introducción)
* [Prototipo](#Prototipo)
* [Funcionalidad del proyecto](#Funcionalidad-del-proyecto)
* [Deploy](#Deploy)
* [Pruebas](#Pruebas)
* [Desarrolladora del proyecto](#Desarrolladora-del-proyecto)


## Resumen

Un analizador de texto es una herramienta que permite analizar un texto contando el número de frases, palabras y caracteres presentes.
Es útil para cualquier tipo de escritor que escribe textos con un determinado número mínimo y/o máximo de palabras. 
En este caso nos ayuda para conocer 6 métricas: 
cantidad de palabras, cantidad de caracteres, cantidad de caracteres excluyendo espacios y signos de puntuación, cantidad de cifras numéricas, la suma total de estos números y la longitud promedio de las palabras.


## Introducción
Vista del Analizador de texto desde un navegador web 
[![imagen-2023-10-09-015338079.png](https://i.postimg.cc/fR5M0kwG/imagen-2023-10-09-015338079.png)](https://postimg.cc/MncCC6f5)

El analizador de texto está conformado por 6 métricas que analizan y devuelven al usuario el valor de lo ingresa en el cuadro de testo ubicado abajo de las mismas.
También cuenta con un botón ubicado abajo del cuadro de texto que nos ayuda a limpiar todo lo que 
el usuario introduzca y a reiniciar los valores de nuestras métricas. 



## Prototipo
El proyecto inició con un prototipado creado en canva para poder estructurar a grandes rasgos como debería verse el proyecto final, aunque la idea inicial no refleja al cien por ciento el resultado, fue de gran utilidad al momento de empezar la parte de css.
[![texto.png](https://i.postimg.cc/15j0QpnX/texto.png)](https://postimg.cc/Xp9BKBg6)

## Funcionalidad del proyecto

1. La aplicación permite a la usuaria ingresar un texto escribiéndolo
en un cuadro de texto.

2. La aplicación calcular y actualiza en tiempo real:

    - **Recuento de palabras**: : La aplicación cuenta el número de palabras en el texto y muestra este recuento a la usuaria.
    - **Recuento de caracteres**: la aplicación cuenta el número de caracteres en el texto de entrada, incluidos espacios y signos de
    puntuación, y muestra este recuento a la usuaria.
    - **Recuento de caracteres excluyendo espacios y signos de puntuación**:
    la aplicación cuenta el número de caracteres en el texto de
    entrada, excluyendo espacios y signos de puntuación, y mostrar este recuento
    a la usuaria.
    - **Recuento de números**: la aplicación contabiliza los números encontados en el texto de entrada y muestra este recuento a la usuaria.
    - **Suma total de números**: la aplicación suma todos los números que
    hay en el texto de entrada y muestra el resultado a la usuaria.
    - **Longitud media de las palabras**: la aplicación calcula la
    longitud media de las palabras en el texto de entrada y la muestra a la usuaria.

3. La aplicación permite resetear tanto el cuadro de texto como las metricas al utilizar el boton "Borrar".

![1ccdbfbf-12c1-4895-9386-1c0b65997a96](https://github.com/Benb0x/DEV012-text-analyzer/assets/144946997/2d682532-8b17-4762-b0b1-6461ff243000)

![25953f87-98ba-41f8-87ca-614523d940cc](https://github.com/Benb0x/DEV012-text-analyzer/assets/144946997/fe40d03a-479d-4af6-86f8-85ab5d48f9f0)


## Deploy


La aplicación se encuentra publicado a través de Github Pages, accesible a todo usuario: https://benb0x.github.io/DEV012-text-analyzer/

## Pruebas
El proyecto debió pasar por diversas pruebas unitarias para validar que todos los requisitos mínimos de aceptación fuesen cumplidos.
Pruebas unitarias
Las pruebas unitarias de este proyecto ejecutan los métodos get.. correspondientes a cada métrica dentro del archivo analyzer.js con diferentes argumentos y se confirmará que los valores retornados sean los esperados. También se ejecutan guías de estilos para
verificar el HTML y JavaScript.

Esta prueba de ejecutó con npm run test en la terminal dentro de la carpeta del proyecto.

Pruebas de criterios mínimos de aceptación
En esta prueba se analizaron HTML, JS y CSS para verificar que se cumplió con los criterios minimos de aceptación.

Todas estas pruebas se ejecutaron con el comando npm run test:oas en la terminal dentro de la carpeta del proyecto. De igual forma se ejecutaron de manera individual con cada uno de los comandos a continuación:

npm run test:oas-html
npm run test:oas-css
npm run test:oas-web-api
npm run test:oas-js
Pruebas end-to-end
Una prueba end-to-end (E2E) es una técnica de prueba de software en la que se verifica el funcionamiento de todo el sistema desde el inicio hasta el final. En otras palabras, se prueba el flujo completo del software, simulando la interacción del usuario con la 
aplicación, para asegurarse de que todas las partes del sistema funcionan correctamente en conjunto.

Esta prueba se ejecutó a través del comando npm run test:e2e.

## Desarrolladora del proyecto

https://github.com/Benb0x



