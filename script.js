const ramos = [
  ["Matemáticas I", "Fundamentos de Programación", "Electivo I", "Taller de Escritura", "Core: Escritura Argumentativa", "Electivo II"],
  ["Matemáticas II", "Estructura de Datos", "Economía I", "Contabilidad I", "Física I", "Electivo III"],
  ["Matemáticas III", "Bases de Datos", "Estadística", "Economía II", "Contabilidad II", "Física II"],
  ["Matemáticas IV", "Ingeniería de Software", "Investigación I", "Marketing", "Finanzas I", "Electivo IV"],
  ["Operaciones", "Investigación II", "Marketing II", "Finanzas II", "Core: Ética", "Electivo V"],
  ["Gestión de Proyectos", "Innovación", "Emprendimiento", "Electivo VI", "Electivo VII", "Electivo VIII"]
];

const contenedor = document.getElementById("malla");

ramos.forEach(semestre => {
  semestre.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.textContent = ramo;
    div.onclick = () => {
      div.classList.toggle("aprobado");
    };
    contenedor.appendChild(div);
  });
});
