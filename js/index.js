//---------- Código para los estilos de la página ----------//
const body = document.getElementById('body');
const modal = document.getElementById('modal');
const rules = document.getElementById('rules');
const cerrar = document.getElementById('cerrar');
const cerrar2 = document.getElementById('cerrar2');

// Eventos
rules.addEventListener('click', cambiarFondo);
cerrar.addEventListener('click', cerrarModalPC);
cerrar2.addEventListener('click', cerrarModalMovil);

// Cmbia el body al abrirse la ventana modal
function cambiarFondo(){
    if(modal.open){
        body.style.opacity = '0.2';
    } 
}

// Cierra la ventana modal del PC
function cerrarModalPC(){
    if(cerrar){
        body.style.opacity = '1';
    } 
    modal.close();
}

// Cierra la ventana modal del móvil
function cerrarModalMovil(){
    if(cerrar2){
        body.style.opacity = '1';
    } 
    modal.close();
}


//---------- Código para el juego ---------//
// Se llaman a las opciones de juego
const tijera = document.getElementById('tijera');
const papel = document.getElementById('papel');
const piedra = document.getElementById('piedra');
const lagarto = document.getElementById('lagarto');
const spock = document.getElementById('spock');

// Se llaman y se crean elementos para el juego
    // Puntuacion
const puntuacion = document.querySelector('.numero');
let contador = localStorage.getItem('contador') || 0;
function incrementarContador(){
    contador++;
    localStorage.setItem('contador', contador);
}

    // Tablero
const juego = document.querySelectorAll('.juego');
const resultado = document.querySelector('.resultadoJuego');
    // Jugada
const tablero = document.createElement('div');
const miJugada = document.createElement('img');
const jugadaOponente = document.createElement('img');
    // Titulo
const titulo = document.querySelector('.tituloJS');
const p1 = document.createElement('p');
const p2 = document.createElement('p');

    // Victoria / Derrota
const solucion = document.createElement('div');
const p3 = document.createElement('p');
const a = document.createElement('a');

// Opciones del oponente
let jugadaTijeras = 0;
let jugadaPapel = 1;
let jugadaPiedra = 2;
let jugadaLagarto = 3;
let jugadaSpock = 4;

// Se crean las imagenes aleatorias
let img = [
    {src: './doc/piedra-papel-tijera-lagarto-spoock/images/icon-scissors.svg', class: 'jugadaTijera2'},
    {src: './doc/piedra-papel-tijera-lagarto-spoock/images/icon-paper.svg', class: 'jugadaPapel2'},
    {src: './doc/piedra-papel-tijera-lagarto-spoock/images/icon-rock.svg', class: 'jugadaPiedra2'}, 
    {src: './doc/piedra-papel-tijera-lagarto-spoock/images/icon-lizard.svg', class: 'jugadaLagarto2'}, 
    {src: './doc/piedra-papel-tijera-lagarto-spoock/images/icon-spock.svg', class: 'jugadaSpock2'}
];

// Se saca una imagen aleatoria del array
let jugadaAleatoria = Math.floor(Math.random() * img.length);

// Eventos
juego.forEach(e => e.addEventListener('click', opcionesGenerales));

tijera.addEventListener('click', jugarTijera);
papel.addEventListener('click', jugarPapel);
piedra.addEventListener('click', jugarPiedra);
lagarto.addEventListener('click', jugarLagarto);
spock.addEventListener('click', jugarSpock);

// Funciones
function opcionesGenerales(e){
    // Se eliminan los elementos principales al elegir una opción de jugado
    switch(e.target.id){
        case 'tijera':
            document.getElementById('tijera').style.display = 'none';
            document.getElementById('papel').style.display = 'none';
            document.getElementById('piedra').style.display = 'none';
            document.getElementById('lagarto').style.display = 'none';
            document.getElementById('spock').style.display = 'none';
            document.getElementById('opciones').style.display = 'none';
            break;

        case 'papel':
            document.getElementById('tijera').style.display = 'none';
            document.getElementById('papel').style.display = 'none';
            document.getElementById('piedra').style.display = 'none';
            document.getElementById('lagarto').style.display = 'none';
            document.getElementById('spock').style.display = 'none';
            document.getElementById('opciones').style.display = 'none';
            break;

        case 'piedra':
            document.getElementById('tijera').style.display = 'none';
            document.getElementById('papel').style.display = 'none';
            document.getElementById('piedra').style.display = 'none';
            document.getElementById('lagarto').style.display = 'none';
            document.getElementById('spock').style.display = 'none';
            document.getElementById('opciones').style.display = 'none';
            break;

        case 'lagarto':
            document.getElementById('tijera').style.display = 'none';
            document.getElementById('papel').style.display = 'none';
            document.getElementById('piedra').style.display = 'none';
            document.getElementById('lagarto').style.display = 'none';
            document.getElementById('spock').style.display = 'none';
            document.getElementById('opciones').style.display = 'none';
            break;

        case 'spock':
            document.getElementById('tijera').style.display = 'none';
            document.getElementById('papel').style.display = 'none';
            document.getElementById('piedra').style.display = 'none';
            document.getElementById('lagarto').style.display = 'none';
            document.getElementById('spock').style.display = 'none';
            document.getElementById('opciones').style.display = 'none';
            break;
    }
}

//----- TIJERA -----//
function jugarTijera(){

    // Se añade clases y estilos a los elementos
    tablero.classList.add('jugada');

    // Se crea el título
    p1.classList.add('p1');
    p1.textContent = 'YOU PICKED';

    p2.classList.add('p2');
    p2.textContent = 'THE HOUSE PICKED';

    titulo.append(p1);
    titulo.append(p2);

    // Se crea la jugada que seleccione el usuario
    miJugada.src = './doc/piedra-papel-tijera-lagarto-spoock/images/icon-scissors.svg';
    miJugada.classList.add('jugadaTijera');

    // Se añade la jugada aleatoria 
    jugadaOponente.src = img[jugadaAleatoria].src;
    jugadaOponente.className = img[jugadaAleatoria].class;

    // Se añade la jugada al html
    tablero.append(miJugada);
    tablero.append(jugadaOponente);
    resultado.appendChild(tablero);

    // Se decide si gana, pierde o empata
    if(miJugada && jugadaAleatoria == jugadaPapel){
        p3.textContent = 'You win';
        a.textContent = 'PLAY AGAIN';
        incrementarContador();
    } else if(miJugada && jugadaAleatoria == jugadaLagarto){
        p3.textContent = 'You win';
        a.textContent = 'PLAY AGAIN';
        incrementarContador();
    } else if(miJugada && jugadaAleatoria == jugadaTijeras){
        p3.textContent = 'You tie';
        a.textContent = 'PLAY AGAIN';
    } else if(miJugada && jugadaAleatoria == jugadaSpock){
        p3.textContent = 'You lose';
        a.textContent = 'PLAY AGAIN';
    } else if(miJugada && jugadaAleatoria == jugadaPiedra){
        p3.textContent = 'You lose';
        a.textContent = 'PLAY AGAIN';
    }

    // Se muestra el mensaje de quien gana y quién pierde
    solucion.classList.add('solucion');
    p3.classList.add('p3');
    a.classList.add('ruta');
    a.setAttribute('href', './index.html');
    solucion.append(p3);
    solucion.append(a);

    tablero.appendChild(solucion);
}

//----- PAPEL -----//
function jugarPapel(){

    // Se añade clases y estilos a los elementos
    tablero.classList.add('jugada');

    // Se crea el título
    p1.classList.add('p1');
    p1.textContent = 'YOU PICKED';

    p2.classList.add('p2');
    p2.textContent = 'THE HOUSE PICKED';

    titulo.append(p1);
    titulo.append(p2);

    // Se crea la jugada que seleccione el usuario
    miJugada.src = './doc/piedra-papel-tijera-lagarto-spoock/images/icon-paper.svg';
    miJugada.classList.add('jugadaPapel');

    // Se añade la jugada aleatoria 
    jugadaOponente.src = img[jugadaAleatoria].src;
    jugadaOponente.className = img[jugadaAleatoria].class;

    // Se añade la jugada al html
    tablero.append(miJugada);
    tablero.append(jugadaOponente);
    resultado.appendChild(tablero);

    // Se decide si gana, pierde o empata
    if(miJugada && jugadaAleatoria == jugadaPiedra){
        p3.textContent = 'You win';
        a.textContent = 'PLAY AGAIN';
        agregarContador();
    } else if(miJugada && jugadaAleatoria == jugadaSpock){
        p3.textContent = 'You win';
        a.textContent = 'PLAY AGAIN';
        agregarContador();
    } else if(miJugada && jugadaAleatoria == jugadaPapel){
        p3.textContent = 'You tie';
        a.textContent = 'PLAY AGAIN';
    } else if(miJugada && jugadaAleatoria == jugadaTijeras){
        p3.textContent = 'You lose';
        a.textContent = 'PLAY AGAIN';
    } else if(miJugada && jugadaAleatoria == jugadaLagarto){
        p3.textContent = 'You lose';
        a.textContent = 'PLAY AGAIN';
    }

    // Se muestra el mensaje de quien gana y quién pierde
    solucion.classList.add('solucion');
    p3.classList.add('p3');
    a.classList.add('ruta');
    a.setAttribute('href', './index.html');
    solucion.append(p3);
    solucion.append(a);

    tablero.appendChild(solucion);
}
//----- PIEDRA -----//
function jugarPiedra(){

    // Se añade clases y estilos a los elementos
    tablero.classList.add('jugada');

    // Se crea el título
    p1.classList.add('p1');
    p1.textContent = 'YOU PICKED';

    p2.classList.add('p2');
    p2.textContent = 'THE HOUSE PICKED';

    titulo.append(p1);
    titulo.append(p2);

    // Se crea la jugada que seleccione el usuario
    miJugada.src = './doc/piedra-papel-tijera-lagarto-spoock/images/icon-rock.svg';
    miJugada.classList.add('jugadaPiedra');

    // Se añade la jugada aleatoria 
    jugadaOponente.src = img[jugadaAleatoria].src;
    jugadaOponente.className = img[jugadaAleatoria].class;

    // Se añade la jugada al html
    tablero.append(miJugada);
    tablero.append(jugadaOponente);
    resultado.appendChild(tablero);

    // Se decide si gana, pierde o empata
    if(miJugada && jugadaAleatoria == jugadaLagarto){
        p3.textContent = 'You win';
        a.textContent = 'PLAY AGAIN';
        agregarContador();
    } else if(miJugada && jugadaAleatoria == jugadaTijeras){
        p3.textContent = 'You win';
        a.textContent = 'PLAY AGAIN';
        agregarContador();
    } else if(miJugada && jugadaAleatoria == jugadaPiedra){
        p3.textContent = 'You tie';
        a.textContent = 'PLAY AGAIN';
    } else if(miJugada && jugadaAleatoria == jugadaPapel){
        p3.textContent = 'You lose';
        a.textContent = 'PLAY AGAIN';
    } else if(miJugada && jugadaAleatoria == jugadaSpock){
        p3.textContent = 'You lose';
        a.textContent = 'PLAY AGAIN';
    }

    // Se muestra el mensaje de quien gana y quién pierde
    solucion.classList.add('solucion');
    p3.classList.add('p3');
    a.classList.add('ruta');
    a.setAttribute('href', './index.html');
    solucion.append(p3);
    solucion.append(a);

    tablero.appendChild(solucion);
}

//----- LAGARTO -----//
function jugarLagarto(){

    // Se añade clases y estilos a los elementos
    tablero.classList.add('jugada');

    // Se crea el título
    p1.classList.add('p1');
    p1.textContent = 'YOU PICKED';

    p2.classList.add('p2');
    p2.textContent = 'THE HOUSE PICKED';

    titulo.append(p1);
    titulo.append(p2);

    // Se crea la jugada que seleccione el usuario
    miJugada.src = './doc/piedra-papel-tijera-lagarto-spoock/images/icon-lizard.svg';
    miJugada.classList.add('jugadaLagarto');

    // Se añade la jugada aleatoria 
    jugadaOponente.src = img[jugadaAleatoria].src;
    jugadaOponente.className = img[jugadaAleatoria].class;

    // Se añade la jugada al html
    tablero.append(miJugada);
    tablero.append(jugadaOponente);
    resultado.appendChild(tablero);

    // Se decide si gana, pierde o empata
    if(miJugada && jugadaAleatoria == jugadaSpock){
        p3.textContent = 'You win';
        a.textContent = 'PLAY AGAIN';
        agregarContador();
    } else if(miJugada && jugadaAleatoria == jugadaPapel){
        p3.textContent = 'You win';
        a.textContent = 'PLAY AGAIN';
        agregarContador();
    } else if(miJugada && jugadaAleatoria == jugadaLagarto){
        p3.textContent = 'You tie';
        a.textContent = 'PLAY AGAIN';
    } else if(miJugada && jugadaAleatoria == jugadaPiedra){
        p3.textContent = 'You lose';
        a.textContent = 'PLAY AGAIN';
    } else if(miJugada && jugadaAleatoria == jugadaTijeras){
        p3.textContent = 'You lose';
        a.textContent = 'PLAY AGAIN';
    }

    // Se muestra el mensaje de quien gana y quién pierde
    solucion.classList.add('solucion');
    p3.classList.add('p3');
    a.classList.add('ruta');
    a.setAttribute('href', './index.html');
    solucion.append(p3);
    solucion.append(a);

    tablero.appendChild(solucion);
}

//----- SPOCK -----//
function jugarSpock(){

    // Se añade clases y estilos a los elementos
    tablero.classList.add('jugada');

    // Se crea el título
    p1.classList.add('p1');
    p1.textContent = 'YOU PICKED';

    p2.classList.add('p2');
    p2.textContent = 'THE HOUSE PICKED';

    titulo.append(p1);
    titulo.append(p2);

    // Se crea la jugada que seleccione el usuario
    miJugada.src = './doc/piedra-papel-tijera-lagarto-spoock/images/icon-spock.svg';
    miJugada.classList.add('jugadaSpock');

    // Se añade la jugada aleatoria 
    jugadaOponente.src = img[jugadaAleatoria].src;
    jugadaOponente.className = img[jugadaAleatoria].class;

    // Se añade la jugada al html
    tablero.append(miJugada);
    tablero.append(jugadaOponente);
    resultado.appendChild(tablero);

    // Se decide si gana, pierde o empata
    if(miJugada && jugadaAleatoria == jugadaTijeras){
        p3.textContent = 'You win';
        a.textContent = 'PLAY AGAIN';
        agregarContador();
    } else if(miJugada && jugadaAleatoria == jugadaPiedra){
        p3.textContent = 'You win';
        a.textContent = 'PLAY AGAIN';
        agregarContador();
    } else if(miJugada && jugadaAleatoria == jugadaSpock){
        p3.textContent = 'You tie';
        a.textContent = 'PLAY AGAIN';
    } else if(miJugada && jugadaAleatoria == jugadaPapel){
        p3.textContent = 'You lose';
        a.textContent = 'PLAY AGAIN';
    } else if(miJugada && jugadaAleatoria == jugadaLagarto){
        p3.textContent = 'You lose';
        a.textContent = 'PLAY AGAIN';
    }

    // Se muestra el mensaje de quien gana y quién pierde
    solucion.classList.add('solucion');
    p3.classList.add('p3');
    a.classList.add('ruta');
    a.setAttribute('href', './index.html');
    solucion.append(p3);
    solucion.append(a);

    tablero.appendChild(solucion);
}

// Se imprime la puntuación del usuario
puntuacion.append(contador);