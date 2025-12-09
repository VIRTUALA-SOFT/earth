// data_pueblos.js

const etniasBase = [
  // --- AMÉRICA DEL SUR ---
  { 
    id: "arhuaco", 
    name: "Arhuaco", 
    region: "Colombia (Sierra Nevada)", 
    lat: 10.70, lon: -73.65, 
    // DESCRIPCIÓN AMPLIADA (PUNTO 4)
    desc: "Los Arhuacos son los guardianes de la Sierra Nevada de Santa Marta, a la que consideran el 'Corazón del Mundo'. Su filosofía se basa en la 'Ley de Origen', un mandato ancestral que les obliga a cuidar el equilibrio ecológico y espiritual del planeta. Creen que cada elemento de la naturaleza tiene vida y espíritu. Sus líderes espirituales, los Mamos, realizan pagamentos en sitios sagrados para mantener la armonía universal." 
  },
  { 
    id: "wayuu", 
    name: "Wayuu", 
    region: "La Guajira (Col/Ven)", 
    lat: 11.95, lon: -71.80, 
    desc: "Habitantes del desierto y el mar, los Wayuu son el pueblo indígena más numeroso de Colombia y Venezuela. Son conocidos mundialmente por sus tejidos coloridos, que representan sus pensamientos y sueños. Su sociedad se organiza en clanes matrilineales y su sistema de justicia se basa en la figura del 'Pütchipü'ü' o palabrero, quien resuelve conflictos mediante el diálogo y la compensación, reconocido como patrimonio inmaterial de la humanidad." 
  },
  { 
    id: "embera", 
    name: "Emberá", 
    region: "Chocó / Pacífico", 
    lat: 5.80, lon: -76.80, 
    desc: "El pueblo Emberá, habitantes de las selvas húmedas y las riberas de los ríos del Pacífico, se divide en Emberá Dobidá (gente de río) y Emberá Eyábida (gente de montaña). Son maestros en la construcción de tambos (viviendas elevadas) y en la navegación. Su cosmovisión está profundamente ligada a los espíritus de la selva (Jai), y utilizan la pintura corporal con jagua no solo como adorno, sino como protección espiritual y lenguaje social." 
  },
  // ... (Puedes agregar más bases aquí) ...
];

// Lógica de generación de puntos masivos
function generarPueblosMasivos() {
  const lista = [];
  etniasBase.forEach(etnia => {
    // 1. Principal
    lista.push({ ...etnia, uniqueId: etnia.id + "_main", type: 'main' });

    // 2. Satélites (Comunidades cercanas)
    const numComunidades = Math.floor(Math.random() * 8) + 5; 
    for (let i = 0; i < numComunidades; i++) {
      const dispersion = 1.8; 
      lista.push({
        id: etnia.id,
        uniqueId: `${etnia.id}_${i}`,
        name: `Comunidad ${etnia.name}`,
        region: etnia.region,
        lat: etnia.lat + (Math.random() - 0.5) * dispersion,
        lon: etnia.lon + (Math.random() - 0.5) * dispersion,
        desc: etnia.desc, // Heredan la descripción larga
        url: "#",
        type: 'village'
      });
    }
  });
  return lista;
}

// EXPORTAMOS LA DATA FINAL
export const pueblosData = generarPueblosMasivos();
