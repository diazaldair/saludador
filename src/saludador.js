function saludar(nombre, hora, genero, edad, idioma) {
  const lang = (idioma || "ES").toUpperCase();

  // 1) Determinar saludo base según hora e idioma
  let saludo = lang === "EN" ? "Hello" : "hola";

  if (typeof hora === "number") {
    if (lang === "EN") {
      if (hora < 12) saludo = "Good morning";
      else if (hora < 18) saludo = "Good afternoon";
      else saludo = "Good night";
    } else {
      if (hora < 12) saludo = "Buenos días";
      else if (hora < 18) saludo = "Buenas tardes";
      else saludo = "Buenas noches";
    }
  }

  // 2) Título SOLO si edad > 30
  const usaTitulo = typeof edad === "number" && edad > 30;

  let titulo = "";
  if (usaTitulo) {
    if (lang === "EN") {
      if (genero === "M") titulo = "Mr. ";
      else if (genero === "F") titulo = "Mrs. ";
    } else {
      if (genero === "M") titulo = "Sr. ";
      else if (genero === "F") titulo = "Sra. ";
    }
  }

  // 3) Armar mensaje final
  if (nombre && nombre.trim() !== "") {
    return `${saludo} ${titulo}${nombre}`.trim();
  }

  return saludo;
}

export default saludar;
