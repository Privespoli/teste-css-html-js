
const elTitulo = document.getElementById('tituloPrincipal');
const botonTeste1 = document.getElementById('teste1');
const boton2 = document.getElementById('teste2');
const botonColor = document.getElementById('btnColor');
const botonReset = document.getElementById('btnResetColor');
const elCuadrado = document.getElementById('miCuadrado');
const imagenMagica = document.getElementById('imgParaOcultar');
const btnOcultar = document.getElementById('btnDesaparecer');
const btnMostrar = document.getElementById('btnAparecer');
const elParrafo = document.getElementById('parrafoTexto');
const botonGrande = document.getElementById('btnGrande');
const botonNormal = document.getElementById('btnNormal');
const elInput = document.getElementById('inputTexto');
const elSpan = document.getElementById('resultadoSpan');
const imgAnimal = document.getElementById('imagenAnimal');
const btnTransformar = document.getElementById('btnTransformar');
const btnResetAnimal = document.getElementById('btnResetAnimal');

const urlPerro = "https://cdn.sanity.io/images/5vm5yn1d/pro/5cb1f9400891d9da5a4926d7814bd1b89127ecba-1300x867.jpg?fm=webp&q=80";
const urlGato = "https://cataas.com/cat?width=300&height=300";

const btnUrlSi = document.getElementById('urlsi');
const btnUrlNo = document.getElementById('urlno');
const imagemHero = document.getElementById('imgHero'); 

const linkDaImagem = "https://png.pngtree.com/png-clipart/20240312/original/pngtree-pikachu-goes-to-party-png-image_14574513.png";


botonTeste1.addEventListener('click', () => {
    elTitulo.innerText = "Encendido";
    elTitulo.className = "display-4 fw-bold lh-1 texto-encendido"; 
});

boton2.addEventListener('click', () => {
    elTitulo.innerText = "Apagado";
    elTitulo.className = "display-4 fw-bold lh-1 texto-apagado"; 
});


btnUrlSi.addEventListener('click', () => {
    imagemHero.src = linkDaImagem;
    imagemHero.style.display = "block"; 
});

btnUrlNo.addEventListener('click', () => {
    imagemHero.src = "";
    imagemHero.style.display = "none"; 
});

botonColor.addEventListener('click', () => {
       elCuadrado.style.backgroundColor = "red";
});


botonReset.addEventListener('click', () => {
    elCuadrado.style.backgroundColor = "#dee2e6";
});

btnOcultar.addEventListener('click', () => {
      imagenMagica.style.display = "none";
});


btnMostrar.addEventListener('click', () => {
    imagenMagica.style.display = "block";
});

// 2. Evento para poner el texto a 50px
botonGrande.addEventListener('click', () => {
    // Importante: El valor debe ser un string y llevar "px"
    elParrafo.style.fontSize = "50px";
});

// 3. Evento para volver al tamaño original
botonNormal.addEventListener('click', () => {
    elParrafo.style.fontSize = "18px";
});

// 2. Escuchamos el evento 'change'
elInput.addEventListener('change', () => {
    // Tomamos el valor del input y lo ponemos en el span
    if (elInput.value.trim() !== "") {
        elSpan.innerText = elInput.value;
    } else {
        elSpan.innerText = "...esperando texto...";
    }
});

// 3. Evento para convertir en gato
btnTransformar.addEventListener('click', () => {
    imgAnimal.src = urlGato;
    imgAnimal.alt = "Gato"; // Es buena práctica cambiar también el texto alternativo
});

// 4. Evento para volver al perro
btnResetAnimal.addEventListener('click', () => {
    imgAnimal.src = urlPerro;
    imgAnimal.alt = "Perro";
});
