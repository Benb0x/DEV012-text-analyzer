# Analizador de texto

## Índice

* [Resumen](#Resumen)
* [Introducción](#Introducción)
* [Prototipo](#Prototipo)
* [Funcionalidades del proyecto](#Funcionalidades-del-proyecto)
* [Deploy](#Deploy)
* [Pruebas](#Pruebas)
* [Desarrolladores del proyecto](#Desarrolladores-del-proyecto)


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

## 4.  Funcionalidad de proyecto

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
![Desktop 2023 10 09 - 10 25 22 03 (1)](https://github.com/Benb0x/DEV012-text-analyzer/assets/144946997/5ddc7a40-f365-4a0e-87ad-22afced52d8e)

## Deploy

La aplicación se encuentra publicado a través de Github Pages, accesible a todo usuario: https://benb0x.github.io/DEV012-text-analyzer/

## 7. Pruebas

Este proyecto cuenta con 3 conjuntos de pruebas que te ayudarán a conocer si
cumples los criterios mínimos de acept

