document.addEventListener('DOMContentLoaded', () => {
    loadCursos();
});

function agregarCurso(event) {
    event.preventDefault();

    const materia = document.getElementById('nombre-materia').value;
    const profesor = document.getElementById('nombre-profesor').value;
    const fechaInicio = document.getElementById('start').value;
    const fechaFin = document.getElementById('end').value;
    const descripcion = document.getElementById('descripcion').value; // Obtener descripción

    const nuevoCurso = {
        materia,
        profesor,
        fechaInicio,
        fechaFin,
        descripcion // Agregar descripción al objeto
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
            <button class="boton-detalles" onclick="toggleDetalles(this)">Ver más detalles</button>
            <div class="detalles" style="display: none;">
                <p><strong>Descripción:</strong> ${curso.descripcion}</p>
            </div>
        </div>
    `;
    cursosSection.innerHTML += cursoHTML;
}

function loadCursos() {
    const cursos = JSON.parse(localStorage.getItem('cursos')) || [];
    cursos.forEach(curso => mostrarCurso(curso));
}

function toggleDetalles(button) {
    const detallesDiv = button.nextElementSibling; // El siguiente elemento es el div de detalles
    detallesDiv.style.display = detallesDiv.style.display === 'none' ? 'block' : 'none';
}
