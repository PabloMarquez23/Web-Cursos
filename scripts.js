document.addEventListener('DOMContentLoaded', () => {
    loadCursos();
});

function agregarCurso(event) {
    event.preventDefault();

    const materia = document.getElementById('nombre-materia').value;
    const profesor = document.getElementById('nombre-profesor').value;
    const fechaInicio = document.getElementById('start').value;
    const fechaFin = document.getElementById('end').value;

    const nuevoCurso = {
        materia,
        profesor,
        fechaInicio,
        fechaFin
    };

    // Guardar en localStorage
    let cursos = JSON.parse(localStorage.getItem('cursos')) || [];
    cursos.push(nuevoCurso);
    localStorage.setItem('cursos', JSON.stringify(cursos));

    // Mostrar el nuevo curso
    mostrarCurso(nuevoCurso);

    // Limpiar el formulario
    document.getElementById('curso-form').reset();
}

function mostrarCurso(curso) {
    const cursosSection = document.getElementById('lista-cursos');
    const cursoHTML = `
        <div>
            <p><strong>Nombre del curso:</strong> ${curso.materia}</p>
            <p>Profesor: ${curso.profesor}</p>
            <p>Fecha de inicio: ${curso.fechaInicio}</p>
            <p>Fecha de fin: ${curso.fechaFin}</p>
            <button class="boton-detalles">Ver más detalles</button>
        </div>
    `;
    cursosSection.innerHTML += cursoHTML;
}

function loadCursos() {
    const cursos = JSON.parse(localStorage.getItem('cursos')) || [];
    cursos.forEach(curso => mostrarCurso(curso));
}
