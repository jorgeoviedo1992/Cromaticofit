function generarPlan() {
  let edad = parseInt(document.getElementById("edad").value);
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);
  let objetivo = document.getElementById("objetivo").value;

  let calorias = 0;

  // Calculo base
  let tmb = 10 * peso + 6.25 * altura - 5 * edad + 5;

  if (objetivo === "volumen") {
    calorias = tmb + 300;
  } else {
    calorias = tmb - 300;
  }

  let rutina = "";

  if (objetivo === "volumen") {
    rutina = `
      Día 1: Pecho + Triceps
      Día 2: Espalda + Biceps
      Día 3: Piernas
      Día 4: Hombro
    `;
  } else {
    rutina = `
      Día 1: Full Body
      Día 2: HIIT
      Día 3: Full Body
      Día 4: Cardio
    `;
  }

  let dieta = `
    Desayuno: Avena + huevos  
    Almuerzo: Pollo + arroz  
    Cena: Pescado + verduras  
    Snacks: Frutos secos
  `;

  document.getElementById("resultado").innerHTML = `
    <h2>Tu Plan Personalizado</h2>
    <p><b>Calorías:</b> ${calorias.toFixed(0)}</p>
    <p><b>Rutina:</b><br>${rutina}</p>
    <p><b>Dieta:</b><br>${dieta}</p>
  `;

  // Guardado local
  localStorage.setItem("plan", JSON.stringify({
    edad, peso, altura, objetivo, calorias
  }));
}