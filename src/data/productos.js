// Las imágenes viven en public/productos/ y se referencian por ruta estática.
// Así la URL guardada en localStorage es la misma en dev, build y preview.

const productos = [
  // ===================== SUPLEMENTACIÓN (8) =====================
  {
    id: "e5544c74-27d2-4a60-b640-6d4644c78d27",
    nombre: "Whey Protein Concentrado 1kg",
    precio: 25000,
    categoria: "Suplementación",
    imagen: "/productos/supplement-01.webp",
    descripcion: "Proteína de suero de leche, sabor chocolate, ideal para recuperación muscular post-entrenamiento.",
    stock: 15
  },
  {
    id: "365372dc-c160-45d1-9aa2-b82970bdfe7f",
    nombre: "BCAA en Polvo 400g",
    precio: 16500,
    categoria: "Suplementación",
    imagen: "/productos/supplement-03.webp",
    descripcion: "Aminoácidos ramificados, sabor frutilla, ayuda a reducir la fatiga muscular.",
    stock: 18
  },
  {
    id: "a44d78c6-0a67-4f31-904f-f9d82de1f0b1",
    nombre: "Multivitamínico x60 comprimidos",
    precio: 12000,
    categoria: "Suplementación",
    imagen: "/productos/supplement-04.webp",
    descripcion: "Complejo vitamínico completo para complementar la dieta de un deportista.",
    stock: 22
  },
  {
    id: "e97b83c5-f245-4fd3-bd33-0bbb2ab02a40",
    nombre: "Glutamina 300g",
    precio: 14000,
    categoria: "Suplementación",
    imagen: "/productos/supplement-05.webp",
    descripcion: "Aminoácido que favorece la recuperación muscular y fortalece el sistema inmune.",
    stock: 16
  },
  {
    id: "2e431c80-f520-41cc-866f-023b21640cda",
    nombre: "Proteína Vegana 900g",
    precio: 27000,
    categoria: "Suplementación",
    imagen: "/productos/supplement-07.webp",
    descripcion: "Mezcla de proteína de arveja y arroz, sabor vainilla, apta para dietas plant-based.",
    stock: 10
  },
  {
    id: "7f6e594b-5e94-48ca-9f1b-475df89cb469",
    nombre: "Caseína Micelar 900g",
    precio: 26500,
    categoria: "Suplementación",
    imagen: "/productos/supplement-08.webp",
    descripcion: "Proteína de digestión lenta, ideal para tomar antes de dormir.",
    stock: 11
  },
  {
    id: "f16f7b22-b0c6-42ce-807f-4c89dd5bd2c3",
    nombre: "Barritas Proteicas Caja x12",
    precio: 15000,
    categoria: "Suplementación",
    imagen: "/productos/supplement-12.webp",
    descripcion: "Barritas con 20g de proteína cada una, sabor brownie, snack post-entreno.",
    stock: 27
  },
  {
    id: "bfb0722e-982c-4392-b8c8-a010b0b6d93a",
    nombre: "ZMA x90 cápsulas",
    precio: 10500,
    categoria: "Suplementación",
    imagen: "/productos/supplement-14.webp",
    descripcion: "Zinc, magnesio y vitamina B6, apoya el descanso y la recuperación nocturna.",
    stock: 21
  },

  // ===================== ENTRENAMIENTO (5) =====================
  {
    id: "eb9c6b1f-a22d-440d-a159-58aa1503a2b6",
    nombre: "Colchoneta de Yoga",
    precio: 9500,
    categoria: "Entrenamiento",
    imagen: "/productos/training-01.webp",
    descripcion: "Colchoneta antideslizante de 6mm, ideal para yoga, pilates y ejercicios en el piso.",
    stock: 28
  },
  {
    id: "8bd0ad9d-b3e8-45b7-9960-3407c5a5d400",
    nombre: "Set de Mancuernas Ajustables",
    precio: 45000,
    categoria: "Entrenamiento",
    imagen: "/productos/training-02.webp",
    descripcion: "Par de mancuernas ajustables de 2 a 20kg cada una, ideales para entrenar en casa.",
    stock: 8
  },
  {
    id: "c4d6950b-bdb8-41d1-bc81-dd8b29011033",
    nombre: "Soga para Saltar (Speed Rope)",
    precio: 5500,
    categoria: "Entrenamiento",
    imagen: "/productos/training-03.webp",
    descripcion: "Soga de velocidad con rulemanes, ideal para cardio y entrenamiento funcional.",
    stock: 35
  },
  {
    id: "850bf144-6090-40a4-92fc-69fdb3a8b5f8",
    nombre: "Bandas de Resistencia (Set x5)",
    precio: 12500,
    categoria: "Entrenamiento",
    imagen: "/productos/training-05.webp",
    descripcion: "Set de 5 bandas de distinta resistencia, ideales para entrenamiento funcional.",
    stock: 24
  },
  {
    id: "38c2272e-74fb-476a-a50f-7f78f8627d63",
    nombre: "Escalera de Agilidad",
    precio: 9900,
    categoria: "Entrenamiento",
    imagen: "/productos/training-16.webp",
    descripcion: "Escalera plegable para ejercicios de velocidad y coordinación.",
    stock: 20
  },

  // ===================== NUTRICIÓN Y DIETAS (7) =====================
  {
    id: "e4bb0526-debf-48b0-a8d2-5f68242836a1",
    nombre: "Barritas de Cereal Integral x6",
    precio: 4800,
    categoria: "Nutrición y Dietas",
    imagen: "/productos/nutrition-02.webp",
    descripcion: "Barritas de avena y frutos secos, snack saludable entre comidas.",
    stock: 32
  },
  {
    id: "51e67414-0603-4b9f-bb89-8290dc6943c6",
    nombre: "Mix de Frutos Secos 500g",
    precio: 8900,
    categoria: "Nutrición y Dietas",
    imagen: "/productos/nutrition-04.webp",
    descripcion: "Mezcla de almendras, nueces y castañas, snack energético natural.",
    stock: 25
  },
  {
    id: "ce9b2477-f8c1-4ed6-82c7-5cca5eb7b30f",
    nombre: "Aceite de Coco Orgánico 500ml",
    precio: 7600,
    categoria: "Nutrición y Dietas",
    imagen: "/productos/nutrition-05.webp",
    descripcion: "Aceite prensado en frío, apto para cocinar y como grasa saludable en la dieta.",
    stock: 18
  },
  {
    id: "1ad49c0f-bef9-41f6-a377-79f15fecb500",
    nombre: "Mantequilla de Maní Natural 500g",
    precio: 6400,
    categoria: "Nutrición y Dietas",
    imagen: "/productos/nutrition-06.webp",
    descripcion: "100% maní, sin azúcares agregados, fuente de grasas saludables y proteína.",
    stock: 27
  },
  {
    id: "06455e27-37d9-4215-a6ee-336b9970da76",
    nombre: "Cápsulas de Chía y Linaza x60",
    precio: 5800,
    categoria: "Nutrición y Dietas",
    imagen: "/productos/nutrition-12.webp",
    descripcion: "Fuente de omega 3 vegetal y fibra, fácil de incorporar a la dieta diaria.",
    stock: 22
  },
  {
    id: "4a8939bc-9e13-4332-99ea-2acc6a17b7dc",
    nombre: "Snack de Frutas Deshidratadas 200g",
    precio: 4600,
    categoria: "Nutrición y Dietas",
    imagen: "/productos/nutrition-14.webp",
    descripcion: "Mix de frutas deshidratadas sin azúcar agregada, snack natural y práctico.",
    stock: 30
  },
  {
    id: "aece51e5-06ff-4439-8d1d-46091ccf9377",
    nombre: "Balanza Nutricional Digital",
    precio: 9800,
    categoria: "Nutrición y Dietas",
    imagen: "/productos/nutrition-16.webp",
    descripcion: "Balanza de cocina digital para pesar porciones y controlar macronutrientes.",
    stock: 16
  },

  // ===================== SALUD Y BIENESTAR (6) =====================
  {
    id: "e55f1ecf-8c8b-4e7d-ad43-5528dff8914b",
    nombre: "Pistola de Masaje (Massage Gun)",
    precio: 48000,
    categoria: "Salud y Bienestar",
    imagen: "/productos/wellness-03.webp",
    descripcion: "Masajeador percutivo con varias intensidades para recuperación muscular profunda.",
    stock: 9
  },
  {
    id: "91d3ebc2-f72a-4c82-a4f9-060995cc0052",
    nombre: "Bálsamo Muscular Relajante 100g",
    precio: 4900,
    categoria: "Salud y Bienestar",
    imagen: "/productos/wellness-04.webp",
    descripcion: "Crema con mentol y árnica para aliviar dolores musculares post-entreno.",
    stock: 29
  },
  {
    id: "4d982a2d-bea7-43f2-9088-290b5cd1012a",
    nombre: "Parches Térmicos Calor/Frío x2",
    precio: 3100,
    categoria: "Salud y Bienestar",
    imagen: "/productos/wellness-05.webp",
    descripcion: "Parches reutilizables para aplicar calor o frío en zonas con molestias musculares.",
    stock: 35
  },
  {
    id: "99c961c5-8085-4169-bf1c-d9f6e872e03c",
    nombre: "Cinta Kinesiológica (Kinesiotape)",
    precio: 3800,
    categoria: "Salud y Bienestar",
    imagen: "/productos/wellness-06.webp",
    descripcion: "Cinta elástica adhesiva que brinda soporte muscular y articular sin limitar el movimiento.",
    stock: 33
  },
  {
    id: "8b992915-6e7a-41fc-8ccf-9f162f5236fe",
    nombre: "Almohadilla Térmica Eléctrica",
    precio: 15800,
    categoria: "Salud y Bienestar",
    imagen: "/productos/wellness-09.webp",
    descripcion: "Almohadilla con varios niveles de calor para aliviar contracturas y dolores musculares.",
    stock: 12
  },
  {
    id: "467cb901-991f-440e-9eb9-01ed8c42b175",
    nombre: "Kit de Primeros Auxilios Deportivo",
    precio: 9600,
    categoria: "Salud y Bienestar",
    imagen: "/productos/wellness-16.webp",
    descripcion: "Kit compacto con vendas, gasas y antisépticos para lesiones leves durante el entrenamiento.",
    stock: 20
  }
];

export default productos;