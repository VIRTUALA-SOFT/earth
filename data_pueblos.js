// data_pueblos.js
// Base de datos maestra de Pueblos Originarios
// Nota: Para llegar a 500 puntos exactos con precisión científica necesitarías una API real.
// Aquí usamos una lista curada de ~60 etnias mayores y generamos "Comunidades" (asentamientos) alrededor de ellas para poblar el mapa.

const etniasBase = [
  // --- AMÉRICA DEL SUR ---
  { id: "arhuaco", name: "Arhuaco", region: "Colombia (Sierra)", lat: 10.70, lon: -73.65, desc: "Guardianes de la Sierra Nevada." },
  { id: "kogui", name: "Kogi", region: "Colombia (Sierra)", lat: 10.90, lon: -73.80, desc: "Hermanos Mayores, viven en las tierras altas." },
  { id: "wiwa", name: "Wiwa", region: "Colombia (Sierra)", lat: 10.85, lon: -73.40, desc: "Conocidos por su música y tejidos de fique." },
  { id: "wayuu", name: "Wayuu", region: "Colombia/Venezuela", lat: 11.95, lon: -71.80, desc: "Gente de arena, sol y viento." },
  { id: "embera", name: "Emberá", region: "Colombia (Chocó)", lat: 5.80, lon: -76.80, desc: "Pueblo de río y selva húmeda." },
  { id: "misak", name: "Misak", region: "Colombia (Cauca)", lat: 2.65, lon: -76.40, desc: "Hijos del agua y el arcoíris." },
  { id: "nasa", name: "Nasa", region: "Colombia (Cauca)", lat: 2.90, lon: -76.50, desc: "Grandes luchadores por la tierra." },
  { id: "tikuna", name: "Tikuna", region: "Amazonas", lat: -3.80, lon: -70.10, desc: "Pueblo del agua, habitan el trapecio amazónico." },
  { id: "huitoto", name: "Huitoto", region: "Amazonas", lat: -1.20, lon: -73.00, desc: "Hijos de la coca y el tabaco." },
  { id: "nukak", name: "Nukak", region: "Guaviare", lat: 2.50, lon: -71.20, desc: "Últimos nómadas de la selva colombiana." },
  { id: "yanomami", name: "Yanomami", region: "Brasil/Venezuela", lat: 1.50, lon: -64.00, desc: "Habitantes del corazón de la selva." },
  { id: "kayapo", name: "Kayapó", region: "Brasil (Xingu)", lat: -7.50, lon: -52.00, desc: "Guerreros defensores del río Xingu." },
  { id: "guarani", name: "Guaraní", region: "Paraguay/Brasil/Argentina", lat: -25.00, lon: -55.00, desc: "Gran nación del sur, buscadores de la tierra sin mal." },
  { id: "mapuche", name: "Mapuche", region: "Chile/Argentina", lat: -38.50, lon: -72.00, desc: "Gente de la tierra, nunca conquistados." },
  { id: "aymara", name: "Aymara", region: "Bolivia/Perú", lat: -16.50, lon: -68.50, desc: "Pueblo de los Andes y el Altiplano." },
  { id: "quechua", name: "Quechua", region: "Perú/Ecuador", lat: -13.50, lon: -71.90, desc: "Descendientes del Imperio Inca." },
  { id: "shuar", name: "Shuar", region: "Ecuador", lat: -2.50, lon: -77.50, desc: "Pueblo de las cascadas sagradas." },
  { id: "ashaninka", name: "Asháninka", region: "Perú", lat: -11.00, lon: -74.00, desc: "El pueblo más numeroso de la Amazonía peruana." },

  // --- AMÉRICA DEL NORTE ---
  { id: "maya", name: "Maya", region: "México/Guatemala", lat: 19.00, lon: -89.00, desc: "Constructores de pirámides y observadores del tiempo." },
  { id: "nahuatl", name: "Nahua (Azteca)", region: "México", lat: 19.40, lon: -99.10, desc: "Herederos de Tenochtitlán." },
  { id: "zapoteco", name: "Zapoteco", region: "México (Oaxaca)", lat: 17.00, lon: -96.50, desc: "Gente de las nubes." },
  { id: "raramuri", name: "Rarámuri", region: "México (Chihuahua)", lat: 27.50, lon: -107.50, desc: "Los de los pies ligeros (Tarahumara)." },
  { id: "navajo", name: "Navajo (Diné)", region: "USA (Arizona)", lat: 36.00, lon: -110.00, desc: "El pueblo sagrado de los cañones." },
  { id: "cherokee", name: "Cherokee", region: "USA", lat: 35.50, lon: -83.50, desc: "Una de las naciones más grandes del norte." },
  { id: "lakota", name: "Lakota (Sioux)", region: "USA (Dakotas)", lat: 44.00, lon: -101.00, desc: "Guerreros de las grandes llanuras." },
  { id: "inuit", name: "Inuit", region: "Canadá/Alaska", lat: 68.00, lon: -100.00, desc: "Maestros del hielo y el ártico." },
  { id: "haida", name: "Haida", region: "Canadá (BC)", lat: 53.00, lon: -132.00, desc: "Gente del cedro y el salmón." },
  { id: "cree", name: "Cree", region: "Canadá", lat: 52.00, lon: -85.00, desc: "Cazadores de los bosques boreales." },

  // --- ÁFRICA ---
  { id: "tuareg", name: "Tuareg", region: "Sahara", lat: 20.00, lon: 5.00, desc: "Hombres azules del desierto." },
  { id: "berber", name: "Amazigh (Berber)", region: "Marruecos/Argelia", lat: 31.00, lon: -6.00, desc: "Hombres libres del norte de África." },
  { id: "dogon", name: "Dogon", region: "Malí", lat: 14.50, lon: -3.50, desc: "Poseedores de conocimientos astronómicos ancestrales." },
  { id: "yoruba", name: "Yoruba", region: "Nigeria", lat: 7.50, lon: 4.50, desc: "Cuna de tradiciones espirituales profundas." },
  { id: "maasai", name: "Maasai", region: "Kenia/Tanzania", lat: -1.50, lon: 36.00, desc: "Guerreros pastores de la sabana." },
  { id: "zulu", name: "Zulú", region: "Sudáfrica", lat: -28.50, lon: 31.50, desc: "El pueblo del cielo." },
  { id: "san", name: "San (Bosquimanos)", region: "Kalahari", lat: -22.00, lon: 20.00, desc: "Los primeros habitantes, cazadores-recolectores." },
  { id: "himba", name: "Himba", region: "Namibia", lat: -18.00, lon: 13.00, desc: "Famosos por su piel cubierta de ocre rojo." },
  { id: "ethiopian", name: "Oromo", region: "Etiopía", lat: 8.00, lon: 39.00, desc: "Pueblo cushita del cuerno de África." },

  // --- ASIA ---
  { id: "nenets", name: "Nenets", region: "Siberia (Rusia)", lat: 68.00, lon: 75.00, desc: "Pastores de renos del ártico ruso." },
  { id: "mongol", name: "Mongol", region: "Mongolia", lat: 47.00, lon: 103.00, desc: "Nómadas de la estepa eterna." },
  { id: "tibetan", name: "Tibetano", region: "Tíbet", lat: 31.00, lon: 89.00, desc: "Habitantes del techo del mundo." },
  { id: "uighur", name: "Uigur", region: "Xinjiang", lat: 41.00, lon: 85.00, desc: "Cultura milenaria de la ruta de la seda." },
  { id: "ainu", name: "Ainu", region: "Japón (Hokkaido)", lat: 43.00, lon: 142.00, desc: "Espíritus de la naturaleza del norte de Japón." },
  { id: "hmong", name: "Hmong", region: "Sudeste Asiático", lat: 19.00, lon: 101.00, desc: "Pueblo de las montañas." },
  { id: "karen", name: "Karen", region: "Tailandia/Myanmar", lat: 17.00, lon: 98.00, desc: "Expertos en la vida con elefantes y bosque." },
  { id: "bajau", name: "Bajau", region: "Malasia/Filipinas", lat: 5.00, lon: 119.00, desc: "Nómadas del mar." },
  { id: "sentinel", name: "Sentineleses", region: "Islas Andamán", lat: 11.55, lon: 92.23, desc: "Uno de los pueblos más aislados del mundo." },

  // --- OCEANÍA ---
  { id: "aboriginal", name: "Aborigen Australiano", region: "Australia", lat: -25.00, lon: 133.00, desc: "La cultura viva más antigua de la Tierra." },
  { id: "maori", name: "Maorí", region: "Nueva Zelanda", lat: -39.00, lon: 175.50, desc: "Guerreros y navegantes de Aotearoa." },
  { id: "papuan", name: "Papú", region: "Papúa Nueva Guinea", lat: -6.00, lon: 144.00, desc: "Diversidad lingüística única en el mundo." },
  { id: "samoan", name: "Samoano", region: "Samoa", lat: -13.80, lon: -171.70, desc: "Corazón de la Polinesia." },
  { id: "hawaiian", name: "Hawaiano", region: "Hawái", lat: 20.00, lon: -156.00, desc: "Navegantes de las estrellas." },

  // --- EUROPA (ARTICO) ---
  { id: "sami", name: "Sami", region: "Laponia (Escandinavia)", lat: 67.00, lon: 20.00, desc: "Pueblo del sol de medianoche." }
];

// FUNCIÓN GENERADORA: Expande las 50 etnias base en 500 comunidades
// Crea variaciones geográficas pequeñas alrededor del punto central
function generarPueblosMasivos() {
  const listaCompleta = [];
  let contador = 0;

  etniasBase.forEach(etnia => {
    // 1. Añadimos la etnia principal
    listaCompleta.push({
      ...etnia,
      uniqueId: etnia.id + "_main",
      isCapital: true // Para marcarla diferente visualmente si quieres
    });
    contador++;

    // 2. Generamos entre 5 y 12 "comunidades" cercanas para cada etnia
    // Esto simula que el pueblo no es un solo punto, sino una región habitada.
    const numComunidades = Math.floor(Math.random() * 8) + 5; 

    for (let i = 0; i < numComunidades; i++) {
      // Dispersión aleatoria (aprox 100-200km a la redonda)
      const dispersion = 1.5; // grados
      const latOffset = (Math.random() - 0.5) * dispersion;
      const lonOffset = (Math.random() - 0.5) * dispersion;
      
      listaCompleta.push({
        id: etnia.id, // Mismo ID de grupo para búsquedas
        uniqueId: `${etnia.id}_${i}`,
        name: `Comunidad ${etnia.name} ${i+1}`, // Ej: Comunidad Wayuu 4
        region: etnia.region,
        lat: etnia.lat + latOffset,
        lon: etnia.lon + lonOffset,
        desc: `Asentamiento tradicional del pueblo ${etnia.name}. ${etnia.desc}`,
        url: etnia.url || "#"
      });
      contador++;
    }
  });
  
  console.log(`Generados ${contador} registros de pueblos.`);
  return listaCompleta;
}

export const pueblosData = generarPueblosMasivos();
