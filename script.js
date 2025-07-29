const inicio = new Date("2023-07-29T14:00:00");

function atualizar() {
  const agora = new Date();

  // Calcular anos, meses e dias corretamente
  let anos = agora.getFullYear() - inicio.getFullYear();
  let meses = agora.getMonth() - inicio.getMonth();
  let dias = agora.getDate() - inicio.getDate();

  // Ajuste se o mês atual for antes do mês do início
  if (meses < 0 || (meses === 0 && dias < 0)) {
    anos--;
    meses += 12;
  }

  // Ajuste se o dia atual for menor que o dia do início
  if (dias < 0) {
    meses--;
    const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += mesAnterior.getDate();
  }

  // Calcular diferença de tempo restante (horas, minutos, segundos)
  const refData = new Date(
    inicio.getFullYear() + anos,
    inicio.getMonth() + meses,
    inicio.getDate() + dias,
    inicio.getHours(),
    inicio.getMinutes(),
    inicio.getSeconds()
  );
  const diff = agora - refData;

  const segundos = Math.floor(diff / 1000) % 60;
  const minutos = Math.floor(diff / 60000) % 60;
  const horas = Math.floor(diff / 3600000) % 24;

  // Atualiza HTML
  document.getElementById("anos").textContent = String(anos).padStart(2, '0');
  document.getElementById("meses").textContent = String(meses).padStart(2, '0');
  document.getElementById("dias").textContent = String(dias).padStart(2, '0');
  document.getElementById("horas").textContent = String(horas).padStart(2, '0');
  document.getElementById("minutos").textContent = String(minutos).padStart(2, '0');
  document.getElementById("segundos").textContent = String(segundos).padStart(2, '0');
}

setInterval(atualizar, 1000);
atualizar();

// Galeria
const fotos = [
  "fotos/foto1.jpg",
  "fotos/foto2.jpg",
  "fotos/foto3.jpg",
  "fotos/foto4.jpg",
  "fotos/foto5.jpg",
  "fotos/foto6.jpg",
  "fotos/foto7.jpg",
  "fotos/foto8.jpg",
  "fotos/foto9.jpg",
  "fotos/foto10.jpg",
  "fotos/foto11.jpg",
  "fotos/foto12.jpg"
];
let index = 0;
setInterval(() => {
  index = (index + 1) % fotos.length;
  document.getElementById("foto").src = fotos[index];
}, 4000);
