// Se ejecuta cuando el contenido del DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    loadCursos(); // Carga los cursos almacenados en localStorage al inicio
});

// Función para agregar un nuevo curso
function agregarCurso(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario

    // Obtiene los valores de los campos del formulario
    const materia = document.getElementById('nombre-materia').value;
    const profesor = document.getElementById('nombre-profesor').value;
    const fechaInicio = document.getElementById('start').value;
    const fechaFin = document.getElementById('end').value;
    const descripcion = document.getElementById('descripcion').value; // Obtener descripción

    // Crea un objeto para el nuevo curso
    const nuevoCurso = {
        materia,
        profesor,
        fechaInicio,
        fechaFin,
        descripcion // Agrega la descripción al objeto
    };

    // Guarda el nuevo curso en localStorage
    let cursos = JSON.parse(localStorage.getItem('cursos')) || []; // Obtiene los cursos existentes o inicializa un array vacío
    cursos.push(nuevoCurso); // Agrega el nuevo curso al array
    localStorage.setItem('cursos', JSON.stringify(cursos)); // Guarda el array actualizado en localStorage

    // Muestra el nuevo curso en la interfaz
    mostrarCurso(nuevoCurso);

    // Limpia el formulario después de agregar el curso
    document.getElementById('curso-form').reset();
}

// Función para mostrar un curso en la interfaz
function mostrarCurso(curso) {
    const cursosSection = document.getElementById('lista-cursos'); // Obtiene la sección donde se mostrarán los cursos
    const cursoHTML = `
        <div>
            <p><strong>Nombre del curso:</strong> ${curso.materia}</p> <!-- Muestra el nombre del curso -->
            <p>Profesor: ${curso.profesor}</p> <!-- Muestra el nombre del profesor -->
            <p>Fecha de inicio: ${curso.fechaInicio}</p> <!-- Muestra la fecha de inicio -->
            <p>Fecha de fin: ${curso.fechaFin}</p> <!-- Muestra la fecha de fin -->
            <button class="boton-detalles" onclick="toggleDetalles(this)">Ver más detalles</button> <!-- Botón para mostrar/ocultar detalles -->
            <div class="detalles" style="display: none;"> <!-- Div para detalles, oculto por defecto -->
                <p><strong>Descripción:</strong> ${curso.descripcion}</p> <!-- Muestra la descripción del curso -->
            </div>
        </div>
    `;
    cursosSection.innerHTML += cursoHTML; // Agrega el HTML del curso a la sección
}

// Función para cargar los cursos almacenados en localStorage al iniciar la aplicación
function loadCursos() {
    const cursos = JSON.parse(localStorage.getItem('cursos')) || []; // Obtiene los cursos del localStorage
    cursos.forEach(curso => mostrarCurso(curso)); // Muestra cada curso en la interfaz
}

// Función para alternar la visibilidad de los detalles de un curso
function toggleDetalles(button) {
    const detallesDiv = button.nextElementSibling; // Obtiene el div de detalles asociado al botón
    // Alterna la visibilidad del div de detalles
    detallesDiv.style.display = detallesDiv.style.display === 'none' ? 'block' : 'none';
}
