const productos = [
  // ===================== SUPLEMENTACIÓN (16) =====================
  {
    id: "e5544c74-27d2-4a60-b640-6d4644c78d27",
    nombre: "Whey Protein Concentrado 1kg",
    precio: 25000,
    categoria: "Suplementación",
    imagen: "https://placehold.co/400x300/0d0d0d/b7ff00?text=Whey+Protein",
    descripcion: "Proteína de suero de leche, sabor chocolate, ideal para recuperación muscular post-entrenamiento.",
    stock: 15
  },
  {
    id: "4c3817f6-e083-4d47-a965-a57dfc66c5fe",
    nombre: "Creatina Monohidratada 300g",
    precio: 18000,
    categoria: "Suplementación",
    imagen: "https://placehold.co/400x300/0d0d0d/b7ff00?text=Creatina",
    descripcion: "Creatina pura sin sabor, mejora la fuerza y el rendimiento en entrenamientos de alta intensidad.",
    stock: 20
  },
  {
    id: "365372dc-c160-45d1-9aa2-b82970bdfe7f",
    nombre: "BCAA en Polvo 400g",
    precio: 16500,
    categoria: "Suplementación",
    imagen: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=80&auto=format&fit=crop",
    descripcion: "Aminoácidos ramificados, sabor frutilla, ayuda a reducir la fatiga muscular.",
    stock: 18
  },
  {
    id: "a44d78c6-0a67-4f31-904f-f9d82de1f0b1",
    nombre: "Multivitamínico x60 comprimidos",
    precio: 12000,
    categoria: "Suplementación",
    imagen: "https://images.unsplash.com/photo-1709976142774-ce1ef41a8378?w=800&q=80&auto=format&fit=crop",
    descripcion: "Complejo vitamínico completo para complementar la dieta de un deportista.",
    stock: 22
  },
  {
    id: "e97b83c5-f245-4fd3-bd33-0bbb2ab02a40",
    nombre: "Glutamina 300g",
    precio: 14000,
    categoria: "Suplementación",
    imagen: "https://images.unsplash.com/photo-1683394572742-1e471f60fc2a?w=800&q=80&auto=format&fit=crop",
    descripcion: "Aminoácido que favorece la recuperación muscular y fortalece el sistema inmune.",
    stock: 16
  },
  {
    id: "477aeea1-d4e4-4c98-a38a-3ae76f86a985",
    nombre: "Pre-Entreno Explosivo 250g",
    precio: 21000,
    categoria: "Suplementación",
    imagen: "https://images.unsplash.com/photo-1724160167551-2ffc3d7ca809?w=800&q=80&auto=format&fit=crop",
    descripcion: "Fórmula con cafeína y beta-alanina para aumentar energía y foco antes de entrenar.",
    stock: 12
  },
  {
    id: "2e431c80-f520-41cc-866f-023b21640cda",
    nombre: "Proteína Vegana 900g",
    precio: 27000,
    categoria: "Suplementación",
    imagen: "https://images.unsplash.com/photo-1693996045838-980674653385?w=800&q=80&auto=format&fit=crop",
    descripcion: "Mezcla de proteína de arveja y arroz, sabor vainilla, apta para dietas plant-based.",
    stock: 10
  },
  {
    id: "7f6e594b-5e94-48ca-9f1b-475df89cb469",
    nombre: "Caseína Micelar 900g",
    precio: 26500,
    categoria: "Suplementación",
    imagen: "https://images.unsplash.com/photo-1693996046147-df51fcf78ebc?w=800&q=80&auto=format&fit=crop",
    descripcion: "Proteína de digestión lenta, ideal para tomar antes de dormir.",
    stock: 11
  },
  {
    id: "ff7b089b-a7f0-42a3-b137-47a509afb6dd",
    nombre: "Omega 3 x90 cápsulas",
    precio: 9800,
    categoria: "Suplementación",
    imagen: "https://images.unsplash.com/photo-1709976142774-ce1ef41a8378?w=800&q=80&auto=format&fit=crop",
    descripcion: "Ácidos grasos esenciales que ayudan a la salud cardiovascular y articular.",
    stock: 24
  },
  {
    id: "ff2e82e4-d4bc-4f5e-ab55-7ed4760630b8",
    nombre: "Colágeno Hidrolizado 300g",
    precio: 13500,
    categoria: "Suplementación",
    imagen: "https://images.unsplash.com/photo-1724160167630-a33086ddb552?w=800&q=80&auto=format&fit=crop",
    descripcion: "Colágeno tipo I y III, favorece la salud de piel, articulaciones y tendones.",
    stock: 19
  },
  {
    id: "b243e81a-f8a0-41e1-8c86-c7a9ec23c4d8",
    nombre: "Quemador de Grasa Termogénico x60",
    precio: 17800,
    categoria: "Suplementación",
    imagen: "https://images.unsplash.com/photo-1709976142749-4a83767c4228?w=800&q=80&auto=format&fit=crop",
    descripcion: "Fórmula termogénica con cafeína y té verde para apoyar la definición muscular.",
    stock: 13
  },
  {
    id: "f16f7b22-b0c6-42ce-807f-4c89dd5bd2c3",
    nombre: "Barritas Proteicas Caja x12",
    precio: 15000,
    categoria: "Suplementación",
    imagen: "https://placehold.co/400x300?text=Barritas+Proteicas",
    descripcion: "Barritas con 20g de proteína cada una, sabor brownie, snack post-entreno.",
    stock: 27
  },
  {
    id: "fd2ab01b-1779-4d8c-b3ff-d7b9290a4f5e",
    nombre: "Maltodextrina 1kg",
    precio: 11000,
    categoria: "Suplementación",
    imagen: "https://images.unsplash.com/photo-1724160167630-a33086ddb552?w=800&q=80&auto=format&fit=crop",
    descripcion: "Carbohidrato de rápida absorción, ideal para recargar energía en entrenamientos largos.",
    stock: 17
  },
  {
    id: "bfb0722e-982c-4392-b8c8-a010b0b6d93a",
    nombre: "ZMA x90 cápsulas",
    precio: 10500,
    categoria: "Suplementación",
    imagen: "https://images.unsplash.com/photo-1709976142749-4a83767c4228?w=800&q=80&auto=format&fit=crop",
    descripcion: "Zinc, magnesio y vitamina B6, apoya el descanso y la recuperación nocturna.",
    stock: 21
  },
  {
    id: "c34c085e-2e46-4be8-8f7a-e76922c0091f",
    nombre: "Electrolitos en Polvo 300g",
    precio: 8900,
    categoria: "Suplementación",
    imagen: "https://images.unsplash.com/photo-1764182350435-ed46f1e93c2f?w=800&q=80&auto=format&fit=crop",
    descripcion: "Repone sales minerales perdidas por transpiración durante el ejercicio intenso.",
    stock: 26
  },
  {
    id: "7d25105e-e368-4a27-8596-ded2baf18253",
    nombre: "Aminoácidos Esenciales (EAA) 300g",
    precio: 19500,
    categoria: "Suplementación",
    imagen: "https://images.unsplash.com/photo-1693996045463-6ea86d10a2e7?w=800&q=80&auto=format&fit=crop",
    descripcion: "Los 9 aminoácidos esenciales que el cuerpo no puede producir por sí solo.",
    stock: 14
  },

  // ===================== ENTRENAMIENTO (16) =====================
  {
    id: "eb9c6b1f-a22d-440d-a159-58aa1503a2b6",
    nombre: "Colchoneta de Yoga",
    precio: 9500,
    categoria: "Entrenamiento",
    imagen: "https://placehold.co/300x300?text=Colchoneta",
    descripcion: "Colchoneta antideslizante de 6mm, ideal para yoga, pilates y ejercicios en el piso.",
    stock: 28
  },
  {
    id: "8bd0ad9d-b3e8-45b7-9960-3407c5a5d400",
    nombre: "Set de Mancuernas Ajustables",
    precio: 45000,
    categoria: "Entrenamiento",
    imagen: "https://placehold.co/300x300?text=Mancuernas",
    descripcion: "Par de mancuernas ajustables de 2 a 20kg cada una, ideales para entrenar en casa.",
    stock: 8
  },
  {
    id: "c4d6950b-bdb8-41d1-bc81-dd8b29011033",
    nombre: "Soga para Saltar (Speed Rope)",
    precio: 5500,
    categoria: "Entrenamiento",
    imagen: "https://placehold.co/300x300?text=Soga",
    descripcion: "Soga de velocidad con rulemanes, ideal para cardio y entrenamiento funcional.",
    stock: 35
  },
  {
    id: "62b34a68-8f5c-451b-90e2-8ce3056ffeb5",
    nombre: "Barra de Dominadas para Puerta",
    precio: 17500,
    categoria: "Entrenamiento",
    imagen: "https://placehold.co/300x300?text=Barra+Dominadas",
    descripcion: "Barra ajustable sin necesidad de perforar, soporta hasta 100kg de peso corporal.",
    stock: 14
  },
  {
    id: "850bf144-6090-40a4-92fc-69fdb3a8b5f8",
    nombre: "Bandas de Resistencia (Set x5)",
    precio: 12500,
    categoria: "Entrenamiento",
    imagen: "https://placehold.co/300x300?text=Set+Bandas",
    descripcion: "Set de 5 bandas de distinta resistencia, ideales para entrenamiento funcional.",
    stock: 24
  },
  {
    id: "0a463175-bd77-4e35-b686-499e78fc8594",
    nombre: "Kettlebell 8kg",
    precio: 19000,
    categoria: "Entrenamiento",
    imagen: "https://placehold.co/300x300?text=Kettlebell",
    descripcion: "Pesa rusa de fundición, ideal para entrenamientos de fuerza y resistencia.",
    stock: 11
  },
  {
    id: "8e57d41b-0771-45cc-98f4-1c1dcfdb5e65",
    nombre: "Disco Olímpico 10kg",
    precio: 21000,
    categoria: "Entrenamiento",
    imagen: "https://placehold.co/300x300?text=Disco+10kg",
    descripcion: "Disco de goma con orificio olímpico de 50mm, apto para barras estándar.",
    stock: 16
  },
  {
    id: "0ff3a699-1077-4ebc-a899-56996fe514ae",
    nombre: "Barra Olímpica 20kg",
    precio: 65000,
    categoria: "Entrenamiento",
    imagen: "https://placehold.co/300x300?text=Barra+Olimpica",
    descripcion: "Barra de acero de 20kg con rulemanes, soporta hasta 300kg de carga.",
    stock: 5
  },
  {
    id: "07dc4411-933e-4eb8-8c1a-a34e13132850",
    nombre: "Banco Plegable Multifunción",
    precio: 38000,
    categoria: "Entrenamiento",
    imagen: "https://placehold.co/300x300?text=Banco",
    descripcion: "Banco ajustable en varios ángulos, plegable para ahorrar espacio.",
    stock: 7
  },
  {
    id: "7553b6c1-89bf-4cd4-87a6-ec32f96a9f7b",
    nombre: "Step Aeróbico Ajustable",
    precio: 14500,
    categoria: "Entrenamiento",
    imagen: "https://placehold.co/300x300?text=Step",
    descripcion: "Plataforma ajustable en altura para rutinas de step y cardio.",
    stock: 19
  },
  {
    id: "9c7470ca-c3b3-4362-85ae-3ca0037a14ef",
    nombre: "Rueda Abdominal (Ab Roller)",
    precio: 6800,
    categoria: "Entrenamiento",
    imagen: "https://placehold.co/300x300?text=Ab+Roller",
    descripcion: "Rueda con doble apoyo para fortalecer el core de forma segura.",
    stock: 31
  },
  {
    id: "8a69ee33-ef1d-4a58-8414-35e293022e74",
    nombre: "TRX / Bandas de Suspensión",
    precio: 24500,
    categoria: "Entrenamiento",
    imagen: "https://placehold.co/300x300?text=TRX",
    descripcion: "Sistema de entrenamiento en suspensión con anclaje para puerta.",
    stock: 10
  },
  {
    id: "8d5e355f-abe8-4885-a3bf-72f688c41330",
    nombre: "Rodillo de Espuma (Foam Roller)",
    precio: 8200,
    categoria: "Entrenamiento",
    imagen: "https://placehold.co/300x300?text=Foam+Roller",
    descripcion: "Rodillo para liberación miofascial y recuperación post-entrenamiento.",
    stock: 22
  },
  {
    id: "bc0b0976-ba47-4f47-b012-14b640a5f75c",
    nombre: "Plataforma de Sentadillas",
    precio: 27500,
    categoria: "Entrenamiento",
    imagen: "https://placehold.co/300x300?text=Plataforma",
    descripcion: "Base antideslizante que mejora la estabilidad en sentadillas y pesos muertos.",
    stock: 9
  },
  {
    id: "13955930-f1be-4cae-b456-9b00691c594f",
    nombre: "Chaleco con Peso 10kg",
    precio: 33000,
    categoria: "Entrenamiento",
    imagen: "https://placehold.co/300x300?text=Chaleco+Peso",
    descripcion: "Chaleco lastrado ajustable para sumar intensidad a cualquier rutina.",
    stock: 6
  },
  {
    id: "38c2272e-74fb-476a-a50f-7f78f8627d63",
    nombre: "Escalera de Agilidad",
    precio: 9900,
    categoria: "Entrenamiento",
    imagen: "https://placehold.co/300x300?text=Escalera+Agilidad",
    descripcion: "Escalera plegable para ejercicios de velocidad y coordinación.",
    stock: 20
  },

  // ===================== NUTRICIÓN Y DIETAS (16) =====================
  {
    id: "a3d123a8-7caf-485b-a53d-fb6d37679072",
    nombre: "Batido Sustituto de Comida Vainilla 900g",
    precio: 19500,
    categoria: "Nutrición y Dietas",
    imagen: "https://placehold.co/300x300?text=Sustituto+Comida",
    descripcion: "Batido balanceado en macronutrientes, ideal para reemplazar una comida en dietas controladas.",
    stock: 14
  },
  {
    id: "e4bb0526-debf-48b0-a8d2-5f68242836a1",
    nombre: "Barritas de Cereal Integral x6",
    precio: 4800,
    categoria: "Nutrición y Dietas",
    imagen: "https://placehold.co/300x300?text=Barritas+Cereal",
    descripcion: "Barritas de avena y frutos secos, snack saludable entre comidas.",
    stock: 32
  },
  {
    id: "cb67f303-0b7f-419c-89c8-8f3abd623e72",
    nombre: "Avena Instantánea 1kg",
    precio: 5200,
    categoria: "Nutrición y Dietas",
    imagen: "https://placehold.co/300x300?text=Avena",
    descripcion: "Avena de cocción rápida, alta en fibra, ideal para el desayuno de un deportista.",
    stock: 29
  },
  {
    id: "51e67414-0603-4b9f-bb89-8290dc6943c6",
    nombre: "Mix de Frutos Secos 500g",
    precio: 8900,
    categoria: "Nutrición y Dietas",
    imagen: "https://placehold.co/300x300?text=Frutos+Secos",
    descripcion: "Mezcla de almendras, nueces y castañas, snack energético natural.",
    stock: 25
  },
  {
    id: "ce9b2477-f8c1-4ed6-82c7-5cca5eb7b30f",
    nombre: "Aceite de Coco Orgánico 500ml",
    precio: 7600,
    categoria: "Nutrición y Dietas",
    imagen: "https://placehold.co/300x300?text=Aceite+Coco",
    descripcion: "Aceite prensado en frío, apto para cocinar y como grasa saludable en la dieta.",
    stock: 18
  },
  {
    id: "1ad49c0f-bef9-41f6-a377-79f15fecb500",
    nombre: "Mantequilla de Maní Natural 500g",
    precio: 6400,
    categoria: "Nutrición y Dietas",
    imagen: "https://placehold.co/300x300?text=Mantequilla+Mani",
    descripcion: "100% maní, sin azúcares agregados, fuente de grasas saludables y proteína.",
    stock: 27
  },
  {
    id: "bd1c9523-4d0f-47c4-a013-cfccd6fd27ec",
    nombre: "Snack de Proteína Crujiente 100g",
    precio: 3900,
    categoria: "Nutrición y Dietas",
    imagen: "https://placehold.co/300x300?text=Snack+Proteico",
    descripcion: "Chips horneados con alto contenido de proteína, bajos en grasa.",
    stock: 34
  },
  {
    id: "a0f8618b-b8d1-47ea-8b69-f18cac4e1089",
    nombre: "Té Verde en Saquitos x25",
    precio: 3200,
    categoria: "Nutrición y Dietas",
    imagen: "https://placehold.co/300x300?text=Te+Verde",
    descripcion: "Infusión natural antioxidante, complemento habitual de dietas de definición.",
    stock: 40
  },
  {
    id: "60d8bc92-0bc5-45e5-91f9-014ef30276c9",
    nombre: "Edulcorante Natural Stevia 200g",
    precio: 4100,
    categoria: "Nutrición y Dietas",
    imagen: "https://placehold.co/300x300?text=Stevia",
    descripcion: "Edulcorante natural sin calorías, alternativa al azúcar refinada.",
    stock: 31
  },
  {
    id: "55d39a14-222d-4b70-9d31-981cb2e24a39",
    nombre: "Fibra Dietética en Polvo 300g",
    precio: 6900,
    categoria: "Nutrición y Dietas",
    imagen: "https://placehold.co/300x300?text=Fibra",
    descripcion: "Fibra soluble que ayuda a la digestión y sensación de saciedad.",
    stock: 23
  },
  {
    id: "ce347f87-3d4d-4418-b8ec-98989e3908f6",
    nombre: "Gelatina Proteica sin Azúcar x6",
    precio: 5100,
    categoria: "Nutrición y Dietas",
    imagen: "https://placehold.co/300x300?text=Gelatina+Proteica",
    descripcion: "Postre bajo en calorías con proteína agregada, apto para dietas de control de peso.",
    stock: 28
  },
  {
    id: "06455e27-37d9-4215-a6ee-336b9970da76",
    nombre: "Cápsulas de Chía y Linaza x60",
    precio: 5800,
    categoria: "Nutrición y Dietas",
    imagen: "https://placehold.co/300x300?text=Chia+Linaza",
    descripcion: "Fuente de omega 3 vegetal y fibra, fácil de incorporar a la dieta diaria.",
    stock: 22
  },
  {
    id: "7cc73532-c336-40e7-b5eb-94dda5c1fb81",
    nombre: "Leche en Polvo Deslactosada 400g",
    precio: 7200,
    categoria: "Nutrición y Dietas",
    imagen: "https://placehold.co/300x300?text=Leche+Polvo",
    descripcion: "Leche en polvo sin lactosa, ideal para preparar batidos sin molestias digestivas.",
    stock: 20
  },
  {
    id: "4a8939bc-9e13-4332-99ea-2acc6a17b7dc",
    nombre: "Snack de Frutas Deshidratadas 200g",
    precio: 4600,
    categoria: "Nutrición y Dietas",
    imagen: "https://placehold.co/300x300?text=Frutas+Deshidratadas",
    descripcion: "Mix de frutas deshidratadas sin azúcar agregada, snack natural y práctico.",
    stock: 30
  },
  {
    id: "40f87f9a-2e63-44d3-b7b7-eab6043fef25",
    nombre: "Plan de Comidas Semanal Impreso",
    precio: 3500,
    categoria: "Nutrición y Dietas",
    imagen: "https://placehold.co/300x300?text=Plan+Comidas",
    descripcion: "Guía impresa con planificación de comidas balanceadas para la semana.",
    stock: 50
  },
  {
    id: "aece51e5-06ff-4439-8d1d-46091ccf9377",
    nombre: "Balanza Nutricional Digital",
    precio: 9800,
    categoria: "Nutrición y Dietas",
    imagen: "https://placehold.co/300x300?text=Balanza",
    descripcion: "Balanza de cocina digital para pesar porciones y controlar macronutrientes.",
    stock: 16
  },

  // ===================== SALUD Y BIENESTAR (16) =====================
  {
    id: "78df2b5a-0f1e-4caa-b99e-c9b24b935d4b",
    nombre: "Rodillo de Masaje Manual",
    precio: 6200,
    categoria: "Salud y Bienestar",
    imagen: "https://placehold.co/300x300?text=Rodillo+Masaje",
    descripcion: "Rodillo de madera para masajes de descarga muscular en piernas y espalda.",
    stock: 24
  },
  {
    id: "fac81f6a-8eaa-426d-b66a-8a90263f1af1",
    nombre: "Pelota de Masaje (Lacrosse Ball)",
    precio: 3400,
    categoria: "Salud y Bienestar",
    imagen: "https://placehold.co/300x300?text=Pelota+Masaje",
    descripcion: "Pelota firme para liberar puntos de tensión muscular en zonas específicas.",
    stock: 38
  },
  {
    id: "e55f1ecf-8c8b-4e7d-ad43-5528dff8914b",
    nombre: "Pistola de Masaje (Massage Gun)",
    precio: 48000,
    categoria: "Salud y Bienestar",
    imagen: "https://placehold.co/300x300?text=Massage+Gun",
    descripcion: "Masajeador percutivo con varias intensidades para recuperación muscular profunda.",
    stock: 9
  },
  {
    id: "91d3ebc2-f72a-4c82-a4f9-060995cc0052",
    nombre: "Bálsamo Muscular Relajante 100g",
    precio: 4900,
    categoria: "Salud y Bienestar",
    imagen: "https://placehold.co/300x300?text=Balsamo",
    descripcion: "Crema con mentol y árnica para aliviar dolores musculares post-entreno.",
    stock: 29
  },
  {
    id: "4d982a2d-bea7-43f2-9088-290b5cd1012a",
    nombre: "Parches Térmicos Calor/Frío x2",
    precio: 3100,
    categoria: "Salud y Bienestar",
    imagen: "https://placehold.co/300x300?text=Parches+Termicos",
    descripcion: "Parches reutilizables para aplicar calor o frío en zonas con molestias musculares.",
    stock: 35
  },
  {
    id: "99c961c5-8085-4169-bf1c-d9f6e872e03c",
    nombre: "Cinta Kinesiológica (Kinesiotape)",
    precio: 3800,
    categoria: "Salud y Bienestar",
    imagen: "https://placehold.co/300x300?text=Kinesiotape",
    descripcion: "Cinta elástica adhesiva que brinda soporte muscular y articular sin limitar el movimiento.",
    stock: 33
  },
  {
    id: "461a2256-0bc8-4277-8f89-9d2e27cc2ecf",
    nombre: "Faja de Recuperación Post-Entreno",
    precio: 11500,
    categoria: "Salud y Bienestar",
    imagen: "https://placehold.co/300x300?text=Faja+Recuperacion",
    descripcion: "Faja de compresión que ayuda a reducir la inflamación después de entrenar.",
    stock: 17
  },
  {
    id: "c9cce80a-29fd-4635-a5e9-41eb6516b9ea",
    nombre: "Medias de Compresión para Circulación",
    precio: 8200,
    categoria: "Salud y Bienestar",
    imagen: "https://placehold.co/300x300?text=Medias+Compresion",
    descripcion: "Medias de compresión graduada que mejoran el retorno venoso durante y después del ejercicio.",
    stock: 21
  },
  {
    id: "8b992915-6e7a-41fc-8ccf-9f162f5236fe",
    nombre: "Almohadilla Térmica Eléctrica",
    precio: 15800,
    categoria: "Salud y Bienestar",
    imagen: "https://placehold.co/300x300?text=Almohadilla+Termica",
    descripcion: "Almohadilla con varios niveles de calor para aliviar contracturas y dolores musculares.",
    stock: 12
  },
  {
    id: "d6259bd4-0cda-49e1-873c-0ea04dec4953",
    nombre: "Aceite Esencial para Masajes 100ml",
    precio: 5300,
    categoria: "Salud y Bienestar",
    imagen: "https://placehold.co/300x300?text=Aceite+Esencial",
    descripcion: "Aceite relajante con esencias naturales, ideal para masajes de recuperación.",
    stock: 26
  },
  {
    id: "b28cd4e7-3b4b-4243-9e6e-8b97f9c85e47",
    nombre: "Antifaz para Dormir",
    precio: 2400,
    categoria: "Salud y Bienestar",
    imagen: "https://placehold.co/300x300?text=Antifaz",
    descripcion: "Antifaz acolchado que bloquea la luz para mejorar la calidad del descanso.",
    stock: 45
  },
  {
    id: "50b452fc-855b-45d3-b591-5e2af8c5ac73",
    nombre: "Melatonina x60 comprimidos",
    precio: 7900,
    categoria: "Salud y Bienestar",
    imagen: "https://placehold.co/300x300?text=Melatonina",
    descripcion: "Suplemento que ayuda a regular el ciclo de sueño y favorece el descanso.",
    stock: 19
  },
  {
    id: "c19e4cf7-37f9-46b4-b2d3-a57148719260",
    nombre: "Infusión Relajante Herbal x20",
    precio: 3300,
    categoria: "Salud y Bienestar",
    imagen: "https://placehold.co/300x300?text=Infusion+Relajante",
    descripcion: "Mezcla de hierbas naturales (manzanilla, tilo, valeriana) para relajar antes de dormir.",
    stock: 37
  },
  {
    id: "4b266ef8-174a-4ffe-aab0-7a6ced52229e",
    nombre: "Sales de Baño Relajantes con Epsom 500g",
    precio: 4700,
    categoria: "Salud y Bienestar",
    imagen: "https://placehold.co/300x300?text=Sales+Epsom",
    descripcion: "Sales minerales para baños relajantes que ayudan a aliviar la tensión muscular.",
    stock: 22
  },
  {
    id: "c77c6e1c-bb02-4918-8982-64b2e2361b29",
    nombre: "Difusor de Aromaterapia Portátil",
    precio: 13200,
    categoria: "Salud y Bienestar",
    imagen: "https://placehold.co/300x300?text=Difusor",
    descripcion: "Difusor compacto con aceites esenciales, ideal para relajación después de entrenar.",
    stock: 14
  },
  {
    id: "467cb901-991f-440e-9eb9-01ed8c42b175",
    nombre: "Kit de Primeros Auxilios Deportivo",
    precio: 9600,
    categoria: "Salud y Bienestar",
    imagen: "https://placehold.co/300x300?text=Kit+Primeros+Auxilios",
    descripcion: "Kit compacto con vendas, gasas y antisépticos para lesiones leves durante el entrenamiento.",
    stock: 20
  }
];

export default productos;