// Lista de animales con sus imágenes
const animales = [
    { nombre: "León", imagen: "imagenes/leon.jpg" },
    { nombre: "Tigre", imagen: "imagenes/tigre.jpg" },
    { nombre: "Elefante", imagen: "imagenes/elefante.jpg" },
    { nombre: "Cebra", imagen: "imagenes/cebra.jpg" },
    { nombre: "Gorila", imagen: "imagenes/gorila.jpg" },
    { nombre: "Puma", imagen: "imagenes/puma.jpg" },
    { nombre: "Águila", imagen: "imagenes/aguila.jpg" },
    { nombre: "Serpiente", imagen: "imagenes/serpiente.jpg" },
    { nombre: "Jaguar", imagen: "imagenes/jaguar.jpg" },
    { nombre: "Cocodrilo", imagen: "imagenes/cocodrilo.jpg" },
    { nombre: "Delfín", imagen: "imagenes/delfin.jpg" },
    { nombre: "Ballena", imagen: "ballena.jpg" },
    { nombre: "Tiburón", imagen: "imagenes/tiburon.jpg" },
    { nombre: "Oso", imagen: "imagenes/oso.jpg" },
    { nombre: "Canguro", imagen: "imagenes/canguro.jpg" },
    { nombre: "Pingüino", imagen: "imagenes/pinguino.jpg" },
    { nombre: "Lobo", imagen: "imagenes/lobo.jpg" },
    { nombre: "Jirafa", imagen: "imagenes/jirafa.jpg" },
    { nombre: "Rinoceronte", imagen: "imagenes/rinoceronte.jpg" },
    { nombre: "Hipopótamo", imagen: "imagenes/hipopotamo.jpg" },
    { nombre: "Camello", imagen: "imagenes/camello.jpg" },
    { nombre: "Caballo", imagen: "imagenes/caballo.jpg" },
    { nombre: "Llama", imagen: "imagenes/llama.jpg" },
    { nombre: "Oveja", imagen: "imagenes/oveja.jpg" },
    { nombre: "Perro", imagen: "imagenes/perro.jpg" },
    { nombre: "Gato", imagen: "imagenes/gato.jpg" },
    { nombre: "Zorro", imagen: "imagenes/zorro.jpg" },
    { nombre: "Búho", imagen: "imagenes/buho.jpg" },
    { nombre: "Tortuga", imagen: "imagenes/tortuga.jpg" },
    { nombre: "Ciervo", imagen: "imagenes/ciervo.jpg" },
    { nombre: "Murciélago", imagen: "imagenes/murcielago.jpg" },
    { nombre: "Mono", imagen: "imagenes/mono.jpg" }
];

// Crear una copia para los animales restantes
let animalesRestantes = [...animales];

// Elementos HTML
const resultadoDiv = document.getElementById("resultado");
const sorteoBtn = document.getElementById("sorteo-btn");

// Función para elegir un animal aleatorio sin repetir
function sortearAnimal() {
    if (animalesRestantes.length > 0) {
        const randomIndex = Math.floor(Math.random() * animalesRestantes.length);
        const ganador = animalesRestantes.splice(randomIndex, 1)[0]; // Elimina y devuelve el animal

        // Mostrar resultado
        resultadoDiv.innerHTML = `
            <p><strong>¡El ganador es: ${ganador.nombre}!</strong></p>
            <img src="${ganador.imagen}" alt="${ganador.nombre}">
            <p>Animales restantes: ${animalesRestantes.length}</p>
        `;

        // Mensaje de finalización
        if (animalesRestantes.length === 0) {
            resultadoDiv.innerHTML += "<p>Todos los animales han sido sorteados.</p>";
            sorteoBtn.disabled = true; // Desactivar botón
        }
    }
}

// Agregar evento al botón
sorteoBtn.addEventListener("click", sortearAnimal);
//prueba de cambio