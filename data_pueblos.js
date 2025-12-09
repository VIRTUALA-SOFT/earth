// data_pueblos.js

const etniasBase = [
  // --- AMÉRICA DEL SUR ---
  { 
    id: "arhuaco", 
    name: "Arhuaco", 
    region: "Colombia (Sierra Nevada)", 
    lat: 10.70, lon: -73.65, 
    desc: "Conocidos como los 'Guardianes de la Sierra', los Arhuacos habitan los valles altos de la Sierra Nevada de Santa Marta. Su misión espiritual es mantener el equilibrio de la naturaleza a través de pagamentos y meditación. Son famosos por sus mochilas de lana virgen y su vestimenta blanca impecable que representa la pureza de la nieve." 
  },
  { 
    id: "wayuu", 
    name: "Wayuu", 
    region: "La Guajira (Col/Ven)", 
    lat: 11.95, lon: -71.80, 
    desc: "El pueblo del sol, la arena y el viento. Los Wayuu poseen una estructura social matrilineal compleja organizada en clanes. Son maestros tejedores; sus coloridas mochilas narran historias de su cosmogonía. Su sistema de justicia, guiado por el 'Pütchipü'ü' (palabrero), es reconocido como Patrimonio Inmaterial de la Humanidad." 
  },
  { 
    id: "embera", 
    name: "Emberá", 
    region: "Chocó / Pacífico", 
    lat: 5.80, lon: -76.80, 
    desc: "Habitantes de las selvas húmedas y riberas del Pacífico, se dividen en gente de río (Dobidá) y de montaña (Eyábida). Su conexión con los espíritus de la selva ('Jai') es profunda, manifestándose a través del chamanismo y la pintura corporal con jagua, usada como protección espiritual y lenguaje estético." 
  },
  { 
    id: "yanomami", 
    name: "Yanomami", 
    region: "Brasil/Venezuela (Amazonas)", 
    lat: 2.0, lon: -64.0, 
    desc: "Uno de los pueblos más grandes y relativamente aislados de América del Sur. Viven en grandes estructuras comunales circulares llamadas 'Shabono'. Su cosmovisión chamánica es intensa, utilizando el yopo para comunicarse con los espíritus 'xapiripë' y defender la selva de amenazas externas." 
  },
  { 
    id: "shuar", 
    name: "Shuar", 
    region: "Ecuador (Amazonía)", 
    lat: -2.5, lon: -78.0, 
    desc: "Históricamente conocidos como guerreros indomables que jamás fueron conquistados por el Imperio Inca ni por los españoles. Son famosos por la antigua práctica de la 'tzantza' (reducción de cabezas), un ritual cargado de significado espiritual para capturar el poder del alma." 
  },
  { 
    id: "aymara", 
    name: "Aymara", 
    region: "Bolivia/Perú (Andes)", 
    lat: -16.5, lon: -68.0, 
    desc: "Milenarios habitantes del Altiplano y las orillas del Lago Titicaca. Su cultura se basa en el principio de reciprocidad ('Ayni') y una fuerte conexión con la Pachamama. Son expertos en la agricultura de altura, textiles y han preservado su lengua y tradiciones a pesar de siglos de colonización." 
  },
  { 
    id: "guarani", 
    name: "Guaraní", 
    region: "Paraguay/Brasil", 
    lat: -24.0, lon: -56.0, 
    desc: "Una gran nación espiritual que busca constantemente la 'Tierra sin Mal' (Yvy Marã e'ỹ), un lugar de inmortalidad y abundancia. Su idioma es oficial en Paraguay y hablado por millones. Poseen un vasto conocimiento de la botánica medicinal y la selva atlántica." 
  },
  { 
    id: "mapuche_cl", 
    name: "Mapuche", 
    region: "Chile/Argentina", 
    lat: -38.0, lon: -72.0, 
    desc: "La 'Gente de la Tierra'. Resistieron ferozmente la expansión Inca y la colonización española durante siglos. Su espiritualidad está ligada a los ancestros y las fuerzas de la naturaleza (Ngen), con el árbol sagrado del Canelo y la Araucaria como pilares de su identidad." 
  },
  { 
    id: "kayapo", 
    name: "Kayapó", 
    region: "Brasil (Xingu)", 
    lat: -8.0, lon: -52.0, 
    desc: "Guerreros modernos y guardianes del Amazonas. Son reconocidos internacionalmente por su activismo ambiental contra la deforestación y las represas. Su estética corporal es impactante, utilizando pinturas negras complejas y grandes tocados de plumas amarillas y azules." 
  },
  { 
    id: "shipibo", 
    name: "Shipibo-Conibo", 
    region: "Perú (Ucayali)", 
    lat: -8.5, lon: -74.5, 
    desc: "Maestros del arte visionario. Su cultura gira en torno al uso de plantas sagradas como la Ayahuasca. Son mundialmente famosos por sus diseños geométricos 'Kené', que representan las líneas de energía del universo y las canciones curativas (Icaros) que ven durante el trance." 
  },
  { 
    id: "uruz", 
    name: "Uros", 
    region: "Perú (Titicaca)", 
    lat: -15.9, lon: -69.9, 
    desc: "El pueblo del lago. Viven en islas flotantes artificiales construidas por ellos mismos usando la planta de totora, sobre las aguas del lago navegable más alto del mundo. Se consideran a sí mismos dueños del lago y el agua, con un estilo de vida anfibio único." 
  },
  { 
    id: "onas", 
    name: "Selk'nam (Onas)", 
    region: "Tierra del Fuego", 
    lat: -54.0, lon: -68.0, 
    desc: "Cazadores nómadas del fin del mundo. Aunque sufrieron un genocidio trágico a principios del siglo XX, su legado visual perdura. Eran conocidos por su gran estatura y la ceremonia del 'Hain', donde los hombres pintaban sus cuerpos con diseños abstractos y usaban máscaras cónicas para representar espíritus." 
  },

  // --- AMÉRICA DEL NORTE ---
  { 
    id: "haida", 
    name: "Haida", 
    region: "Canadá (Haida Gwaii)", 
    lat: 53.0, lon: -132.0, 
    desc: "Maestros del cedro y el mar. Habitan el archipiélago de Haida Gwaii y son reconocidos por su arte monumental: tótems gigantes y canoas de guerra talladas. Su sociedad se basa en el 'Potlatch', una ceremonia compleja de intercambio de regalos y afirmación de estatus social." 
  },
  { 
    id: "cree", 
    name: "Cree", 
    region: "Canadá (Boreal)", 
    lat: 54.0, lon: -98.0, 
    desc: "Uno de los grupos de Primeras Naciones más grandes de Norteamérica. Cazadores expertos de los vastos bosques boreales. Su concepto de salud y vida gira en torno a la 'Miyupimaatisiiun' (vivir bien), manteniendo una relación respetuosa y recíproca con los animales que cazan." 
  },
  { 
    id: "blackfoot", 
    name: "Blackfoot (Siksika)", 
    region: "USA/Canadá (Llanuras)", 
    lat: 49.0, lon: -112.0, 
    desc: "Antiguos señores de las Grandes Llanuras. Su cultura estaba intrínsecamente ligada al bisonte, del cual obtenían todo lo necesario para vivir. Son conocidos por sus tipis pintados y la sagrada Danza del Sol, un ritual de renovación espiritual y sacrificio personal." 
  },
  { 
    id: "iroquois", 
    name: "Haudenosaunee", 
    region: "USA (Noreste)", 
    lat: 43.0, lon: -75.0, 
    desc: "La 'Gente de la Casa Larga'. Formaron una de las democracias participativas más antiguas del mundo, la Confederación Iroquesa, que inspiró en parte la constitución de los EE.UU. Su sociedad es matrilineal, donde las mujeres tienen un poder político y espiritual central." 
  },
  { 
    id: "hopi", 
    name: "Hopi", 
    region: "USA (Arizona)", 
    lat: 35.8, lon: -110.5, 
    desc: "El 'Pueblo Pacífico'. Viven en algunas de las aldeas habitadas más antiguas de Norteamérica. Son agricultores del desierto y poseen una cosmología profunda centrada en los Kachinas, espíritus mensajeros que traen la lluvia y mantienen la armonía del mundo." 
  },
  { 
    id: "tlingit", 
    name: "Tlingit", 
    region: "Alaska", 
    lat: 58.0, lon: -134.0, 
    desc: "Cultura rica de la costa noroeste. Famosos por su arte heráldico, mantas Chilkat y tótems que cuentan la historia de sus clanes (Cuervo y Águila). Poseen una tradición oral compleja y un sistema legal sofisticado basado en la compensación y el honor." 
  },
  { 
    id: "raramuri_mx", 
    name: "Rarámuri", 
    region: "México (Chihuahua)", 
    lat: 27.5, lon: -107.5, 
    desc: "Los de los 'pies ligeros'. Habitantes de las profundas Barrancas del Cobre, son corredores de resistencia legendarios. Para ellos, correr no es un deporte, sino una forma de oración y conexión espiritual. Viven en comunidades dispersas, manteniendo celosamente sus tradiciones ancestrales." 
  },
  { 
    id: "zapotec", 
    name: "Zapoteco", 
    region: "México (Oaxaca)", 
    lat: 17.0, lon: -96.5, 
    desc: "La 'Gente de las Nubes' (Be'ena' Za'a). Constructores de la magnífica ciudad de Monte Albán. Desarrollaron uno de los primeros sistemas de escritura y calendarios de Mesoamérica. Hoy en día, son famosos por sus coloridos festivales como la Guelaguetza y su exquisita artesanía textil." 
  },
  { 
    id: "mixtec", 
    name: "Mixteco", 
    region: "México (Oaxaca)", 
    lat: 17.2, lon: -97.5, 
    desc: "El 'Pueblo de la Lluvia'. Fueron los orfebres más hábiles del México antiguo, creando joyas de oro y turquesa incomparables. También son conocidos por sus códices pictográficos, libros de piel de venado que narran la historia genealógica y mítica de sus reyes y dioses." 
  },
  { 
    id: "huichol", 
    name: "Wixárika", 
    region: "México (Sierra Madre)", 
    lat: 22.0, lon: -104.0, 
    desc: "Uno de los pocos pueblos que ha mantenido su cosmogonía casi intacta. Son famosos por sus peregrinaciones al desierto sagrado de Wirikuta para recolectar el peyote (Hikuri), que consideran un venado azul sagrado. Su arte con chaquira y estambre es una representación visual de sus visiones." 
  },

  // --- AMÉRICA CENTRAL Y CARIBE ---
  { 
    id: "kuna", 
    name: "Guna Yala", 
    region: "Panamá", 
    lat: 9.5, lon: -79.0, 
    desc: "Habitantes del archipiélago de San Blas. Lograron una autonomía política única tras una revolución en 1925. Las mujeres son famosas por las 'Molas', textiles intrincados de capas de tela inversa. Creen en la igualdad de género y en la protección absoluta de 'Nabgwana' (la Madre Tierra)." 
  },
  { 
    id: "taimo", 
    name: "Taíno", 
    region: "Caribe (Antillas)", 
    lat: 19.0, lon: -70.0, 
    desc: "El pueblo originario principal del Caribe, primeros en encontrar a Colón. Inventores de la hamaca, la barbacoa y cultivadores expertos de yuca. Aunque sufrieron un colapso demográfico, su legado genético y cultural vive en los habitantes actuales del Caribe." 
  },
  { 
    id: "garifuna", 
    name: "Garífuna", 
    region: "Honduras/Belice", 
    lat: 15.8, lon: -87.5, 
    desc: "Una cultura única nacida del mestizaje entre indígenas Arawak/Caribes y africanos. Su lengua, danza (Punta) y música son Patrimonio de la Humanidad. Viven en la costa caribeña, dedicados a la pesca y la agricultura, manteniendo una fuerte conexión con sus ancestros a través del ritual Dugu." 
  },
  { 
    id: "bribri", 
    name: "Bribri", 
    region: "Costa Rica", 
    lat: 9.5, lon: -83.0, 
    desc: "Habitantes de las montañas de Talamanca. Su estructura social es matrilineal y clánica. Consideran el cacao como una planta sagrada entregada por Sibö (Dios) y lo utilizan en ceremonias de purificación y curación. Viven en casas cónicas tradicionales que representan el universo." 
  },
  { 
    id: "kekchi", 
    name: "Q'eqchi'", 
    region: "Guatemala", 
    lat: 15.5, lon: -90.0, 
    desc: "Uno de los grupos mayas más grandes y dispersos. Son guardianes de las montañas y las cuevas, a las que consideran entradas al inframundo sagrado. Han logrado preservar su idioma y rituales agrícolas a pesar de siglos de desplazamiento y conflicto." 
  },

  // --- EUROPA ---
  { 
    id: "sami", 
    name: "Sámi", 
    region: "Laponia (Norte Europa)", 
    lat: 68.0, lon: 22.0, 
    desc: "El único pueblo indígena reconocido de la Unión Europea. Pastores de renos nómadas que habitan la región de Sápmi. Su cultura se distingue por el 'Joik', uno de los estilos de canto más antiguos de Europa, y su colorida vestimenta tradicional (Gákti) que indica el origen familiar." 
  },
  { 
    id: "basque", 
    name: "Vasco (Euskaldunak)", 
    region: "España/Francia", 
    lat: 43.0, lon: -2.5, 
    desc: "Poseedores de una de las lenguas más antiguas y misteriosas de Europa (Euskera), sin relación con ninguna otra familia lingüística. Históricamente balleneros y navegantes, tienen una profunda conexión con sus caseríos rurales y tradiciones mitológicas pre-cristianas." 
  },
  { 
    id: "nenets", 
    name: "Nenets", 
    region: "Rusia (Siberia)", 
    lat: 69.0, lon: 70.0, 
    desc: "Guardianes del Ártico siberiano. Realizan migraciones épicas de miles de kilómetros cada año con sus enormes manadas de renos a través de la tundra congelada. Viven en tiendas cónicas llamadas 'Chum' y han sobrevivido a temperaturas extremas durante milenios." 
  },

  // --- ÁFRICA ---
  { 
    id: "san", 
    name: "San (Bosquimanos)", 
    region: "Kalahari", 
    lat: -22.0, lon: 22.0, 
    desc: "Poseen el linaje genético más antiguo de la humanidad moderna. Famosos por su lenguaje de chasquidos y su increíble habilidad para el rastreo. Son autores de miles de pinturas rupestres y poseen una cosmovisión igualitaria basada en compartir recursos y la danza curativa." 
  },
  { 
    id: "tuareg", 
    name: "Tuareg", 
    region: "Sahara", 
    lat: 22.0, lon: 8.0, 
    desc: "Los 'Hombres Azules' del desierto, llamados así por el tinte índigo de sus velos (Tagelmust). Nómadas comerciantes que han cruzado el Sahara durante siglos. Su sociedad es tradicionalmente matrilineal y poseen su propio alfabeto antiguo, el Tifinagh." 
  },
  { 
    id: "dogon", 
    name: "Dogon", 
    region: "Malí", 
    lat: 14.5, lon: -3.5, 
    desc: "Viven en los impresionantes acantilados de Bandiagara. Son famosos mundialmente por su compleja cosmogonía y conocimientos astronómicos, especialmente sobre la estrella Sirio, que describieron antes de la astronomía moderna. Sus máscaras rituales son obras maestras del arte africano." 
  },
  { 
    id: "maasai", 
    name: "Maasai", 
    region: "Kenia/Tanzania", 
    lat: -2.0, lon: 36.5, 
    desc: "Guerreros y pastores icónicos de la sabana africana. Para ellos, el ganado es sagrado y regalo directo de Dios (Enkai). Son conocidos por sus mantas rojas (Shuka), sus joyas de cuentas intrincadas y la danza 'Adumu', donde los guerreros saltan verticalmente para demostrar fuerza." 
  },
  { 
    id: "himba", 
    name: "Himba", 
    region: "Namibia", 
    lat: -18.0, lon: 13.0, 
    desc: "Pueblo seminómada famoso porque sus mujeres cubren su piel y cabello con 'otjize', una pasta de manteca y ocre rojo. Esto las protege del sol y simboliza la esencia de la tierra y la sangre. Mantienen el fuego sagrado de los ancestros siempre encendido en el centro de la aldea." 
  },
  { 
    id: "yoruba", 
    name: "Yoruba", 
    region: "Nigeria", 
    lat: 7.5, lon: 4.5, 
    desc: "Una de las etnias más grandes y urbanizadas históricamente en África. Creadores de las famosas cabezas de bronce de Ife. Su religión, centrada en los Orishas, ha influido profundamente en las culturas de América (Santería, Candomblé) debido a la diáspora." 
  },
  { 
    id: "zulu", 
    name: "Zulú", 
    region: "Sudáfrica", 
    lat: -29.0, lon: 31.0, 
    desc: "El 'Pueblo del Cielo'. Forjaron un poderoso imperio militar en el siglo XIX bajo el rey Shaka. Son conocidos por su intrincado trabajo con cuentas, que sirve como lenguaje visual, y su filosofía de 'Ubuntu' (yo soy porque nosotros somos)." 
  },
  { 
    id: "ethiopian", 
    name: "Oromo", 
    region: "Etiopía", 
    lat: 8.0, lon: 39.0, 
    desc: "El grupo étnico más grande del Cuerno de África. Desarrollaron el 'Gadaa', un sistema democrático de gobierno sociopolítico complejo organizado en generaciones, inscrito por la UNESCO como patrimonio de la humanidad. Tienen una rica tradición de poesía oral." 
  },
  { 
    id: "berber", 
    name: "Amazigh", 
    region: "Norte de África", 
    lat: 32.0, lon: -5.0, 
    desc: "Los 'Hombres Libres'. Habitantes indígenas del norte de África desde antes de los romanos. Abarcan desde las montañas del Atlas hasta los oasis del desierto. Son famosos por sus alfombras tejidas con símbolos protectores y su arquitectura de adobe (Kasbahs)." 
  },

  // --- ASIA ---
  { 
    id: "ainu", 
    name: "Ainu", 
    region: "Japón (Hokkaido)", 
    lat: 43.5, lon: 142.5, 
    desc: "Pueblo indígena del norte de Japón y Rusia. Su cultura animista venera a los 'Kamuy' (espíritus), siendo el oso el más sagrado. Tienen características físicas distintas y un idioma aislado. Las mujeres tradicionalmente se tatuaban los labios al llegar a la adultez." 
  },
  { 
    id: "mongol", 
    name: "Mongol", 
    region: "Mongolia", 
    lat: 47.0, lon: 104.0, 
    desc: "Nómadas de las estepas eternas. Su cultura gira en torno al caballo y la vida en el 'Ger' (yurta). Son herederos del imperio terrestre más grande de la historia. Famosos por su canto de garganta (Khoomei) y su hospitalidad inquebrantable en climas extremos." 
  },
  { 
    id: "tibetan", 
    name: "Tibetano", 
    region: "Tíbet", 
    lat: 30.0, lon: 90.0, 
    desc: "Habitantes del 'Techo del Mundo'. Han desarrollado una adaptación genética única para vivir a gran altitud. Su cultura está profundamente impregnada por el budismo tibetano, con sus monasterios, banderas de oración y la reverencia al Dalai Lama." 
  },
  { 
    id: "hmong", 
    name: "Hmong", 
    region: "Sudeste Asiático", 
    lat: 19.5, lon: 102.0, 
    desc: "Un pueblo de las montañas con una larga historia de migración y búsqueda de independencia. Son maestros en el arte textil, especialmente el batik y los 'Story Cloths', telas bordadas que narran su historia, leyendas y la vida cotidiana." 
  },
  { 
    id: "bedouin", 
    name: "Beduino", 
    region: "Oriente Medio", 
    lat: 28.0, lon: 40.0, 
    desc: "Los habitantes del desierto por excelencia. Históricamente pastores nómadas de camellos y cabras. Se rigen por un estricto código de honor y hospitalidad; un huésped es sagrado en su tienda. Poseen una rica tradición de poesía oral recitada bajo las estrellas." 
  },
  { 
    id: "bajau", 
    name: "Bajau", 
    region: "Malasia/Filipinas", 
    lat: 5.0, lon: 120.0, 
    desc: "Los 'Gitanos del Mar'. Han vivido en casas flotantes o sobre pilotes durante siglos. Han desarrollado adaptaciones genéticas (bazos más grandes) que les permiten bucear a grandes profundidades por largos periodos para pescar, caminando literalmente bajo el agua." 
  },
  { 
    id: "sentinel", 
    name: "Sentineleses", 
    region: "Islas Andamán", 
    lat: 11.5, lon: 92.2, 
    desc: "El pueblo más aislado del planeta. Viven en la isla Sentinel del Norte y rechazan violentamente cualquier contacto con el mundo exterior. Su estilo de vida cazador-recolector se ha mantenido intacto durante miles de años, siendo un misterio fascinante para la antropología." 
  },
  { 
    id: "chukchi", 
    name: "Chukchi", 
    region: "Rusia (Siberia)", 
    lat: 66.0, lon: 175.0, 
    desc: "Pueblo indígena del extremo noreste de Asia, cerca de Alaska. Se dividen en pastores de renos del interior y cazadores de mamíferos marinos de la costa. Son conocidos por su resistencia legendaria al frío y por haber resistido la conquista rusa durante siglos." 
  },
  { 
    id: "karen", 
    name: "Karen", 
    region: "Tailandia/Birmania", 
    lat: 18.0, lon: 98.0, 
    desc: "Grupo étnico diverso de las colinas. Son tradicionalmente agricultores de rotación y expertos entrenadores de elefantes (mahouts). Un subgrupo, los Kayan, es famoso por sus mujeres que usan anillos de latón en el cuello como símbolo de belleza e identidad cultural." 
  },

  // --- OCEANÍA ---
  { 
    id: "aborigine", 
    name: "Aborigen Australiano", 
    region: "Australia", 
    lat: -25.0, lon: 133.0, 
    desc: "La cultura viva continua más antigua de la Tierra (más de 65,000 años). Su concepto del 'Dreamtime' explica la creación del mundo y la ley sagrada. Tienen una conexión espiritual inquebrantable con el territorio ('Country') y usaban 'Songlines' (mapas cantados) para navegar el continente." 
  },
  { 
    id: "maori", 
    name: "Maorí", 
    region: "Nueva Zelanda", 
    lat: -39.0, lon: 176.0, 
    desc: "Tangata Whenua, la gente de la tierra. Guerreros y navegantes polinesios que desarrollaron una cultura compleja en Aotearoa. Famosos por el 'Haka' (danza de guerra), el arte del tallado en madera y el 'Tā moko', tatuajes faciales que cuentan la historia del linaje de la persona." 
  },
  { 
    id: "papuan", 
    name: "Papúes", 
    region: "Papúa Nueva Guinea", 
    lat: -6.0, lon: 145.0, 
    desc: "Habitantes de una de las regiones más diversas del planeta, con más de 800 lenguas distintas. Muchas tribus de las tierras altas no tuvieron contacto con el mundo exterior hasta 1930. Son famosos por sus elaboradas decoraciones corporales y las ceremonias 'Sing-sing'." 
  },
  { 
    id: "hawaiian", 
    name: "Kanaka Maoli", 
    region: "Hawái", 
    lat: 20.0, lon: -156.0, 
    desc: "Descendientes de grandes navegantes que cruzaron el Pacífico guiándose por las estrellas. Su cultura se centra en el 'Aloha' (amor/espíritu) y el cuidado de la tierra ('Malama 'Aina'). El Hula no es solo danza, es un archivo histórico viviente de sus genealogías y mitos." 
  },
  { 
    id: "samoan", 
    name: "Samoano", 
    region: "Samoa", 
    lat: -13.8, lon: -172.0, 
    desc: "El corazón de la Polinesia tradicional. Se rigen por el 'Fa'a Samoa' (la manera samoana), un código de conducta centrado en la familia y el respeto a los mayores. Los hombres se someten al 'Pe'a', un tatuaje tradicional doloroso que cubre desde la cintura hasta las rodillas." 
  },
  { 
    id: "fijian", 
    name: "Fiyiano", 
    region: "Fiyi", 
    lat: -18.0, lon: 178.0, 
    desc: "Una cultura única que mezcla influencias melanesias y polinesias. Organizados en una fuerte jerarquía de jefes. Son famosos por su ceremonia del Kava (Yaqona), una bebida social y sagrada, y por ser constructores de las canoas de guerra más rápidas del Pacífico." 
  },
  // --- AMÉRICA DEL NORTE (ADICIONALES) ---
  { 
    id: "apache", name: "Apache (Nde)", region: "USA (Suroeste)", lat: 33.5, lon: -109.5, 
    desc: "Guerreros legendarios y estrategas de las zonas áridas. Se llaman a sí mismos 'Nde' (La Gente). Su resistencia bajo líderes como Gerónimo es mítica. Poseen una espiritualidad profunda ligada a los espíritus de la montaña (Gaan) y ceremonias de pubertad femenina (Sunrise Dance) muy elaboradas." 
  },
  { 
    id: "seminole", name: "Seminola", region: "USA (Florida)", lat: 26.0, lon: -80.5, 
    desc: "El 'Pueblo Inconquistado'. Nunca firmaron un tratado de paz con los EE.UU. Se refugiaron en los pantanos de los Everglades, adaptando su vida a los 'Chickees' (casas sobre pilotes). Son famosos por sus coloridas vestimentas de patchwork y su habilidad con los caimanes." 
  },
  { 
    id: "nezperce", name: "Nez Percé (Nimiipuu)", region: "USA (Idaho)", lat: 46.0, lon: -116.0, 
    desc: "Famosos criadores de caballos, desarrollaron la raza Appaloosa. Históricamente conocidos por su dramático intento de huida hacia Canadá bajo el Jefe Joseph. Eran expertos pescadores de salmón y cazadores que vivían en armonía con los valles de las Montañas Rocosas." 
  },
  { 
    id: "purepecha", name: "Purépecha", region: "México (Michoacán)", lat: 19.6, lon: -101.5, 
    desc: "El imperio que los aztecas nunca pudieron conquistar. Maestros del cobre y el bronce en la época prehispánica. Celebran la 'Noche de Muertos' en el lago de Pátzcuaro de una forma visualmente espectacular. Su lengua es aislada, sin relación con ninguna otra en la región." 
  },
  { 
    id: "lacandon", name: "Maya Lacandón", region: "México (Chiapas)", lat: 16.8, lon: -91.2, 
    desc: "Guardianes de la Selva Lacandona. Se consideran los descendientes directos de los antiguos mayas de Palenque y Yaxchilán. Han mantenido sus tradiciones religiosas casi intactas, peregrinando a antiguas ciudades en ruinas para quemar copal a sus dioses." 
  },

  // --- AMÉRICA DEL SUR (ADICIONALES) ---
  { 
    id: "muisca", name: "Muisca", region: "Colombia (Cundinamarca)", lat: 5.0, lon: -74.0, 
    desc: "La civilización del oro y la sal. Su ceremonia de investidura del cacique en la laguna de Guatavita dio origen a la leyenda de 'El Dorado'. Eran grandes comerciantes y astrónomos que seguían un calendario lunisolar complejo para sus cosechas." 
  },
  { 
    id: "kogi", name: "Kogi", region: "Colombia (Sierra Nevada)", lat: 11.0, lon: -73.9, 
    desc: "Hermanos de los Arhuacos, viven aún más alto en la sierra y son más reservados. Se consideran los 'Hermanos Mayores' de la humanidad y creen que su misión es sostener el mundo mentalmente a través del tejido y el pensamiento espiritual en sus templos (Nuhue)." 
  },
  { 
    id: "warao", name: "Warao", region: "Venezuela (Orinoco)", lat: 9.0, lon: -61.5, 
    desc: "La 'Gente de la Canoa'. Habitantes del Delta del Orinoco, viven en palafitos sobre el agua. Su vida gira en torno a la palma de moriche, el 'árbol de la vida', del cual obtienen alimento, vivienda y fibras para sus hamacas. Son expertos navegantes fluviales." 
  },
  { 
    id: "piaroa", name: "Piaroa", region: "Venezuela (Amazonas)", lat: 5.5, lon: -67.0, 
    desc: "Una de las sociedades más pacíficas y anarquistas del mundo; rechazan la violencia y la acumulación de poder. Sus chamanes son muy respetados por su conocimiento de plantas psicoactivas como el Yopo, usado para viajar al mundo de los espíritus y curar." 
  },
  { 
    id: "ticuna", name: "Ticuna", region: "Amazonas (Triple Frontera)", lat: -3.8, lon: -70.0, 
    desc: "El pueblo indígena más numeroso de la Amazonía brasileña. Famosos por sus máscaras ceremoniales hechas de corteza de árbol y la fiesta de la 'Pelazón' (rito de iniciación femenina). Se consideran hijos del río y pescadores por excelencia." 
  },
  { 
    id: "tehuelche", name: "Tehuelche", region: "Argentina (Patagonia)", lat: -48.0, lon: -70.0, 
    desc: "Los 'Patagones' legendarios. Eran cazadores nómadas de gran estatura que inspiraron mitos europeos sobre gigantes. Cazaban guanacos y ñandúes a pie y luego a caballo. Su cosmogonía incluye al héroe Elal, quien organizó el mundo para ellos." 
  },
  { 
    id: "charrua", name: "Charrúa", region: "Uruguay", lat: -32.0, lon: -56.0, 
    desc: "Guerreros indómitos del Río de la Plata. Aunque se les consideró extintos tras la matanza de Salsipuedes, su legado vive en la identidad uruguaya ('Garra Charrúa'). Eran nómadas cazadores conocidos por su ferocidad en la defensa de su territorio." 
  },
  { 
    id: "munduruku", name: "Munduruku", region: "Brasil (Tapajós)", lat: -6.5, lon: -57.0, 
    desc: "Los 'Cortadores de Cabezas'. Históricamente temidos guerreros que dominaron gran parte del Amazonas. Hoy son famosos por su autodemarcación de tierras y resistencia política contra represas hidroeléctricas. Se distinguen por sus tatuajes faciales complejos." 
  },

  // --- EUROPA Y ASIA CENTRAL ---
  { 
    id: "circassian", name: "Circasiano (Adyghe)", region: "Cáucaso", lat: 44.0, lon: 40.0, 
    desc: "Guerreros de las montañas del Cáucaso con un código de honor estricto ('Adyghe Xabze'). Famosos por su belleza física y sus trajes tradicionales (Chokha) con cartuchos en el pecho. Sufrieron un gran exilio en el siglo XIX, dispersándose por el mundo." 
  },
  { 
    id: "komi", name: "Komi", region: "Rusia (Urales)", lat: 64.0, lon: 54.0, 
    desc: "Habitantes de los bosques boreales al oeste de los Urales. Cazadores y pescadores finougrios con una rica tradición de folclore y magia forestal. Fueron intermediarios cruciales en el comercio de pieles entre Siberia y Europa durante siglos." 
  },
  { 
    id: "kalash", name: "Kalash", region: "Pakistán (Hindu Kush)", lat: 35.6, lon: 71.6, 
    desc: "Un pueblo único y aislado en los valles de Pakistán con rasgos europeos (ojos claros). Practican una antigua religión animista politeísta, distinta al Islam que los rodea. Son famosos por sus festivales coloridos, vino y las mujeres usan tocados de conchas y cuentas." 
  },
  { 
    id: "yazidi", name: "Yazidí", region: "Irak/Siria", lat: 36.5, lon: 42.0, 
    desc: "Seguidores de una de las religiones más antiguas de Mesopotamia. Adoran al 'Ángel Pavo Real' (Melek Taus). Han sobrevivido a numerosas persecuciones debido a malentendidos sobre su fe. Sus templos tienen cúpulas cónicas características que representan los rayos del sol." 
  },
  { 
    id: "kazakh", name: "Kazajo", region: "Kazajistán", lat: 48.0, lon: 68.0, 
    desc: "Nómadas de las estepas y descendientes de las hordas mongolas y túrquicas. Son los maestros mundiales de la caza con águila real a caballo, un arte milenario Patrimonio de la Humanidad. Viven en yurtas y su bebida nacional es la leche de yegua fermentada." 
  },

  // --- ÁFRICA (ADICIONALES) ---
  { 
    id: "mbuti", name: "Mbuti (Pigmeos)", region: "Congo (Ituri)", lat: 1.5, lon: 29.0, 
    desc: "Habitantes originales de la selva tropical del Congo. Famosos por su baja estatura y por ser cazadores-recolectores pacíficos. Consideran al bosque como su padre y madre; su música polifónica es única en el mundo y se usa para 'despertar' a la selva." 
  },
  { 
    id: "hadza", name: "Hadza", region: "Tanzania", lat: -3.5, lon: 35.0, 
    desc: "Uno de los últimos grupos de verdaderos cazadores-recolectores del mundo. Genéticamente muy antiguos, no practican la agricultura ni construyen casas permanentes. Su idioma usa chasquidos y tienen una relación simbiótica con un pájaro que les guía hacia la miel." 
  },
  { 
    id: "dinka", name: "Dinka", region: "Sudán del Sur", lat: 8.0, lon: 28.0, 
    desc: "Gente del Nilo, famosos por ser una de las poblaciones más altas del mundo. Su vida gira en torno al ganado; cada hombre recibe un buey de color especial al iniciarse y compone canciones para él. Se marcan la frente con cicatrices rituales como signo de identidad." 
  },
  { 
    id: "wodaabe", name: "Wodaabe", region: "Níger/Chad (Sahel)", lat: 15.0, lon: 12.0, 
    desc: "Nómadas obsesionados con la belleza. En su festival 'Gerewol', los hombres se maquillan, bailan y muestran sus dientes blancos y ojos brillantes para impresionar a las mujeres, quienes eligen a los más bellos como amantes. Se consideran a sí mismos el pueblo más hermoso." 
  },
  { 
    id: "ashanti", name: "Ashanti", region: "Ghana", lat: 6.7, lon: -1.6, 
    desc: "Constructores de un poderoso imperio en África Occidental. Famosos por sus tejidos 'Kente' de colores brillantes y sus joyas de oro. Creen que el alma de la nación reside en el 'Taburete de Oro', un trono sagrado que nunca debe tocar el suelo." 
  },
  { 
    id: "suri", name: "Suri / Mursi", region: "Etiopía (Omo)", lat: 5.5, lon: 36.0, 
    desc: "Habitantes del valle del Omo. Famosos porque las mujeres usan grandes platos de arcilla en sus labios inferiores como símbolo de belleza y valor. Son guerreros orgullosos que practican el 'Donga', una feroz lucha con palos para demostrar hombría." 
  },
  { 
    id: "xhosa", name: "Xhosa", region: "Sudáfrica (Cabo)", lat: -32.0, lon: 27.5, 
    desc: "El pueblo de Nelson Mandela. Su idioma se caracteriza por los sonidos de chasquidos (clicks). Tienen una fuerte tradición oral y adivinos (Sangomas). La iniciación masculina 'Ulwaluko' en las montañas es un rito de paso crucial y secreto." 
  },
  { 
    id: "igbo", name: "Igbo", region: "Nigeria (Sureste)", lat: 6.0, lon: 7.0, 
    desc: "Conocidos por su espíritu emprendedor y sistema democrático pre-colonial sin reyes. Famosos por sus máscaras, el arte del ñame (alimento básico sagrado) y sus coloridos festivales de mascaradas. Su cosmología incluye el concepto de 'Chi', el dios personal de cada individuo." 
  },

  // --- ASIA (ADICIONALES) ---
  { 
    id: "sherpa", name: "Sherpa", region: "Nepal (Himalaya)", lat: 27.9, lon: 86.7, 
    desc: "Los 'Tigres de las Nieves'. Famosos mundialmente por su habilidad en el montañismo y adaptación genética a la altura. Son budistas devotos; consideran al Monte Everest como la diosa 'Chomolungma' y realizan ofrendas antes de cualquier expedición." 
  },
  { 
    id: "naga", name: "Naga", region: "India/Myanmar", lat: 26.0, lon: 94.0, 
    desc: "Conglomerado de tribus guerreras de las colinas. Antiguamente temidos cazadores de cabezas, hoy son conocidos por sus festivales coloridos como el Hornbill. Viven en aldeas fortificadas en las cumbres y tienen textiles distintivos para cada clan." 
  },
  { 
    id: "vedda", name: "Vedda", region: "Sri Lanka", lat: 7.5, lon: 81.0, 
    desc: "Los habitantes aborígenes de la isla, anteriores a la llegada de cingaleses y tamiles. Tradicionalmente cazadores con arco y recolectores de miel silvestre. Mantienen rituales de posesión espiritual para comunicarse con sus ancestros, los 'Nae Yaku'." 
  },
  { 
    id: "mentawai", name: "Mentawai", region: "Indonesia (Sumatra)", lat: -1.5, lon: 99.0, 
    desc: "Los 'Hombres Flor'. Viven en la selva de la isla Siberut. Famosos por sus tatuajes de cuerpo entero y por afilarse los dientes para embellecerse. Viven en comunión con la naturaleza bajo la guía de chamanes (Sikerei) y creen que todo tiene alma." 
  },
  { 
    id: "dayak", name: "Dayak", region: "Borneo", lat: 0.5, lon: 113.0, 
    desc: "Los habitantes del interior de Borneo. Antiguamente temibles guerreros, viven en enormes casas comunales llamadas 'Longhouses' sobre pilotes. Son maestros talladores de madera y tienen tatuajes intrincados que marcan sus viajes y logros." 
  },
  { 
    id: "toraja", name: "Toraja", region: "Indonesia (Sulawesi)", lat: -3.0, lon: 120.0, 
    desc: "Famosos por sus complejos rituales funerarios. Para ellos, la muerte es un proceso gradual hacia el 'Puya' (tierra de las almas). Conservan los cuerpos de sus ancestros en casa durante años y tallan tumbas en acantilados de roca custodiadas por figuras de madera 'Tau-tau'." 
  },
  { 
    id: "korowai", name: "Korowai", region: "Papúa (Indonesia)", lat: -5.5, lon: 140.0, 
    desc: "Constructores de las casas en los árboles más altas del mundo (hasta 35 metros). Viven en lo profundo de la selva para protegerse de inundaciones, insectos y espíritus. Fueron contactados muy recientemente y mantienen un estilo de vida de caza y recolección de sagú." 
  },
  { 
    id: "jarawa", name: "Jarawa", region: "Islas Andamán", lat: 11.0, lon: 92.5, 
    desc: "Vecinos de los Sentineleses, pero con contacto limitado. Han vivido en las selvas andamanesas por 50.000 años. Son expertos cazadores de cerdos salvajes y peces con arco. Enfrentan amenazas modernas por la carretera que cruza su reserva." 
  },
  
  // --- OCEANÍA (ADICIONALES) ---
  { 
    id: "rapanui", name: "Rapa Nui", region: "Isla de Pascua", lat: -27.1, lon: -109.4, 
    desc: "Creadores de los Moai, las estatuas monolíticas más famosas del Pacífico. Desarrollaron una escritura única aún no descifrada (Rongo Rongo). Su culto al 'Hombre Pájaro' (Tangata Manu) era una competencia física extrema para elegir al líder anual de la isla." 
  },
  { 
    id: "tahitian", name: "Tahitiano", region: "Polinesia Francesa", lat: -17.6, lon: -149.4, 
    desc: "Cultura vibrante de las Islas de la Sociedad. Famosos por la danza 'Ori Tahiti' (movimiento rápido de caderas) y sus tatuajes. Eran navegantes expertos y su sociedad estaba estratificada con una realeza sagrada. El concepto de 'Mana' (poder espiritual) es central." 
  },
  { 
    id: "tongan", name: "Tongano", region: "Tonga", lat: -21.1, lon: -175.2, 
    desc: "El único reino del Pacífico que nunca perdió su soberanía indígena ante una potencia colonial. Famosos por su arte de la 'Tapa' (tela de corteza) y la ceremonia del Kava. Son conocidos por su gran tamaño físico y su pasión por el rugby." 
  },
  { 
    id: "chamorro", name: "Chamorro", region: "Guam/Marianas", lat: 13.4, lon: 144.7, 
    desc: "Pueblo indígena de las Islas Marianas. Famosos por sus antiguas 'Piedras Latte', pilares de piedra que sostenían sus casas. A pesar de siglos de colonización española y estadounidense, mantienen su lengua y el valor de 'Inafa'maolek' (interdependencia)." 
  },
  { 
    id: "tiwi", name: "Tiwi", region: "Australia (Islas Tiwi)", lat: -11.5, lon: 130.5, 
    desc: "Aislados en sus islas por 7,000 años, desarrollaron una cultura distinta a la del continente. Famosos por sus 'Pukumani' (postes funerarios tallados y pintados) y su arte abstracto. Su idioma es aislado y no se relaciona con otras lenguas aborígenes." 
  },
  { 
    id: "yolngu", name: "Yolngu", region: "Australia (Arnhem)", lat: -12.5, lon: 136.0, 
    desc: "Maestros del Didgeridoo (Yidaki). Tienen un sistema legal y de parentesco muy complejo. Son famosos por sus pinturas de corteza con diseños de líneas cruzadas 'Rarrk'. Mantuvieron comercio con pescadores de Indonesia siglos antes de la llegada de los europeos." 
  },
  { 
    id: "asaro", name: "Hombres de Barro (Asaro)", region: "Papúa Nueva Guinea", lat: -6.0, lon: 145.4, 
    desc: "Legendarios guerreros de las tierras altas que se cubren de barro gris y usan máscaras de arcilla aterradoras. Según la leyenda, idearon este disfraz para parecer espíritus fantasmas y asustar a sus enemigos sin luchar. Hoy es una danza cultural icónica." 
  },
  { 
    id: "ni_vanuatu", name: "Ni-Vanuatu", region: "Vanuatu", lat: -15.3, lon: 166.9, 
    desc: "Famosos por la ceremonia del 'Naghol' (buceo en tierra), el precursor ancestral del puenting, donde los hombres saltan de altas torres de madera atados con lianas para asegurar una buena cosecha de ñame. Es una de las culturas más felices y resilientes del mundo." 
  },
  { 
    id: "solomon", name: "Isleños Salomón", region: "Islas Salomón", lat: -9.6, lon: 160.1, 
    desc: "Habitantes de Melanesia conocidos por una característica genética única: muchos tienen piel oscura y cabello rubio natural. Son expertos talladores de concha y madera. Históricamente usaban una moneda de plumas rojas única en el mundo." 
  },
  // --- AMÉRICA DEL NORTE (COSTA OESTE Y SUROESTE) ---
  { id: "kwakiutl", name: "Kwakwaka'wakw", region: "Canadá (Vancouver)", lat: 50.5, lon: -127.0, desc: "Maestros del Potlatch y creadores de máscaras de transformación complejas. Sus danzas de invierno, como la Hamatsa (Caníbal), son teatro sagrado de alto nivel artístico." },
  { id: "nuuchahnulth", name: "Nuu-chah-nulth", region: "Canadá (Isla Vancouver)", lat: 49.5, lon: -126.0, desc: "Antiguos cazadores de ballenas. Salían al océano abierto en canoas de cedro para arponear ballenas jorobadas, una hazaña espiritual y física de inmenso prestigio." },
  { id: "tsimshian", name: "Tsimshian", region: "Canadá/Alaska", lat: 54.5, lon: -129.5, desc: "Conocidos como la 'Gente del Río Skeena'. Su arte se distingue por el 'formline', líneas ovoides negras y rojas que representan animales totémicos con elegancia geométrica." },
  { id: "chumash", name: "Chumash", region: "USA (California)", lat: 34.5, lon: -120.0, desc: "Navegantes expertos de la costa de Santa Bárbara. Construían 'Tomols', canoas de tablas cosidas y selladas con asfalto natural, y son famosos por sus complejas pinturas rupestres." },
  { id: "pomo", name: "Pomo", region: "USA (California)", lat: 39.0, lon: -123.0, desc: "Considerados los mejores cesteros del mundo. Sus canastas tejidas son tan apretadas que pueden contener agua, y a menudo incorporan plumas de colores y conchas." },
  { id: "zuni", name: "Zuni (A:shiwi)", region: "USA (Nuevo México)", lat: 35.0, lon: -108.8, desc: "Habitantes del Pueblo de Zuni. Famosos por sus fetiches tallados en piedra y su profunda conexión con la lluvia. Han mantenido su lengua aislada y su religión kachina intacta." },
  { id: "acoma", name: "Acoma", region: "USA (Nuevo México)", lat: 34.9, lon: -107.5, desc: "La 'Ciudad del Cielo'. Viven en una meseta de arenisca de 110 metros de altura, habitada continuamente desde hace casi 1000 años. Son maestros de la cerámica de paredes finas." },
  { id: "mohawk", name: "Mohawk", region: "USA/Canadá (Este)", lat: 44.9, lon: -74.5, desc: "Los 'Guardianes de la Puerta Oriental' de la Confederación Iroquesa. Famosos históricamente como guerreros y modernamente como expertos trabajadores del acero en rascacielos." },
  { id: "ojibwe", name: "Ojibwe (Chippewa)", region: "Grandes Lagos", lat: 46.5, lon: -87.0, desc: "Cosechadores de arroz silvestre (Manoomin) en canoas de corteza de abedul. Desarrollaron la escritura pictográfica en rollos de corteza (Midewiwin) para preservar sus rituales." },
  { id: "choctaw", name: "Choctaw", region: "USA (Oklahoma/Miss)", lat: 34.0, lon: -95.0, desc: "Originalmente del sureste. Famosos por su generosidad (enviaron ayuda a Irlanda durante la hambruna) y por ser los creadores originales del deporte del Lacrosse." },

  // --- AMAZONAS Y SURAMÉRICA PROFUNDA ---
  { id: "piraha", name: "Pirahã", region: "Brasil (Maici)", lat: -7.0, lon: -62.0, desc: "Famosos lingüísticamente por no tener números, colores fijos ni tiempos verbales pasados/futuros. Viven en el presente absoluto y son ferozmente igualitarios." },
  { id: "matses", name: "Matsés (Mayoruna)", region: "Perú/Brasil", lat: -5.5, lon: -73.0, desc: "El 'Pueblo Jaguar'. Usan 'whiskers' faciales y tatuajes para parecerse a felinos. Usan el veneno de la rana Kambo y tabaco Nu-nu para agudizar los sentidos en la caza." },
  { id: "enxet", name: "Enxet", region: "Paraguay (Chaco)", lat: -23.0, lon: -59.0, desc: "Habitantes del Gran Chaco. Su mitología está profundamente ligada al algarrobo y la recolección de miel silvestre. Han luchado tenazmente por recuperar sus tierras ancestrales." },
  { id: "waorani", name: "Waorani", region: "Ecuador (Yasuní)", lat: -1.0, lon: -76.5, desc: "Legendarios guerreros de la selva que se mantuvieron aislados hasta los años 50. Conocidos por sus largas lanzas de chonta y grandes expansores de oreja de madera balsa." },
  { id: "awajun", name: "Awajún (Aguaruna)", region: "Perú (Marañón)", lat: -4.5, lon: -77.5, desc: "El segundo grupo más grande de la Amazonía peruana. Famosos por su resistencia a la invasión inca y española. Tienen una rica tradición de cerámica femenina y horticultura." },
  { id: "yawalapiti", name: "Yawalapiti", region: "Brasil (Xingu)", lat: -12.0, lon: -53.5, desc: "Habitantes del Alto Xingu. Famosos por el ritual del 'Kuarup', una ceremonia funeraria con lucha libre (Huka-huka) y danzas para honrar a los jefes fallecidos." },
  { id: "surui", name: "Suruí Paiter", region: "Brasil (Rondônia)", lat: -11.0, lon: -61.0, desc: "Pioneros en el uso de tecnología (Google Earth) para mapear sus tierras y denunciar la tala ilegal. Pasaron de la edad de piedra a la era digital en una generación." },
  { id: "tsimané", name: "Tsimané", region: "Bolivia (Beni)", lat: -14.5, lon: -66.5, desc: "Estudios científicos han revelado que tienen las arterias más sanas del mundo gracias a su dieta y estilo de vida activo. Viven de la caza, pesca y agricultura de subsistencia." },
  { id: "qom", name: "Qom (Tobas)", region: "Argentina (Chaco)", lat: -25.5, lon: -60.0, desc: "Originalmente cazadores-recolectores del Chaco. Su nombre significa 'Gente'. Mantienen una fuerte tradición de cestería y una espiritualidad ligada a los dueños de los animales." },
  { id: "wichi", name: "Wichí", region: "Argentina/Bolivia", lat: -24.0, lon: -62.0, desc: "Maestros del tallado en madera de palo santo y tejidos de chaguar. Su lengua es compleja y su conocimiento del monte chaqueño es enciclopédico." },

  // --- SIBERIA Y ASIA CENTRAL (El gran vacío en el mapa) ---
  { id: "yakut", name: "Sakha (Yakuto)", region: "Rusia (Siberia)", lat: 62.0, lon: 129.0, desc: "Viven en el lugar habitado más frío de la Tierra. Son criadores de caballos y ganado que desafían temperaturas de -60°C. Famosos por sus diamantes y su festival de verano Yhyakh." },
  { id: "tuvans", name: "Tuvanos", region: "Rusia (Tuva)", lat: 51.5, lon: 94.0, desc: "Mundialmente famosos por el canto de garganta (Khoomei), donde un cantante produce dos o tres notas simultáneamente. Cultura nómada con influencias chamánicas y budistas." },
  { id: "buryat", name: "Buriatos", region: "Rusia (Baikal)", lat: 52.0, lon: 108.0, desc: "El grupo indígena más grande de Siberia, primos de los mongoles. Viven alrededor del lago Baikal, al que consideran sagrado. Mezclan chamanismo y budismo tibetano." },
  { id: "khanty", name: "Janty", region: "Rusia (Siberia Occ)", lat: 61.0, lon: 73.0, desc: "Pescadores y pastores de renos de los pantanos de Siberia occidental. Veneran al oso y realizan festivales complejos en su honor. Viven en tipis de corteza." },
  { id: "evenki", name: "Evenki", region: "Rusia/China", lat: 64.0, lon: 100.0, desc: "Los 'Aristócratas de Siberia'. Cazadores y pastores de renos que se mueven por la taiga montados en renos, no en trineos. Su chamanismo es el origen de la palabra 'Chamán'." },
  { id: "altai", name: "Altáis", region: "Rusia (Altái)", lat: 50.5, lon: 86.5, desc: "Habitantes de las Montañas Doradas. Creen que el Altái es el centro del mundo. Su religión, el Burkhanismo, mezcla animismo y profecías mesiánicas." },
  { id: "dolgan", name: "Dolgan", region: "Rusia (Taimyr)", lat: 71.0, lon: 95.0, desc: "El pueblo de habla túrquica más septentrional del mundo. Se formaron recientemente (s. XVIII) mezclando evenkis, yakutos y rusos. Viven en casas sobre trineos llamadas 'Balok'." },
  { id: "koryak", name: "Koryak", region: "Rusia (Kamchatka)", lat: 60.0, lon: 165.0, desc: "Vecinos de los Chukchi en la península de Kamchatka. Sus mitos giran en torno al Cuervo (Kutkh). Famosos por sus complejos trajes de piel de reno y danzas frenéticas." },
  { id: "nivkh", name: "Nivkh", region: "Rusia (Sajalín)", lat: 53.0, lon: 142.0, desc: "Pueblo aislado de la isla Sajalín y el río Amur. Tradicionalmente pescadores y cazadores de focas. Practicaban el entierro aéreo y alimentaban a osos en jaulas para festivales." },
  { id: "uyghur", name: "Uigur", region: "China (Xinjiang)", lat: 41.0, lon: 86.0, desc: "Pueblo túrquico de los oasis de la Ruta de la Seda. Famosos por su música Muqam, sus melones dulces y su arquitectura de mezquitas. Enfrentan grandes desafíos para preservar su identidad." },

  // --- SUDESTE ASIÁTICO E INDIA (ADIVASI) ---
  { id: "gond", name: "Gond", region: "India (Central)", lat: 21.0, lon: 79.0, desc: "Uno de los grupos tribales más grandes del mundo (12 millones). Famosos por su arte vibrante de puntos y líneas que representa la naturaleza. Tienen su propio reino histórico, Gondwana." },
  { id: "santhal", name: "Santhal", region: "India (Este)", lat: 24.0, lon: 87.0, desc: "Conocidos por su música, danza y rebelión histórica contra el Raj británico. Sus casas de barro están decoradas con murales geométricos exquisitos y limpios." },
  { id: "khasi", name: "Khasi", region: "India (Meghalaya)", lat: 25.5, lon: 91.5, desc: "Sociedad matrilineal donde la hija menor hereda. Famosos por crear 'Puentes de Raíces Vivas', guiando las raíces de los árboles de caucho a través de los ríos durante siglos." },
  { id: "naga_angami", name: "Naga Angami", region: "India (Nagaland)", lat: 25.6, lon: 94.1, desc: "Constructores de terrazas de arroz espectaculares en las montañas. Famosos por el festival Sekrenyi de purificación y sus chales negros con bordes rojos y verdes." },
  { id: "akhash", name: "Akha", region: "Tailandia/Laos", lat: 20.0, lon: 99.5, desc: "Conocidos por los espectaculares tocados de plata de sus mujeres. Tienen un código moral estricto llamado 'Akha Zang'. Sus aldeas tienen puertas espirituales para separar el mundo humano del natural." },
  { id: "moken", name: "Moken", region: "Myanmar (Mergui)", lat: 12.0, lon: 98.0, desc: "Nómadas del mar del archipiélago Mergui. Sus niños pueden ver bajo el agua con el doble de claridad que los europeos. Sobrevivieron al tsunami de 2004 gracias a su saber ancestral." },
  { id: "ifugao", name: "Ifugao", region: "Filipinas", lat: 16.9, lon: 121.1, desc: "Constructores de las Terrazas de Arroz de Banaue, la 'Octava Maravilla del Mundo'. Resistieron la colonización española durante siglos gracias a su terreno montañoso." },
  { id: "penan", name: "Penan", region: "Borneo (Sarawak)", lat: 3.0, lon: 114.5, desc: "Uno de los últimos pueblos cazadores-recolectores nómadas. Famosos por su cerbatana y su concepto de 'molong' (nunca tomar más de lo necesario). Luchan contra la tala masiva." },
  { id: "minangkabau", name: "Minangkabau", region: "Indonesia (Sumatra)", lat: -0.5, lon: 100.5, desc: "La sociedad matrilineal más grande del mundo. La propiedad y la tierra pasan de madre a hija. Sus casas tienen techos curvos que imitan los cuernos de búfalo." },
  { id: "bali_aga", name: "Bali Aga", region: "Indonesia (Bali)", lat: -8.2, lon: 115.5, desc: "Los balineses originales, anteriores a la influencia hindú-javanesa. Viven en aldeas amuralladas como Tenganan y tejen la sagrada tela 'Geringsing' (doble ikat)." },

  // --- ÁFRICA (PROFUNDIDAD Y RIFT) ---
  { id: "afar", name: "Afar", region: "Etiopía/Yibuti", lat: 11.5, lon: 41.0, desc: "Viven en la Depresión de Danakil, el lugar más caluroso de la tierra. Mineros tradicionales de sal que transportan en caravanas de camellos. Guerreros fieros y orgullosos." },
  { id: "hamer", name: "Hamer", region: "Etiopía (Omo)", lat: 5.0, lon: 36.5, desc: "Famosos por la ceremonia del 'Salto del Toro', donde los jóvenes deben saltar sobre una fila de ganado para convertirse en hombres. Las mujeres usan cabello con ocre y collares de cuero." },
  { id: "surma", name: "Suri", region: "Etiopía/Sudán", lat: 6.0, lon: 35.0, desc: "Maestros del arte corporal usando arcilla y pigmentos naturales. Practican luchas rituales con palos (Donga) para demostrar prestigio y atraer pareja." },
  { id: "turkana", name: "Turkana", region: "Kenia (Lago Turkana)", lat: 3.0, lon: 35.5, desc: "Pastores de un entorno semidesértico hostil. Expertos en supervivencia y cestería. Fueron de los primeros en adoptar armas de fuego para proteger sus rebaños en el norte de Kenia." },
  { id: "samburu", name: "Samburu", region: "Kenia (Norte)", lat: 1.5, lon: 37.0, desc: "Primos lejanos de los Maasai, se llaman a sí mismos 'Lokop' (dueños de la tierra). Visten coloridas cuentas y túnicas rojas. Mantienen una gerontocracia (gobierno de ancianos)." },
  { id: "ndebele", name: "Ndebele", region: "Sudáfrica", lat: -25.5, lon: 29.0, desc: "Mundialmente famosos por sus casas pintadas con patrones geométricos brillantes y los anillos de bronce que las mujeres usan en el cuello y extremidades (Dzilla)." },
  { id: "shona", name: "Shona", region: "Zimbabue", lat: -19.0, lon: 30.0, desc: "Constructores del Gran Zimbabue, la ciudad de piedra medieval más grande de África subsahariana. Famosos por su música de Mbira (piano de pulgar) para invocar ancestros." },
  { id: "fulani", name: "Fulani (Peul)", region: "África Occidental (Sahel)", lat: 14.0, lon: -4.0, desc: "El pueblo nómada más grande del mundo. Pastores de ganado de cuernos largos que cruzan múltiples fronteras. Conocidos por su código de conducta 'Pulaaku' (paciencia y autocontrol)." },
  { id: "wolof", name: "Wolof", region: "Senegal", lat: 15.0, lon: -15.0, desc: "Famosos por su 'Teranga' (hospitalidad extrema). Su idioma es la lengua franca de Senegal. Tienen una rica tradición de 'Griots', historiadores orales y músicos hereditarios." },
  { id: "fang", name: "Fang", region: "Gabón/Camerún", lat: 1.0, lon: 11.5, desc: "Célebres por sus máscaras 'Ngil' alargadas y blancas que inspiraron a Picasso y al arte moderno. Utilizan la planta Iboga en ceremonias de iniciación espiritual intensas." },

  // --- OCEANÍA (MICRONESIA Y MELANESIA) ---
  { id: "yapese", name: "Yapese", region: "Micronesia (Yap)", lat: 9.5, lon: 138.1, desc: "Famosos por usar el dinero más grande del mundo: Piedras Rai, discos de caliza gigantes de hasta 4 metros. El valor depende de la historia de la piedra, no solo del tamaño." },
  { id: "palauan", name: "Palauano", region: "Palaos", lat: 7.5, lon: 134.5, desc: "Sociedad matrilineal fuerte. Famosos por sus 'Bai', casas de reunión masculinas decoradas con historias legendarias. Son conservacionistas marinos pioneros (Santuario de Tiburones)." },
  { id: "marshallese", name: "Marshalés", region: "Islas Marshall", lat: 7.0, lon: 171.0, desc: "Los mejores navegantes de olas. Usaban mapas de palos (Stick Charts) para leer el oleaje y encontrar islas invisibles más allá del horizonte. Sobrevivientes de pruebas nucleares." },
  { id: "kiribati", name: "I-Kiribati", region: "Kiribati", lat: 1.0, lon: 173.0, desc: "Habitantes de atolones de coral remotos. Famosos por sus armaduras de fibra de coco y dientes de tiburón. Enfrentan la primera línea del cambio climático y la subida del mar." },
  { id: "kanak", name: "Kanak", region: "Nueva Caledonia", lat: -21.0, lon: 165.5, desc: "Famosos por la 'Flèche faîtière', una talla en la cima de sus casas cónicas que representa el espíritu del clan. Tienen una conexión profunda con la tierra y el ñame sagrado." },
  { id: "dani", name: "Dani", region: "Papúa (Baliem)", lat: -4.0, lon: 139.0, desc: "Famosos por su momificación ahumada de ancestros y por usar 'Koteka' (calabaza peneana). Practican guerras rituales y grandes festivales de cerdos para mantener la paz." },
  { id: "korowai_batu", name: "Korowai Batu", region: "Papúa (Indonesia)", lat: -6.0, lon: 140.5, desc: "Vecinos de los Korowai pero constructores de casas de piedra y madera a menor altura. Mantienen tradiciones animistas estrictas para apaciguar a los espíritus 'Laleo'." },
  { id: "gogodala", name: "Gogodala", region: "Papúa Nueva Guinea", lat: -8.0, lon: 142.0, desc: "Artistas prolíficos del delta del río Fly. Construyen canoas de guerra gigantescas pintadas con diseños clanicos. Revivieron sus tradiciones culturales tras años de supresión colonial." },
  { id: "huli", name: "Huli Wigmen", region: "Papúa Nueva Guinea", lat: -6.0, lon: 143.0, desc: "Los 'Hombres Peluca'. Cultivan su propio cabello para crear elaboradas pelucas ceremoniales decoradas con plumas de ave del paraíso. Pintan sus caras de amarillo brillante." },
  { id: "tolai", name: "Tolai", region: "Nueva Bretaña", lat: -4.3, lon: 152.2, desc: "Usan la 'Tambu', moneda de concha tradicional, que todavía es legal y se usa en bancos locales. Famosos por sus danzas de fuego y la sociedad secreta Duk-Duk." },

  // --- EUROPA (MINORÍAS Y ANTIGUOS) ---
  { id: "sorbs", name: "Sorbios", region: "Alemania (Lusacia)", lat: 51.5, lon: 14.5, desc: "Un pueblo eslavo en el corazón de Alemania. Famosos por sus trajes tradicionales elaborados y la decoración de huevos de Pascua (Sorbian Easter Eggs) increíblemente detallada." },
  { id: "pomaks", name: "Pomacos", region: "Bulgaria/Grecia", lat: 41.5, lon: 24.5, desc: "Eslavos musulmanes de las montañas Ródope. Viven en aldeas remotas de alta montaña, conservando tradiciones agrícolas antiguas y una arquitectura de piedra única." },
  { id: "gagauz", name: "Gagáuz", region: "Moldavia", lat: 46.0, lon: 28.5, desc: "Un pueblo túrquico pero de religión cristiana ortodoxa. Sobrevivientes de las estepas que se asentaron en los Balcanes. Mantienen una lengua túrquica arcaica." },
  { id: "setos", name: "Setos", region: "Estonia/Rusia", lat: 57.8, lon: 27.5, desc: "Famosos por su canto polifónico 'Leelo', patrimonio de la UNESCO. Viven en la frontera cultural entre el este y el oeste, mezclando tradiciones paganas y ortodoxas." },
  { id: "karelian", name: "Carelios", region: "Rusia/Finlandia", lat: 63.0, lon: 33.0, desc: "Pueblo del Kalevala, la epopeya nacional finlandesa. Su cultura de bardo y poesía cantada es legendaria. Han sufrido gran asimilación pero reviven su lengua y cocina (pasteles carelios)." },
  { id: "vlachs", name: "Valacos", region: "Balcanes (Montañas)", lat: 40.0, lon: 21.0, desc: "Pastores trashumantes de origen latino en un mar eslavo y griego. Históricamente controlaban las rutas de comercio de montaña. Famosos por sus quesos y lana." },
  { id: "kalmyk", name: "Calmucos", region: "Rusia (Caspio)", lat: 46.5, lon: 45.0, desc: "El único pueblo budista de Europa. Descendientes de los mongoles Oirat que migraron al Volga. Tienen templos budistas dorados en plena estepa europea." },
  { id: "crimean_tatar", name: "Tártaros de Crimea", region: "Crimea", lat: 45.0, lon: 34.0, desc: "Pueblo túrquico nativo de la península. Famosos por su arquitectura palaciega (Bajchisarái) y su trágica historia de deportación. Mantienen una identidad islámica única." },
  { id: "sardinian", name: "Sardos", region: "Italia (Cerdeña)", lat: 40.0, lon: 9.0, desc: "Poseen un marcador genético único de la Europa prehistórica. Famosos por los 'Nuragas' (torres de piedra) y el canto de tenores (Canto a tenore). Tienen una longevidad excepcional." },
  { id: "arbereshe", name: "Arbëreshë", region: "Italia (Sur)", lat: 39.0, lon: 16.5, desc: "Albaneses que huyeron a Italia en el siglo XV. Han mantenido su lengua antigua y ritos bizantinos por 500 años. Sus trajes tradicionales son de una riqueza y colorido extraordinario." },
  // --- AMÉRICA DEL NORTE (GRAN CUENCA, LLANURAS Y ESTE) ---
  { id: "cheyenne", name: "Cheyenne", region: "USA (Llanuras)", lat: 45.5, lon: -106.5, desc: "Guerreros legendarios de las Grandes Llanuras. Su sociedad militar, los 'Soldados Perro', era famosa por su valentía: se clavaban al suelo en batalla y no retrocedían. Celebran la Danza del Sol." },
  { id: "crow", name: "Apsáalooke (Crow)", region: "USA (Montana)", lat: 45.3, lon: -107.5, desc: "Conocidos por sus tipis inmensos y vestimentas elegantes. Eran exploradores del ejército de EE.UU. Famosos por su relación espiritual con las Montañas Bighorn y el cultivo de tabaco sagrado." },
  { id: "osage", name: "Osage", region: "USA (Oklahoma)", lat: 36.5, lon: -96.5, desc: "Llamados 'Hijos de las Aguas Medias'. Se hicieron inmensamente ricos en los años 20 por el petróleo, pero sufrieron una tragedia histórica ('Los asesinos de la luna de las flores')." },
  { id: "paiute", name: "Paiute", region: "USA (Nevada)", lat: 39.0, lon: -117.0, desc: "Habitantes de la Gran Cuenca desértica. Famosos por Wovoka, el profeta que inició la 'Danza de los Espíritus' (Ghost Dance), un movimiento mesiánico para restaurar el mundo indígena." },
  { id: "shoshone", name: "Shoshone", region: "USA (Idaho/Wyoming)", lat: 43.0, lon: -112.0, desc: "El pueblo de Sacagawea. Expertos cesteros y cazadores de las Rocosas. Se dividen en grupos según su alimento principal: comedores de salmón, de búfalo o de ovejas." },
  { id: "salish", name: "Salish de la Costa", region: "USA/Canadá (Salish Sea)", lat: 48.5, lon: -123.0, desc: "Famosos por sus casas comunales de cedro y mantas de lana de perro y cabra montesa. Creen en espíritus guardianes personales adquiridos en búsquedas de visión." },
  { id: "mikmaq", name: "Mi'kmaq", region: "Canadá (Atlántico)", lat: 46.0, lon: -63.0, desc: "Los primeros en contactar con europeos en el este. Expertos constructores de canoas de corteza de abedul aptas para el mar. Crearon una escritura jeroglífica propia antes del contacto." },
  { id: "powhatan", name: "Powhatan", region: "USA (Virginia)", lat: 37.5, lon: -77.0, desc: "Una poderosa confederación de tribus costeras liderada por el padre de Pocahontas. Vivían en casas largas cubiertas de corteza (Yehakins) y tenían una agricultura sofisticada." },
  { id: "creek", name: "Muscogee (Creek)", region: "USA (Sureste)", lat: 32.5, lon: -85.0, desc: "Constructores de montículos y ciudades complejas con plazas centrales. Famosos por la ceremonia del 'Maíz Verde' (Posketv), un rito de renovación y perdón anual." },
  { id: "huron", name: "Wendat (Hurón)", region: "Canadá/USA (Lagos)", lat: 44.5, lon: -79.5, desc: "Los 'Comerciantes de la Confederación'. Controlaban el comercio de pieles entre franceses y tribus del interior. Vivían en aldeas fortificadas con empalizadas de madera." },
  { id: "aleut", name: "Unangan (Aleut)", region: "Alaska (Aleutianas)", lat: 53.0, lon: -167.0, desc: "Maestros de la supervivencia en las islas tormentosas entre Asia y América. Cazaban mamíferos marinos desde kayaks de piel (Baidarkas) impermeables y veloces." },
  { id: "athabaskan", name: "Atabascanos", region: "Alaska (Interior)", lat: 65.0, lon: -150.0, desc: "Habitantes del duro interior de Alaska. Famosos por sus raquetas de nieve intrincadas y el uso de perros de trineo. Su cultura gira en torno a la migración del caribú." },
  { id: "tohono", name: "Tohono O'odham", region: "USA/México (Sonora)", lat: 32.0, lon: -111.5, desc: "La 'Gente del Desierto'. Cosechan el fruto del cactus saguaro para hacer vino ceremonial y llamar a la lluvia. Famosos por su cestería 'Man in the Maze'." },
  { id: "yurok", name: "Yurok", region: "USA (California)", lat: 41.3, lon: -124.0, desc: "Gente del río Klamath. Su moneda era el dentalium (conchas). Famosos por la 'Danza del Salto' para restaurar el equilibrio del mundo y sus casas de tablones de secuoya." },
  { id: "makah", name: "Makah", region: "USA (Washington)", lat: 48.3, lon: -124.6, desc: "Los únicos nativos de EE.UU. con un tratado que permite la caza de ballenas, tradición sagrada para ellos. Su aldea Ozette, preservada por lodo, es la 'Pompeya americana'." },
  { id: "kiowa", name: "Kiowa", region: "USA (Llanuras Sur)", lat: 35.0, lon: -99.0, desc: "Guerreros y artistas. Famosos por sus calendarios pictográficos pintados en pieles de búfalo que registraban la historia año tras año. Aliados históricos de los comanches." },
  { id: "pawnee", name: "Pawnee", region: "USA (Nebraska)", lat: 41.5, lon: -98.0, desc: "Astrónomos avanzados. Construían sus logias de tierra alineadas con las estrellas. Tenían sociedades sacerdotales complejas dedicadas a la Estrella de la Mañana." },
  { id: "shawnee", name: "Shawnee", region: "USA (Ohio Valley)", lat: 39.0, lon: -83.0, desc: "El pueblo de Tecumseh, quien intentó unir a todas las tribus nativas en una gran confederación. Famosos por su movilidad y resistencia a la expansión colonial." },
  { id: "wampanoag", name: "Wampanoag", region: "USA (Mass)", lat: 41.7, lon: -70.5, desc: "La 'Gente de la Primera Luz'. Fueron quienes recibieron a los peregrinos del Mayflower. Tienen una tradición de cultivo de las 'Tres Hermanas' (maíz, frijol, calabaza)." },
  { id: "metis", name: "Métis", region: "Canadá (Praderas)", lat: 50.0, lon: -100.0, desc: "Una cultura distinta nacida de la mezcla de indígenas y comerciantes europeos. Famosos por su música de violín, la danza de la giga y la 'Cintura Flechada' (sash)." },

  // --- AMÉRICA CENTRAL Y SUR (ANDES PROFUNDOS Y SELVA) ---
  { id: "tzotzil", name: "Tzotzil", region: "México (Chiapas)", lat: 16.7, lon: -92.6, desc: "El 'Pueblo del Murciélago'. Famosos por sus tejidos de lana y festivales donde mezclan el catolicismo con antiguas creencias mayas, venerando al sol como Cristo." },
  { id: "miskito", name: "Miskito", region: "Honduras/Nicaragua", lat: 14.5, lon: -83.5, desc: "Habitantes de la Costa de Mosquitos. Expertos pescadores de tortugas verdes. Nunca fueron conquistados por los españoles gracias a su alianza con piratas británicos." },
  { id: "ngabe", name: "Ngäbe-Buglé", region: "Panamá", lat: 8.5, lon: -81.5, desc: "El grupo indígena más grande de Panamá. Las mujeres usan vestidos coloridos 'Nagua'. Famosos por su lucha contra la minería y la protección de sus recursos hídricos." },
  { id: "lenca", name: "Lenca", region: "Honduras", lat: 14.0, lon: -88.0, desc: "Guardianes de los ríos. Liderados históricamente por el cacique Lempira. Su cultura experimenta un renacimiento, centrada en la alfarería negra y el rito del 'Guancasco'." },
  { id: "naso", name: "Naso (Teribe)", region: "Panamá", lat: 9.3, lon: -82.7, desc: "Una de las últimas monarquías indígenas de América. Tienen un Rey que gobierna con un consejo. Viven aislados en la cuenca del río Teribe, protegiendo la biosfera." },
  { id: "qero", name: "Q'ero", region: "Perú (Cusco)", lat: -13.5, lon: -71.0, desc: "Considerados los últimos descendientes directos de los Incas. Viven a 5000 metros de altura y preservaron profecías antiguas sobre el 'Pachacuti' (retorno de la luz)." },
  { id: "saraguro", name: "Saraguro", region: "Ecuador (Loja)", lat: -3.6, lon: -79.2, desc: "Visten siempre de negro elegante, se dice que en luto eterno por la muerte de Atahualpa. Son agricultores prósperos y famosos por sus sombreros blancos con manchas." },
  { id: "otavalo", name: "Otavalo", region: "Ecuador (Imbabura)", lat: 0.2, lon: -78.2, desc: "Los comerciantes textiles más famosos de los Andes. Han viajado por todo el mundo vendiendo su arte y música, manteniendo su identidad y cabello largo trenzado." },
  { id: "xavante", name: "Xavante", region: "Brasil (Mato Grosso)", lat: -14.0, lon: -52.0, desc: "Conocidos como el 'Pueblo Verdadero'. Famosos por sus carreras de relevos con troncos de burití pesados (Uiww) que demuestran fuerza y cohesión social." },
  { id: "bororo", name: "Bororo", region: "Brasil (Mato Grosso)", lat: -16.0, lon: -54.0, desc: "Famosos por sus complejos rituales funerarios que duran semanas. Creen que al morir se convierten en guacamayos. Claude Lévi-Strauss estudió su estructura social dual." },
  { id: "tukano", name: "Tukano", region: "Colombia (Vaupés)", lat: 0.5, lon: -69.0, desc: "Maestros del simbolismo. Pintan las fachadas de sus malocas con diseños geométricos. Practican la exogamia lingüística: deben casarse con alguien que hable otro idioma." },
  { id: "desana", name: "Desana", region: "Colombia (Vaupés)", lat: 0.8, lon: -69.5, desc: "Hijos del Viento. Creen que el universo es un gran circuito de energía de colores. Son famosos por su mitología compleja que describe el cerebro humano y la biología." },
  { id: "huni_kuin", name: "Huni Kuin (Kaxinawá)", region: "Brasil/Perú", lat: -9.0, lon: -71.0, desc: "La 'Gente Verdadera'. Famosos por su arte del tejido 'Kene' y el uso de medicinas sagradas (Nixi Pae). Han abierto su cultura al mundo a través de festivales y arte." },
  { id: "yanesha", name: "Yanesha", region: "Perú (Pasco)", lat: -10.5, lon: -75.0, desc: "Tienen una historia única de integración, incluyendo influencias franciscanas antiguas en su música. Su líder histórico, Juan Santos Atahualpa, nunca fue derrotado." },
  { id: "ayoreo", name: "Ayoreo", region: "Paraguay/Bolivia", lat: -20.0, lon: -60.0, desc: "Algunos grupos permanecen en aislamiento voluntario en el Chaco (Totobiegosode). Famosos por su resistencia a los bulldozers que destruyen su bosque." },
  { id: "diaguita", name: "Diaguita", region: "Argentina/Chile", lat: -29.0, lon: -70.0, desc: "Maestros de la cerámica en el desierto. Resistieron al Inca y al Español. Su arte se caracteriza por patrones geométricos y felinos. Viven en los valles transversales." },
  { id: "atacama", name: "Likan Antai (Atacameño)", region: "Chile (Atacama)", lat: -23.0, lon: -68.0, desc: "Habitantes del desierto más árido del mundo. Construyeron fortalezas de piedra (Pukaras). Famosos por su uso de tabletas de rapé para rituales chamánicos." },
  { id: "palikur", name: "Palikur", region: "Brasil/Guayana", lat: 3.5, lon: -51.5, desc: "Grandes astrónomos del Amazonas. Conocen decenas de constelaciones que guían sus ciclos de pesca y siembra. Viven en las zonas pantanosas de la costa." },
  { id: "wajapi", name: "Wajãpi", region: "Brasil (Amapá)", lat: 1.0, lon: -52.0, desc: "Su arte gráfico 'Kusiwa' (pintura corporal con tintes vegetales) es Patrimonio Inmaterial de la Humanidad. Es un sistema de comunicación complejo sobre su cosmología." },
  { id: "kalapalo", name: "Kalapalo", region: "Brasil (Xingu)", lat: -11.5, lon: -53.0, desc: "No consumen animales de sangre caliente por tabú. Son famosos por su música y rituales donde usan flautas sagradas que las mujeres no pueden ver." },

  // --- ÁFRICA (DIVERSIDAD TRIBAL) ---
  { id: "baka", name: "Baka", region: "Camerún/Gabón", lat: 3.0, lon: 13.0, desc: "Maestros de la selva. Pescan represando ríos y usan el canto 'Yelli' de las mujeres para encantar a los animales antes de la caza. Tienen un conocimiento botánico inmenso." },
  { id: "batwa", name: "Batwa", region: "Uganda/Ruanda", lat: -1.0, lon: 29.5, desc: "Los guardianes del bosque de los gorilas. Fueron expulsados de los parques nacionales y luchan por mantener su identidad. Son expertos alfareros y bailarines." },
  { id: "herero", name: "Herero", region: "Namibia", lat: -21.0, lon: 18.0, desc: "Famosos por la vestimenta de sus mujeres, que adaptaron los vestidos victorianos alemanes con grandes tocados de cuernos de vaca. Sobrevivieron al primer genocidio del siglo XX." },
  { id: "luo", name: "Luo", region: "Kenia (Lago Victoria)", lat: -0.5, lon: 34.5, desc: "Pueblo de pescadores del Nilo. Tienen una tradición de remover los seis dientes inferiores en la iniciación. Barack Obama es de ascendencia Luo." },
  { id: "kikuyu", name: "Kikuyu", region: "Kenia (Central)", lat: -0.5, lon: 37.0, desc: "El grupo más grande de Kenia. Agricultores del Monte Kenia (Kirinyaga), donde reside su dios Ngai. Lideraron la rebelión del Mau Mau por la independencia." },
  { id: "mandinka", name: "Mandinka", region: "África Occidental", lat: 12.0, lon: -8.0, desc: "Descendientes del Imperio de Malí. Famosos por sus 'Griots' que tocan la Kora (arpa-laúd) y guardan la memoria oral de siglos. Son predominantemente musulmanes." },
  { id: "bambara", name: "Bambara", region: "Malí", lat: 13.0, lon: -6.0, desc: "Famosos por el 'Bogolanfini' (tela de barro), textiles teñidos con arcilla fermentada. Su arte de marionetas y máscaras Chiwara (antílope) es reconocido mundialmente." },
  { id: "mossi", name: "Mossi", region: "Burkina Faso", lat: 12.0, lon: -1.5, desc: "El 'Pueblo de los Caballos'. Tienen una aristocracia ecuestre antigua. Sus máscaras altas y verticales aparecen en funerales para guiar el alma del difunto." },
  { id: "songhai", name: "Songhai", region: "Malí/Níger", lat: 16.0, lon: -0.5, desc: "Herederos del Imperio Songhai, uno de los más grandes de África. Dominaron el comercio transahariano de sal y oro. Viven a lo largo del río Níger." },
  { id: "hausa", name: "Hausa", region: "Nigeria/Níger", lat: 12.0, lon: 8.0, desc: "Famosos comerciantes y artesanos del cuero y el índigo. Su arquitectura tradicional de adobe con decoraciones en relieve es espectacular. Su idioma es lengua franca." },
  { id: "swazi", name: "Swazi", region: "Eswatini", lat: -26.5, lon: 31.5, desc: "Celebran el 'Umhlanga' (Danza de los Juncos), donde miles de doncellas bailan para la Reina Madre. Mantienen una monarquía absoluta tradicional fuerte." },
  { id: "basotho", name: "Basotho", region: "Lesoto", lat: -29.5, lon: 28.0, desc: "La 'Gente de las Mantas'. Viven en las montañas más altas del sur de África. Famosos por sus sombreros cónicos (Mokorotlo) y sus resistentes ponis de montaña." },
  { id: "venda", name: "Venda", region: "Sudáfrica (Limpopo)", lat: -22.5, lon: 30.0, desc: "Guardianes del lago sagrado Fundudzi. Famosos por la danza de la serpiente 'Domba', realizada por mujeres jóvenes que emulan el movimiento de una pitón." },
  { id: "tigray", name: "Tigray", region: "Etiopía (Norte)", lat: 14.0, lon: 39.0, desc: "Herederos del Reino de Aksum. Custodios de iglesias talladas en roca inaccesibles en acantilados. Poseen una antigua tradición cristiana ortodoxa y escritura propia." },
  { id: "nubian", name: "Nubio", region: "Egipto/Sudán", lat: 22.0, lon: 32.0, desc: "Una de las civilizaciones más antiguas, los 'Faraones Negros'. Sus aldeas son famosas por casas coloridas con bóvedas de ladrillo. Desplazados por la presa de Asuán." },
  { id: "beja", name: "Beja", region: "Sudán (Mar Rojo)", lat: 19.0, lon: 36.0, desc: "Pastores de camellos guerreros, conocidos como 'Fuzzy-Wuzzy' por los británicos debido a su gran cabello afro. Han controlado las minas de oro del desierto por milenios." },
  { id: "sidama", name: "Sidama", region: "Etiopía (Sur)", lat: 6.5, lon: 38.5, desc: "El pueblo del café. Tienen su propio año nuevo 'Fichee-Chambalaalla'. Su estructura social democrática 'Luwa' es muy antigua. Viven en casas de bambú tejidas." },
  { id: "konso", name: "Konso", region: "Etiopía", lat: 5.3, lon: 37.4, desc: "Patrimonio de la UNESCO por sus paisajes de terrazas de piedra y aldeas fortificadas. Tallan estatuas de madera 'Waga' para honrar a héroes muertos." },
  { id: "yao", name: "Yao", region: "Malawi/Mozambique", lat: -13.5, lon: 35.5, desc: "Famosos por convertirse al Islam en el siglo XIX. Mantienen tradiciones de iniciación fuertes (Jando). Fueron comerciantes clave entre la costa e interior." },
  { id: "karamojong", name: "Karamojong", region: "Uganda", lat: 2.5, lon: 34.0, desc: "Pastores guerreros que viven en 'Manyattas' (aldeas espinosas). Valoran el ganado por encima de todo. Tienen una cultura de adornos corporales y escarificaciones compleja." },

  // --- ASIA (MINORÍAS Y TRIBUS) ---
  { id: "yi", name: "Yi (Nuosu)", region: "China (Sichuan)", lat: 28.0, lon: 103.0, desc: "Famosos por el Festival de la Antorcha. Tienen su propia escritura antigua y una religión chamánica (Bimoismo). Viven en las Montañas Liangshan." },
  { id: "miao", name: "Miao (Hmong)", region: "China (Guizhou)", lat: 26.5, lon: 107.0, desc: "Conocidos por sus espectaculares joyas de plata y bordados. Sus peinados elaborados a veces incluyen cabello de ancestros. Celebran festivales de lucha de búfalos." },
  { id: "bai", name: "Bai", region: "China (Yunnan)", lat: 25.5, lon: 100.0, desc: "El 'Pueblo Blanco'. Famosos por su arquitectura de casas blancas con pinturas exquisitas y el arte del teñido anudado (Tie-dye). Veneran a dioses locales Benzhu." },
  { id: "naxi", name: "Naxi", region: "China (Lijiang)", lat: 27.0, lon: 100.2, desc: "Poseen la única escritura pictográfica viva del mundo (Dongba). Su sociedad tiene fuertes elementos matriarcales y una música orquestal antigua única." },
  { id: "mosuo", name: "Mosuo", region: "China (Lago Lugu)", lat: 27.7, lon: 100.7, desc: "El 'Reino de las Mujeres'. Famosos por su sociedad matriarcal y el 'matrimonio ambulante', donde las parejas no conviven y los tíos crían a los sobrinos." },
  { id: "lahu", name: "Lahu", region: "Tailandia/China", lat: 22.0, lon: 99.5, desc: "Los 'Cazadores de Tigres'. Famosos por su habilidad en la caza y cestería. Su sociedad es muy igualitaria entre géneros. Visten trajes negros con bordados coloridos." },
  { id: "lisu", name: "Lisu", region: "Tailandia/Myanmar", lat: 26.0, lon: 98.5, desc: "Conocidos por sus túnicas multicolor brillantes. Celebran el año nuevo con un festival de 'escalada de árboles de cuchillos' y son expertos músicos de laúd." },
  { id: "bhil", name: "Bhil", region: "India (Rajastán)", lat: 24.5, lon: 74.0, desc: "Excelentes arqueros mencionados en las epopeyas hindúes. Su arte ritual 'Pithora' consiste en pintar caballos sagrados en las paredes para pedir favores a los dioses." },
  { id: "toda", name: "Toda", region: "India (Nilgiris)", lat: 11.4, lon: 76.6, desc: "Vegetarianos estrictos que viven en casas con forma de medio barril. Veneran al búfalo de agua sagrado y son famosos por sus chales bordados en rojo y negro." },
  { id: "chenchu", name: "Chenchu", region: "India (Andhra)", lat: 16.0, lon: 79.0, desc: "Cazadores-recolectores de la selva Nallamala. Expertos recolectores de miel que trepan acantilados. Tienen una relación simbiótica con los tigres de su reserva." },
  { id: "bishnoi", name: "Bishnoi", region: "India (Desierto Thar)", lat: 26.0, lon: 73.0, desc: "Los primeros ecologistas. Siguen 29 principios, incluyendo no cortar árboles verdes. Famosos por sacrificar sus vidas en 1730 para proteger un bosque (movimiento Chipko)." },
  { id: "apatani", name: "Apatani", region: "India (Arunachal)", lat: 27.5, lon: 93.8, desc: "Famosos por su sistema de agricultura de arroz y peces sostenible y por los tapones nasales de madera ('Yaping Hullo') que usaban las mujeres ancianas." },
  { id: "marsh_arab", name: "Ma'dan (Árabes de las Marismas)", region: "Irak", lat: 31.0, lon: 47.0, desc: "Viven en islas flotantes de juncos en los humedales del Tigris-Éufrates. Sus casas 'Mudhif' son catedrales de caña construidas sin clavos. Sobrevivieron al drenaje de Saddam." },
  { id: "bedul", name: "Bedul", region: "Jordania (Petra)", lat: 30.3, lon: 35.4, desc: "Los beduinos de Petra. Vivieron dentro de las tumbas nabateas hasta hace poco. Conocen los secretos de la ciudad antigua mejor que nadie." },
  { id: "hazara", name: "Hazara", region: "Afganistán", lat: 34.5, lon: 67.0, desc: "Descendientes de los mongoles en las montañas centrales. Chiitas en un país sunita, han sido perseguidos históricamente. Famosos por su hospitalidad y los Budas de Bamiyán." },
  { id: "pashtun", name: "Pashtún", region: "Afganistán/Pakistán", lat: 33.0, lon: 70.0, desc: "El grupo tribal patriarcal más grande del mundo. Se rigen por el 'Pashtunwali', un código estricto de honor, venganza y hospitalidad que precede al Islam." },
  { id: "baluchi", name: "Baluchi", region: "Irán/Pakistán", lat: 29.0, lon: 60.0, desc: "Nómadas de tierras áridas. Famosos por sus alfombras intrincadas y su música con el 'Sorud' (violín). Resisten en una región geopolítica compleja." },
  { id: "ket", name: "Ket", region: "Siberia (Yenisei)", lat: 63.0, lon: 88.0, desc: "Su lengua es única y está relacionada con las lenguas Na-Dene de los nativos americanos, el eslabón perdido entre Asia y América. Tradicionalmente vivían en barcazas." },
  { id: "nganasan", name: "Nganasan", region: "Siberia (Taimyr)", lat: 73.0, lon: 90.0, desc: "El pueblo más septentrional de Eurasia. Cazadores de renos salvajes a pie. Su chamanismo se considera uno de los más puros y arcaicos conservados." },
  { id: "yukaghir", name: "Yukaghir", region: "Siberia (Kolyma)", lat: 65.0, lon: 155.0, desc: "Antaño poderosos, ahora pocos. Famosos por sus 'Cartas de Amor' pictográficas escritas en corteza de abedul. Tienen una tradición de diseccionar a sus chamanes muertos como reliquias." },

  // --- OCEANÍA Y EUROPA (ADICIONALES) ---
  { id: "koori", name: "Koori", region: "Australia (NSW/Vic)", lat: -34.0, lon: 150.0, desc: "Pueblos aborígenes del sureste. Han liderado el renacimiento cultural urbano y el arte contemporáneo indígena. Guardianes de sitios sagrados en Sídney y Melbourne." },
  { id: "noongar", name: "Noongar", region: "Australia (Perth)", lat: -32.0, lon: 116.0, desc: "Tienen 6 estaciones ecológicas en lugar de 4. Famosos por el manejo del fuego para la caza y regeneración del bosque. Guardianes del río Swan." },
  { id: "murri", name: "Murri", region: "Australia (Queensland)", lat: -20.0, lon: 145.0, desc: "Pueblos del noreste. Famosos por el arte rupestre y la resistencia histórica. Incluyen a los creadores del arte 'X-ray' en el norte." },
  { id: "pitjantjatjara", name: "Pitjantjatjara", region: "Australia (Uluru)", lat: -25.3, lon: 131.0, desc: "Los guardianes tradicionales de Uluru (Ayers Rock). Su ley 'Tjukurpa' rige la vida diaria y la protección del monolito sagrado. Expertos rastreadores del desierto." },
  { id: "marquesan", name: "Marquesano", region: "Polinesia Francesa", lat: -9.0, lon: -140.0, desc: "Los guerreros más fieros de la Polinesia. Famosos por sus tatuajes de cuerpo entero y sus tallas en madera y hueso ('Tiki'). Su isla es el centro de dispersión polinesio." },
  { id: "cook", name: "Cook Islander", region: "Islas Cook", lat: -21.2, lon: -159.7, desc: "Los mejores tamborileros del Pacífico. Su danza es rápida y vibrante. Son maestros en la confección de 'Tivaevae' (colchas artísticas) y navegación estelar." },
  { id: "chuuk", name: "Chuukés", region: "Micronesia", lat: 7.4, lon: 151.8, desc: "Habitantes de una laguna gigante. Famosos por su 'Palo de Amor' tradicional y sus habilidades de navegación. Tienen clanes matrilineales fuertes." },
  { id: "motu", name: "Motu", region: "Papúa Nueva Guinea", lat: -9.5, lon: 147.1, desc: "Famosos por las expediciones comerciales 'Hiri', donde navegaban enormes canoas multiproas (Lagatoi) para intercambiar vasijas de barro por sagú. Viven cerca de Port Moresby." },
  { id: "sepik", name: "Sepik (Iatmul)", region: "Papúa Nueva Guinea", lat: -4.0, lon: 143.0, desc: "Los 'Hombres Cocodrilo'. En su iniciación, cortan la piel de la espalda para crear cicatrices que imitan las escamas del cocodrilo, su ancestro sagrado. Arte en madera increíble." },
  { id: "baining", name: "Baining", region: "Nueva Bretaña", lat: -4.5, lon: 151.5, desc: "Famosos por la espectacular 'Danza del Fuego', donde hombres con máscaras gigantes de ojos grandes bailan sobre brasas ardientes para invocar espíritus." },
  { id: "mari", name: "Mari", region: "Rusia (Volga)", lat: 56.5, lon: 48.0, desc: "Los 'Últimos Paganos de Europa'. Aún rezan en arboledas sagradas en lugar de iglesias, ofreciendo pan y miel a los dioses de la naturaleza. Su religión es oficial en su república." },
  { id: "udmurt", name: "Udmurt", region: "Rusia (Urales)", lat: 57.0, lon: 53.0, desc: "El pueblo con más pelirrojos del mundo. Famosos por sus festivales de canto y su resistencia a la asimilación. Veneran al dios del cielo Inmar." },
  { id: "bashkir", name: "Bashkir", region: "Rusia (Urales Sur)", lat: 54.0, lon: 56.0, desc: "Pueblo túrquico famoso por su miel silvestre y el 'Kurai', una flauta larga. Históricamente eran guerreros arqueros a caballo que lucharon contra Napoleón." },
  { id: "chuvash", name: "Chuvasio", region: "Rusia (Volga)", lat: 55.5, lon: 47.0, desc: "Descendientes de los hunos y búlgaros del Volga. Famosos por su cerveza tradicional y bordados rojos. Su idioma es el único sobreviviente de la rama huno-búlgara." },
  { id: "breton", name: "Bretón", region: "Francia (Bretaña)", lat: 48.0, lon: -3.0, desc: "Pueblo celta en el continente. Famosos por sus menhires, música de gaita (Biniou) y festivales 'Fest Noz'. Mantienen leyendas del Rey Arturo y la ciudad sumergida de Ys." },
  { id: "cornish", name: "Cornuallés", region: "Reino Unido (Cornualles)", lat: 50.3, lon: -4.8, desc: "Mineros de estaño legendarios y pueblo celta. Tienen lengua propia revivida. Famosos por sus leyendas de gigantes y el Castillo de Tintagel." },
  { id: "welsh", name: "Galés", region: "Reino Unido (Gales)", lat: 52.3, lon: -3.6, desc: "La 'Tierra del Canto'. Famosos por sus coros masculinos, el arpa y el Eisteddfod (festival de bardos). Tienen la tradición literaria continua más antigua de Europa fuera del latín." },
  { id: "gaelic", name: "Gaélico Escocés", region: "Escocia (Highlands)", lat: 57.0, lon: -4.5, desc: "Cultura de clanes, tartanes y gaitas. Famosos por su resistencia jacobita y la vida en las cañadas (Glens). Su idioma y música de violín son el alma de las Tierras Altas." },
  { id: "manx", name: "Manés", region: "Isla de Man", lat: 54.2, lon: -4.5, desc: "Cultura celta con influencias vikingas. Tienen el parlamento continuo más antiguo del mundo (Tynwald). Famosos por sus gatos sin cola y leyendas de hadas." },
  { id: "faroese", name: "Feroés", region: "Islas Feroe", lat: 62.0, lon: -7.0, desc: "Descendientes de vikingos en el Atlántico Norte. Famosos por su danza en cadena medieval y baladas orales. Viven de la pesca y la cría de ovejas en acantilados verdes." },
  // --- ASIA ORIENTAL Y SUDESTE (ARCHIPIÉLAGOS Y MONTAÑAS) ---
  { id: "atayal", name: "Atayal", region: "Taiwán", lat: 24.5, lon: 121.5, desc: "Pueblo indígena de las montañas de Taiwán. Famosos por sus tatuajes faciales que marcaban la madurez y habilidad en el tejido o la caza. Creen en 'Utux', el espíritu supremo ancestral." },
  { id: "ami", name: "Amis", region: "Taiwán (Costa)", lat: 23.5, lon: 121.5, desc: "El grupo indígena más grande de la isla. Son una sociedad matrilineal donde la herencia pasa a las hijas. Famosos por su Festival de la Cosecha (Ilisin) y sus polifonías vocales complejas." },
  { id: "tao", name: "Tao (Yami)", region: "Taiwán (Isla Orquídea)", lat: 22.0, lon: 121.5, desc: "Habitantes de la remota Isla Orquídea. Su cultura gira en torno al pez volador. Construyen barcos tradicionales ('Tatara') ensamblados sin clavos y pintados con ojos para ver en el mar." },
  { id: "jeju", name: "Haenyeo (Jeju)", region: "Corea del Sur (Jeju)", lat: 33.4, lon: 126.5, desc: "Aunque técnicamente una profesión, las Haenyeo son una cultura matriarcal única. Mujeres buceadoras que recogen mariscos a pulmón hasta los 80 años sin equipo moderno. Patrimonio de la Humanidad." },
  { id: "ryukyuan", name: "Ryukyuense", region: "Japón (Okinawa)", lat: 26.2, lon: 127.7, desc: "Pueblo indígena de las islas del sur. Tienen una religión propia centrada en sacerdotisas 'Noro' y el culto a los ancestros. Creadores del Karate y del tejido Bingata." },
  { id: "kalinga", name: "Kalinga", region: "Filipinas (Luzón)", lat: 17.4, lon: 121.0, desc: "Guerreros de la Cordillera. Famosos por sus tatuajes 'Batok' hechos con espinas. Whang-od, su tatuadora más anciana, es una leyenda viva. Resistieron la colonización española." },
  { id: "tboli", name: "T'boli", region: "Filipinas (Mindanao)", lat: 6.2, lon: 124.7, desc: "Los 'Tejedores de Sueños'. Tejen una tela sagrada (T'nalak) hecha de abacá, cuyos patrones son inspirados por los sueños enviados por la diosa Fu Dalu." },
  { id: "baduy", name: "Baduy (Kanekes)", region: "Indonesia (Java)", lat: -6.6, lon: 106.2, desc: "Viven en aislamiento voluntario a pocas horas de Yakarta. Los Baduy Interiores visten de blanco, no usan vehículos, electricidad ni calzado, y protegen el bosque sagrado prohibido." },
  { id: "toraja", name: "Toraja", region: "Indonesia (Sulawesi)", lat: -3.0, lon: 119.9, desc: "Famosos por sus casas 'Tongkonan' con forma de barco y sus ritos funerarios donde los muertos 'conviven' con la familia durante años antes del entierro en acantilados." },
  { id: "sasak", name: "Sasak", region: "Indonesia (Lombok)", lat: -8.6, lon: 116.3, desc: "Pueblo musulmán con tradiciones animistas 'Wektu Telu'. Famosos por sus suelos de casa hechos de una mezcla de tierra y estiércol de búfalo endurecido, y sus duelos con bastones." },
  { id: "iban", name: "Iban", region: "Borneo (Sarawak)", lat: 2.0, lon: 113.0, desc: "Los 'Dayak del Mar'. Antiguos cazadores de cabezas que viven en enormes casas comunales (Longhouses). Famosos por sus tatuajes de garganta y tejidos 'Pua Kumbu'." },
  { id: "moken_th", name: "Moken", region: "Tailandia/Myanmar", lat: 9.5, lon: 98.0, desc: "Nómadas del mar del archipiélago Mergui. Sus niños desarrollan la capacidad de enfocar bajo el agua contrayendo las pupilas como delfines para recolectar comida." },
  { id: "dong", name: "Dong (Kam)", region: "China (Guizhou)", lat: 26.0, lon: 109.0, desc: "Famosos por sus 'Torres del Tambor' de madera y 'Puentes del Viento y la Lluvia' construidos sin clavos. Su 'Gran Canción', un coro polifónico sin instrumentos, imita sonidos naturales." },
  { id: "hani", name: "Hani", region: "China (Yunnan)", lat: 23.1, lon: 102.7, desc: "Escultores de montañas. Crearon las Terrazas de Arroz de Honghe Hani durante 1300 años, un sistema ecológico complejo que es Patrimonio de la Humanidad." },
  { id: "manchu", name: "Manchú", region: "China (Noreste)", lat: 45.0, lon: 126.0, desc: "Pueblo tungúsico que gobernó China durante la dinastía Qing. Famosos por su destreza en la arquería a caballo y el vestido Qipao, que evolucionó de sus trajes tradicionales." },

  // --- INDIA Y ASIA CENTRAL (TRIBUS Y MINORÍAS) ---
  { id: "warli", name: "Warli", region: "India (Maharashtra)", lat: 19.8, lon: 72.8, desc: "Famosos por sus pinturas tribales blancas sobre paredes de barro rojo, usando formas geométricas básicas (círculo, triángulo) para representar la vida. Veneran a la madre naturaleza." },
  { id: "khond", name: "Kondha", region: "India (Odisha)", lat: 19.5, lon: 83.5, desc: "Conocidos por su antigua tradición de sacrificios humanos (Meriah) a la diosa tierra, hoy reemplazada por sacrificios de búfalos. Son excelentes horticultores de cúrcuma." },
  { id: "bodo", name: "Bodo", region: "India (Assam)", lat: 26.5, lon: 90.5, desc: "Expertos tejedores de seda y cultivadores de arroz. Tienen una larga historia de lucha por su identidad cultural y autonomía. Su danza Bagurumba imita el movimiento de las mariposas." },
  { id: "lepcha", name: "Lepcha", region: "India (Sikkim)", lat: 27.5, lon: 88.5, desc: "Los habitantes originales de Sikkim. Se llaman a sí mismos 'Rongkup' (Hijos de Dios). Tienen un conocimiento enciclopédico de las plantas del Himalaya y su propia escritura." },
  { id: "siddis", name: "Siddi", region: "India (Gujarat/K'taka)", lat: 21.0, lon: 70.5, desc: "Indios de ascendencia africana (Bantú) que llegaron hace siglos. Mantienen tradiciones musicales africanas como el tambor Goma, mezcladas con cultura india." },
  { id: "brokpa", name: "Brokpa", region: "India (Ladakh)", lat: 34.5, lon: 76.5, desc: "Se consideran los últimos arios puros. Viven aislados en los Himalayas. Famosos por sus tocados de flores elaborados y por practicar el veganismo estricto y la poligamia." },
  { id: "nuristani", name: "Nuristaní", region: "Afganistán", lat: 35.5, lon: 71.0, desc: "Habitantes de 'Kafiristan' (Tierra de los infieles) hasta su conversión forzada en 1895. Famosos por sus ojos claros y tallas de madera intrincadas en casas de montaña." },
  { id: "pamiri", name: "Pamiri", region: "Tayikistán (Gorno-Badakhshan)", lat: 38.0, lon: 73.0, desc: "Habitantes del techo del mundo. Siguen el ismailismo (rama del Islam). Sus casas tradicionales 'Chid' tienen cinco pilares que simbolizan a la familia del Profeta y el zoroastrismo." },

  // --- AMÉRICA DEL NORTE (CALIFORNIA, ÁRTICO Y ESTE) ---
  { id: "gwichin", name: "Gwich'in", region: "Alaska/Canadá", lat: 67.0, lon: -145.0, desc: "La 'Gente del Caribú'. Su cultura y subsistencia dependen totalmente de la manada de caribúes Puercoespín. Luchan ferozmente contra la perforación petrolera en su refugio sagrado." },
  { id: "dene", name: "Dene", region: "Canadá (Territorios Noroeste)", lat: 62.0, lon: -114.0, desc: "Una gran familia lingüística del subártico. Famosos por sus juegos de manos tradicionales y el uso de tambores en ceremonias espirituales. Viajaban en grandes canoas de piel de alce." },
  { id: "ohlone", name: "Ohlone (Costanoan)", region: "USA (San Francisco)", lat: 37.5, lon: -122.0, desc: "Habitantes originales de la Bahía de San Francisco. Construían enormes montículos de conchas (Shellmounds). Expertos en el manejo de quemas controladas para gestionar el ecosistema." },
  { id: "miwok", name: "Miwok", region: "USA (Yosemite/Sierra)", lat: 38.0, lon: -120.0, desc: "Famosos por sus casas de corteza de cedro y por triturar bellotas en morteros de roca, alimento base de su dieta. Vivían en el valle de Yosemite (Ahwahnee)." },
  { id: "modoc", name: "Modoc", region: "USA (California/Oregón)", lat: 41.8, lon: -121.5, desc: "Libraron una guerra legendaria en los 'Lava Beds', donde 50 guerreros resistieron a 1000 soldados estadounidenses usando el terreno volcánico como fortaleza natural." },
  { id: "hupa", name: "Hupa", region: "USA (California Norte)", lat: 41.0, lon: -123.6, desc: "Gente del río Trinity. Famosos por sus ceremonias de la Piel de Ciervo Blanco y sus canoas talladas en troncos de secuoya. Nunca fueron desplazados de sus tierras ancestrales." },
  { id: "karuk", name: "Karuk", region: "USA (Río Klamath)", lat: 41.5, lon: -123.5, desc: "Los únicos nativos de California que cultivaban tabaco. Son famosos por su manejo del fuego ('Agroforestería') para prevenir incendios y mejorar la cosecha de cestas." },
  { id: "washoe", name: "Washoe", region: "USA (Lago Tahoe)", lat: 39.0, lon: -119.9, desc: "Consideran el Lago Tahoe (Da ow ga) el centro de su mundo. Son famosos por sus canastas tejidas de sauce, consideradas obras de arte de talla mundial (ej. Dat So La Lee)." },
  { id: "lenape", name: "Lenape (Delaware)", region: "USA (Nueva York/NJ)", lat: 40.5, lon: -74.0, desc: "Los 'Abuelos'. Habitantes originales de Manhattan. Firmaron el primer tratado con EE.UU. Su sistema de clanes matrilineales (Lobo, Tortuga, Pavo) es central en su sociedad." },
  { id: "abenaki", name: "Abenaki", region: "USA/Canadá (Noreste)", lat: 45.0, lon: -71.0, desc: "La 'Gente del Amanecer'. Resistieron la colonización inglesa aliándose con los franceses. Famosos por sus canoas de corteza y su mitología sobre Gluskabe, el transformador." },
  { id: "chickasaw", name: "Chickasaw", region: "USA (Sureste)", lat: 34.0, lon: -89.0, desc: "Conocidos como los 'Espartanos del Bajo Mississippi' por su destreza militar. Nunca perdieron una guerra importante hasta su remoción forzada. Sociedad guerrera feroz." },
  { id: "caddo", name: "Caddo", region: "USA (Texas/Luisiana)", lat: 31.5, lon: -94.0, desc: "Constructores de montículos y expertos agricultores. El nombre 'Texas' proviene de su palabra 'Taysha' (amigo). Famosos por su cerámica fina grabada y danzas de pavo." },

  // --- AMÉRICA DEL SUR (AMAZONAS, CHACO Y PATAGONIA) ---
  { id: "barasana", name: "Barasana", region: "Colombia (Vaupés)", lat: 0.1, lon: -70.5, desc: "Famosos por sus 'Malocas' cósmicas y el uso del Yagé. Tocan flautas sagradas 'Yuruparí' que representan a los ancestros y están prohibidas para mujeres y niños." },
  { id: "witoto", name: "Witoto (Murui)", region: "Colombia/Perú", lat: -1.5, lon: -73.0, desc: "Gente del tabaco y la coca verde (Mambe). Sobrevivieron al genocidio de las caucheras a principios del siglo XX. Su palabra es dulce y buscan 'enfriar' el corazón a través del diálogo." },
  { id: "achuar", name: "Achuar", region: "Ecuador/Perú", lat: -2.5, lon: -77.0, desc: "Cultura de los sueños. Se levantan antes del amanecer para beber té de guayusa y compartir sueños, que guían sus decisiones del día. Practicaban la reducción de cabezas." },
  { id: "zapara", name: "Zápara", region: "Ecuador (Pastaza)", lat: -1.8, lon: -76.0, desc: "Patrimonio Oral de la Humanidad por la UNESCO. Su lengua estaba a punto de extinguirse con solo 5 hablantes. Tienen un conocimiento profundo de la medicina de la selva." },
  { id: "chiquitano", name: "Chiquitano", region: "Bolivia (Santa Cruz)", lat: -17.0, lon: -60.0, desc: "Famosos por su música barroca misional. Construyeron las misiones jesuíticas de la Chiquitanía (UNESCO). Son el grupo indígena más numeroso del oriente boliviano." },
  { id: "siriono", name: "Sirionó", region: "Bolivia (Beni)", lat: -14.0, lon: -64.0, desc: "Nómadas de la selva conocidos por tener arcos de más de 2 metros de largo, los más grandes del mundo. Caminaban largas distancias buscando caza y miel." },
  { id: "guajajara", name: "Guajajara", region: "Brasil (Maranhão)", lat: -4.5, lon: -46.0, desc: "Famosos por los 'Guardianes del Bosque', un grupo de autodefensa que patrulla la selva armada para proteger a sus vecinos no contactados (Awá) de madereros ilegales." },
  { id: "pataxo", name: "Pataxó", region: "Brasil (Bahia)", lat: -16.5, lon: -39.0, desc: "El pueblo del primer contacto con los portugueses en 1500. Famosos por sus faldas de fibra y tocados de plumas. Resisten en la zona turística del 'Descubrimiento'." },
  { id: "zoe", name: "Zo'é", region: "Brasil (Pará)", lat: -1.8, lon: -55.5, desc: "Contactados recientemente (años 80). Famosos por el 'Poturu', un palo de madera que atraviesa su labio inferior permanentemente. Viven en un estado de aislamiento relativo." },
  { id: "enawene", name: "Enawenê-Nawê", region: "Brasil (Mato Grosso)", lat: -12.5, lon: -59.0, desc: "No comen carne roja, solo pescado y vegetales. Construyen presas de pesca de madera elaboradas durante su ritual 'Yãkwa', reconocido por la UNESCO." },
  { id: "kawesqar", name: "Kawésqar (Alacalufes)", region: "Chile (Patagonia)", lat: -50.0, lon: -74.5, desc: "Nómadas del mar de los canales patagónicos. Vivían en canoas, con fuego siempre encendido a bordo. Se untaban grasa de lobo marino para resistir el frío extremo." },
  { id: "yagan", name: "Yagán (Yámana)", region: "Chile/Argentina (Cabo de Hornos)", lat: -55.0, lon: -68.0, desc: "Los habitantes más australes del mundo. Navegaban las aguas heladas en canoas de corteza. Su lengua tenía una palabra, 'Mamihlapinatapai', famosa por su complejidad de significado." },
  { id: "wapishana", name: "Wapishana", region: "Guyana/Brasil", lat: 2.5, lon: -59.5, desc: "Expertos rastreadores y tejedores de hamacas. Han creado un mapa digital masivo de su territorio usando drones y GPS para monitorear la minería ilegal y proteger sus sabanas." },

  // --- ÁFRICA (CENTRAL, OESTE Y SUR) ---
  { id: "nuer", name: "Nuer", region: "Sudán del Sur", lat: 8.5, lon: 31.0, desc: "Pastores nilóticos famosos por su escarificación facial 'Gaar' (seis líneas horizontales en la frente). Su sociedad es intensamente igualitaria y centrada en el ganado." },
  { id: "shilluk", name: "Shilluk", region: "Sudán del Sur (Nilo)", lat: 9.5, lon: 31.5, desc: "Fundaron un reino divino en el siglo XV a orillas del Nilo Blanco. Su rey (Reth) es considerado la encarnación del héroe cultural Nyikang y tiene autoridad espiritual." },
  { id: "makonde", name: "Makonde", region: "Mozambique/Tanzania", lat: -11.0, lon: 39.0, desc: "Maestros escultores de madera de ébano. Famosos por sus tallas 'Ujamaa' (árbol de la vida) y máscaras 'Mapiko'. Practican tatuajes faciales y limado de dientes." },
  { id: "chewa", name: "Chewa", region: "Malawi", lat: -13.5, lon: 34.0, desc: "Famosos por la danza de máscaras 'Gule Wamkulu' (El Gran Baile), donde representan espíritus de animales y ancestros. Es una sociedad secreta religiosa (Nyau)." },
  { id: "lozi", name: "Lozi", region: "Zambia (Barotseland)", lat: -15.5, lon: 23.0, desc: "Gente de la llanura de inundación. Famosos por la ceremonia 'Kuomboka', donde el rey mueve su corte en una barcaza real gigante (Nalikwanda) cuando el Zambeze se desborda." },
  { id: "damara", name: "Damara", region: "Namibia", lat: -20.5, lon: 15.0, desc: "Uno de los pueblos más antiguos de Namibia. Su origen es un misterio antropológico (hablan lengua de chasquidos pero son físicamente bantúes). Maestros herreros y del fuego." },
  { id: "fon", name: "Fon", region: "Benín", lat: 7.0, lon: 2.0, desc: "Fundadores del Reino de Dahomey. Famosos por las 'Amazonas de Dahomey', un ejército de mujeres guerreras de élite. Cuna de la religión vudú original." },
  { id: "ewe", name: "Ewé", region: "Togo/Ghana", lat: 6.5, lon: 1.0, desc: "Conocidos por sus complejos ritmos de percusión y la tela Kente (junto a los Ashanti). Tienen una fuerte tradición de culto a los ancestros y deidades vudú." },
  { id: "kru", name: "Kru", region: "Liberia", lat: 5.0, lon: -8.5, desc: "Marineros legendarios. Se tatuaban una línea azul en la frente. Fueron los únicos africanos que resistieron la esclavitud trabajando en barcos europeos en lugar de ser capturados." },
  { id: "mende", name: "Mende", region: "Sierra Leona", lat: 8.0, lon: -11.0, desc: "Famosos por la sociedad secreta femenina 'Sande', que inicia a las niñas y usa las máscaras 'Bundu', las únicas máscaras africanas usadas exclusivamente por mujeres." },
  { id: "tsonga", name: "Tsonga (Shangaan)", region: "Sudáfrica/Moz", lat: -24.0, lon: 31.5, desc: "Famosos por su música de marimba rápida y danza Xibelani, donde las mujeres usan faldas coloridas muy voluminosas (Tinguvu) que sacuden con la cintura." },
  { id: "bunyoro", name: "Bunyoro", region: "Uganda", lat: 1.5, lon: 31.3, desc: "Uno de los reinos más antiguos de África Oriental (Bunyoro-Kitara). Famosos por su ceremonia de coronación 'Empango' y sus tradiciones de herrería y sal." },

  // --- EUROPA Y CÁUCASO (MONTAÑAS Y LENGUAS AISLADAS) ---
  { id: "chechen", name: "Checheno", region: "Rusia (Chechenia)", lat: 43.3, lon: 45.7, desc: "Pueblo Vainaj de las montañas. Famosos por sus torres medievales de piedra y su código de honor 'Nokhchalla'. Su danza Lezginka es rápida y acrobática." },
  { id: "avar", name: "Ávaros", region: "Rusia (Daguestán)", lat: 42.5, lon: 46.5, desc: "El grupo más grande del Daguestán montañoso. Guerreros históricos y maestros orfebres y artesanos de la plata. Su lengua tiene una fonética extremadamente compleja." },
  { id: "svan", name: "Svan", region: "Georgia (Svaneti)", lat: 43.0, lon: 42.5, desc: "Viven en los valles habitados más altos del Cáucaso. Famosos por sus torres defensivas familiares (Koshki) y su canto polifónico arcaico, anterior al cristianismo." },
  { id: "ossetian", name: "Osetio", region: "Osetia (Cáucaso)", lat: 42.5, lon: 44.0, desc: "Descendientes directos de los antiguos escitas y alanos. Mantienen una mitología épica antigua (Nart) y tradiciones de brindis rituales con cerveza." },
  { id: "kalash_eu", name: "Hutsul", region: "Ucrania (Cárpatos)", lat: 48.5, lon: 24.5, desc: "Montañeses de los Cárpatos. Famosos por sus trajes coloridos, hachas ceremoniales (Bartka) y el instrumento Trembita (cuerno alpino largo) para comunicarse entre montañas." },
  { id: "goral", name: "Goral", region: "Polonia (Tatras)", lat: 49.3, lon: 20.0, desc: "Montañeses orgullosos del sur de Polonia. Tienen un dialecto, música y trajes únicos. Famosos por su queso ahumado 'Oscypek' y su habilidad arquitectónica en madera." },
  { id: "livonian", name: "Livonio", region: "Letonia (Costa)", lat: 57.5, lon: 22.0, desc: "Uno de los pueblos más pequeños de Europa, casi extinto. Pescadores del Báltico con lengua urálica. Su bandera verde-blanca-azul representa bosque, arena y mar." },
  { id: "veps", name: "Vepsi", region: "Rusia (Carelia)", lat: 61.5, lon: 35.0, desc: "Pueblo finlandés del bosque. Famosos por su magia tradicional y lamentos rituales. Han vivido entre los lagos Onega y Ladoga durante milenios." },

  // --- OCEANÍA (ISLAS Y DESIERTO) ---
  { id: "torres", name: "Isleños del Estrecho de Torres", region: "Australia (Norte)", lat: -10.0, lon: 142.5, desc: "Cultura melanesia única entre Australia y PNG. Famosos por sus tocados 'Dhari' y su navegación estelar. Su bandera es oficial en Australia." },
  { id: "tiwi_is", name: "Tiwi", region: "Australia (Islas Tiwi)", lat: -11.6, lon: 130.9, desc: "Aislados durante miles de años. Famosos por sus postes funerarios 'Pukumani' tallados y pintados, y su arte textil moderno vibrante. Aman el fútbol australiano." },
  { id: "warlpiri", name: "Warlpiri", region: "Australia (Desierto Tanami)", lat: -20.0, lon: 130.0, desc: "Famosos por su arte acrílico del desierto que representa el 'Dreaming'. Realizan ceremonias de fuego y mantienen conexiones complejas con la tierra a través de líneas de canción." },
  { id: "arrernte", name: "Arrernte", region: "Australia (Alice Springs)", lat: -23.7, lon: 133.9, desc: "Guardianes de la cordillera MacDonnell. Su sistema de parentesco es tan complejo que fascinó a los antropólogos. Tienen un profundo conocimiento del agua en el desierto." },
  { id: "trobriand", name: "Trobriandeses", region: "Papúa Nueva Guinea", lat: -8.6, lon: 151.0, desc: "Famosos por el 'Anillo Kula', un sistema de intercambio ceremonial de collares y brazaletes de concha que viajan cientos de kilómetros en canoa para crear prestigio." },
  { id: "fore", name: "Fore", region: "Papúa Nueva Guinea", lat: -6.5, lon: 145.5, desc: "Pueblo de las tierras altas. Conocidos tristemente por la enfermedad 'Kuru', causada por antiguos rituales funerarios de endocanibalismo (comer el cerebro de ancestros)." },
  { id: "bougainville", name: "Bougainville", region: "Papúa Nueva Guinea", lat: -6.0, lon: 155.0, desc: "Tienen la pigmentación de piel más oscura del mundo. Lucharon una guerra civil ecológica para cerrar una mina de cobre gigante. Están en proceso de independencia." },
  { id: "nauru", name: "Nauruano", region: "Nauru", lat: -0.5, lon: 166.9, desc: "Habitantes de una isla de fosfato aislada. Tienen 12 tribus históricas representadas en su bandera. Famosos por su habilidad para atrapar aves fragata al vuelo." },
  { id: "tuvaluan", name: "Tuvaluano", region: "Tuvalu", lat: -8.5, lon: 179.0, desc: "Viven en atolones que apenas sobresalen del mar. Famosos por el 'Fatele', danza donde se canta y golpea cajas de madera. Enfrentan la desaparición total de su país." },
  { id: "wallisian", name: "Wallisiano", region: "Wallis y Futuna", lat: -13.3, lon: -176.2, desc: "Cultura polinesia fuertemente jerarquizada con reyes tradicionales (Lavelua) reconocidos por Francia. Famosos por la ceremonia de bebida de Kava real." }
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
