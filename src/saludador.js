function saludar(nombre, hora, genero, edad, idioma) {
  const lang = (idioma || "ES").toUpperCase();

  // 1) determinar saludo base según hora e idioma
  let saludo = lang === "EN" ? "hello" : "hola";

  if (typeof hora === "number") {
    if (hora < 12)
      saludo = lang === "EN" ? "Good morning" : "Buenos días";
    else if (hora < 18)
      saludo = lang === "EN" ? "Good afternoon" : "Buenas tardes";
    else
      saludo = lang === "EN" ? "Good evening" : "Buenas noches";
  }

  // 2) título solo si edad > 30
  const usaTitulo = typeof edad === "number" && edad > 30;

  // 3) armar mensaje final
  if (nombre) {
    if (usaTitulo && genero === "M")
      return saludo + (lang === "EN" ? " Mr. " : " Sr. ") + nombre;

    if (usaTitulo && genero === "F")
      return saludo + (lang === "EN" ? " Mrs. " : " Sra. ") + nombre;

    return saludo + " " + nombre;
  }

  return saludo;
}

export default saludar;
