OPCIONAL
crear un repositorio desde 0, es decir, proyecto nuevo, en donde colocaran un html basico con algunos elementos entre esos sera, una imagen cuyo src, este vacio, luego 2 botones el boton A) le agregara al SRC una url de alguna imagen de su seleccion el boton B) eliminara esa url del SRC 

“OBLIGATORIO”

#
El Reto
Lo que deben hacer (Lógica)
1)
El Interruptor
Crea un botón que, al hacerle clic, cambie el innerText de un <h1> de "Apagado" a "Encendido". 
2)
Camaleón
Haz que un botón cambie el style.backgroundColor de un <div> cuadrado a "red".
3)
Desaparecido
Al hacer clic en una imagen, camb ia su style.display a "none". ¡Desapareció!
4)
El Espejo
Usa un <input type="text">. Al escribir y salir del input (evento change), que el texto aparezca en un <span> de abajo.
5)
Súper Tamaño
Crea un botón que cambie el style.fontSize de un párrafo a "50px".

6)
Foto-Aventura
Ten una imagen de un perro. Al hacer clic en un botón, cambia el src de la imagen por la de un gato.
7
Borde Mágico
Haz que al pasar el ratón por encima de una caja (mouseover), esta gane un style.border grueso y verde.
8
Contador de Clics
(Necesitarás una variable fuera). Cada vez que toquen un botón, que el número dentro de un <p> sume +1.
9
Modo Alerta
Al hacer clic en un botón, usa alert() para mostrar el value de lo que el alumno escribió en un input.b
10
El Semáforo
Pon 3 botones (Rojo, Amarillo, Verde). Al tocar cada uno, que un círculo cambie a ese color específico.


Un consejo pedagógico para tu clase:
Diles que el HTML es el cuerpo, el CSS es la ropa y el JavaScript es el cerebro que da órdenes.
Para que no se frustren, recuérdales siempre la "Ruta del Éxito":
	•	Identificar: ¿A quién quiero atacar? (El id).
	•	Escuchar: ¿Qué tiene que pasar? (El click, input, mouseover).
	•	Actuar: ¿Qué propiedad voy a cambiar? (style, src, innerText).
 

Ejercicios:
	•	un html con 5 imágenes, que cada botón haga aparecer 1 imagen y ocultar a las demás.
	•	crear un input de tipo select y que según el valor de cada opcion del select (colores) pintar el body del color del select 
	•	crear botones que haga aparecer un video de youtube, cada botón mostrará un video diferente y hará desaparecer a los demas videos
	•	crear input y un botón, que el input sea de tipo texto, que al darle click al botón aparezca el texto en h1 en pantalla	
	•	hacer un contador de clicks, colocar un h1 que inicializa en 0 y un botón, cada que le des click al boton, el número se incremente en 1.


hacer un proyecto con 5 botones, cada boton al tener el EVENTO click debe hacer que el body se pinte de un color diferente.

¡Me encanta el entusiasmo! Si tus estudiantes están en ese nivel "embrionario" del desarrollo web, lo más importante es que vean resultados inmediatos. El DOM es como magia para un principiante: escribes una línea de código y algo cambia en la pantalla.
Aquí tienes 10 ejercicios nivel "Hola Mundo del DOM", enfocados en entender que el HTML es el cuerpo y JavaScript es el sistema nervioso.

🏗️ Ejercicios de Manipulación del DOM (Nivel Útero)
1. El Saludo Personalizado
Crea un input de texto y un button. Cuando el usuario escriba su nombre y haga clic en el botón, debe aparecer un mensaje debajo que diga: "¡Hola, [Nombre]!".
	•	Concepto: value, textContent.
2. El Interruptor de Luz
Crea un div cuadrado de 200px con un color de fondo gris. Añade un botón que, al pulsarlo, cambie el color del div a amarillo (encendido) y, al pulsarlo de nuevo, vuelva a gris (apagado).
	•	Concepto: style.backgroundColor, condicionales simples.
3. ¡Qué Grande!
Coloca un párrafo con un texto cualquiera. Crea dos botones: uno que diga "Aumentar" y otro "Disminuir". Al hacer clic, el tamaño de la fuente del párrafo debe subir o bajar.
	•	Concepto: 
4. Contador de Clics
Dibuja un número en la pantalla (un <span> o <h1>) que empiece en 0. Cada vez que el usuario haga clic en un botón, el número debe aumentar en 1.
	•	Concepto: Variables, innerText, incremento.
5. El Camaleón de Fondo
Crea tres botones: Rojo, Verde y Azul. Al hacer clic en cada uno, el color de fondo de toda la página (body) debe cambiar al color correspondiente.
	•	Concepto: document.body.style.
6. Desaparecer y Reaparecer
Crea una imagen y un botón. Al pulsar el botón, la imagen debe ocultarse. Al volver a pulsarlo, debe aparecer.
	•	Concepto: document.body.style.
7. Validar Password Corta
Haz un input de tipo password y un botón. Si el usuario escribe menos de 8 caracteres y da clic, muestra un mensaje en rojo que diga "¡Demasiado corta!". Si tiene 8 o más, que diga "¡Perfecto!" en verde.
	•	Concepto: value.length, manipulación de clases o colores.
8. Lista de la Compra Flash
Crea un input y un botón "Añadir". Al hacer clic, el texto del input debe agregarse como un nuevo elemento <li> dentro de una lista <ul> vacía que ya esté en el HTML.
	•	Concepto: createElement, appendChild.
9. Espejo de Texto
Crea un input. A medida que el usuario escribe (evento input), lo que escribe debe aparecer en tiempo real en un párrafo justo debajo.
	•	Concepto: Evento input.
10. Alerta de Formulario
Crea un formulario simple con dos campos. Si el usuario intenta enviarlo (botón submit) y los campos están vacíos, detén el envío y muestra una alerta que diga "¡Rellena todo!".
	•	Concepto: preventDefault(), validación básica.

💡 Un consejo para tus alumnos:
Diles que el DOM es como un árbol. JavaScript es el jardinero que puede cortar ramas (remove), plantar nuevas (createElement) o pintar las hojas de otro color (style).
¿Te gustaría que te prepare la solución de alguno de estos ejercicios para que la tengas de guía?

Bloque 1: Operaciones y Texto
1. El Saludo Personalizado
Reto: Capturar el nombre de un usuario desde un input y, al presionar un botón, mostrar en un h1: "¡Hola [nombre], bienvenido al código!".
	•	Tip: Usa document.getElementById('tuId').value para obtener lo que escribieron y concatena con el símbolo +.
2. Calculadora de Edad Canina
Reto: El usuario ingresa su edad humana en un input. Al darle clic a un botón, un párrafo debe decir: "Tu edad en años perrunos es: [edad * 7]".
	•	Tip: Recuerda que los valores de los inputs llegan como texto. Usa Number() o el operador + antes de multiplicar.
3. El Unificador de Nombres
Reto: Crea dos inputs (Nombre y Apellido). Al presionar un botón, muestra en un tercer elemento el nombre completo en mayúsculas.
	•	Tip: Investiga el método .toUpperCase() para transformar el texto después de concatenarlo

Bloque 2: Manipulación de Números y DOM
4. El Contador Simple
Reto: Ten un número (ej. "0") en un h2. Crea un botón que, cada vez que se toque, le sume 1 al número que ya está en pantalla.
	•	Tip: Primero guarda el valor actual del innerText en una variable, conviértelo a número, súmale 1 y luego vuelve a escribirlo en el DOM.
5. Calculadora de IVA
Reto: Pide un precio base. Al hacer clic, muestra en un elemento el precio del IVA (21%) y en otro el precio total final.
	•	Tip: Para el IVA, multiplica el valor por 0.21. Para el total, suma el valor original + el IVA calculado.
6. Conversor de Moneda Fijo
Reto: Crea un input donde se ingresen dólares. Al presionar un botón, muestra su equivalente en la moneda local (usa un tipo de cambio fijo que tú elijas).
	•	Tip: Define una variable const tipoDeCambio = ... al inicio de tu script para que sea fácil de mantener.

Bloque 3: Booleanos y Estados
7. El Interruptor de Texto
Reto: Tienes un h2 que dice "ENCENDIDO". Al presionar un botón, el texto debe cambiar a "APAGADO". (Solo debe funcionar una vez o alternar manualmente si se sienten valientes).
	•	Tip: Simplemente reasigna el innerText del elemento al valor opuesto del que tiene actualmente de forma manual.
8. Validador de Formulario (Visual)
Reto: Crea un input. Al presionar un botón, cambia el color de fondo del input a "verde" si el usuario escribió algo, o a "rojo" si está vacío.
	•	Tip: Aunque no sepan if, puedes decirles que usen elemento.style.backgroundColor = "color". Pídeles que simplemente prueben asignar un color fijo por ahora.

Bloque 4: Estilos y Variables de Medida
9. El Agrandador de Fuente
Reto: Crea un párrafo y un botón. Cada vez que se presione el botón, el tamaño de la letra del párrafo debe aumentar 5px.
	•	Tip: Necesitarás una variable global (fuera del evento) que guarde el tamaño actual (ej. let tamaño = 20;) y luego concatenar la unidad: tamaño + "px".
10. Mezclador de Colores RGB
Reto: Crea 3 inputs numéricos (R, G, B). Al presionar un botón, cambia el color de fondo de un div cuadrado usando esos valores.
	•	Tip: La propiedad de estilo es backgroundColor. Tendrás que concatenar un string complejo: "rgb(" + r + "," + g + "," + b + ")".



