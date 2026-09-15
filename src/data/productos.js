const productos = [
  // ===================== SUPLEMENTACIÓN (16) =====================
  {
    id: "e5544c74-27d2-4a60-b640-6d4644c78d27",
    nombre: "Whey Protein Concentrado 1kg",
    precio: 25000,
    categoria: "Suplementación",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/b190f13d-5b91-471a-933f-ac68fef4f800/supplement-01.webp",
    descripcion: "Proteína de suero de leche, sabor chocolate, ideal para recuperación muscular post-entrenamiento.",
    stock: 15
  },
  {
    id: "365372dc-c160-45d1-9aa2-b82970bdfe7f",
    nombre: "BCAA en Polvo 400g",
    precio: 16500,
    categoria: "Suplementación",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/208f658f-d378-42f5-adf3-cf25b7759a07/supplement-03.webp",
    descripcion: "Aminoácidos ramificados, sabor frutilla, ayuda a reducir la fatiga muscular.",
    stock: 18
  },
  {
    id: "a44d78c6-0a67-4f31-904f-f9d82de1f0b1",
    nombre: "Multivitamínico x60 comprimidos",
    precio: 12000,
    categoria: "Suplementación",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/10f7ee2f-03bf-40d8-8b72-8eaaed35ab33/supplement-04.webp",
    descripcion: "Complejo vitamínico completo para complementar la dieta de un deportista.",
    stock: 22
  },
  {
    id: "e97b83c5-f245-4fd3-bd33-0bbb2ab02a40",
    nombre: "Glutamina 300g",
    precio: 14000,
    categoria: "Suplementación",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/a44a9373-c0f5-4df9-bddf-566b9289ad0f/supplement-05.webp",
    descripcion: "Aminoácido que favorece la recuperación muscular y fortalece el sistema inmune.",
    stock: 16
  },
  {
    id: "2e431c80-f520-41cc-866f-023b21640cda",
    nombre: "Proteína Vegana 900g",
    precio: 27000,
    categoria: "Suplementación",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/4ae6b75c-f2ab-4796-9075-2d2c14497efa/supplement-07.webp",
    descripcion: "Mezcla de proteína de arveja y arroz, sabor vainilla, apta para dietas plant-based.",
    stock: 10
  },
  {
    id: "7f6e594b-5e94-48ca-9f1b-475df89cb469",
    nombre: "Caseína Micelar 900g",
    precio: 26500,
    categoria: "Suplementación",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/39631a0c-d548-4e38-a942-1c07a7365ba2/supplement-08.webp",
    descripcion: "Proteína de digestión lenta, ideal para tomar antes de dormir.",
    stock: 11
  },
  {
    id: "ff7b089b-a7f0-42a3-b137-47a509afb6dd",
    nombre: "Omega 3 x90 cápsulas",
    precio: 9800,
    categoria: "Suplementación",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/54d6a832-39f6-4a66-8723-c1f21f74ae63/supplement-09.webp",
    descripcion: "Ácidos grasos esenciales que ayudan a la salud cardiovascular y articular.",
    stock: 24
  },
  {
    id: "f16f7b22-b0c6-42ce-807f-4c89dd5bd2c3",
    nombre: "Barritas Proteicas Caja x12",
    precio: 15000,
    categoria: "Suplementación",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/4b1f1cea-16db-476c-b5a2-af23e3681847/supplement-12.webp",
    descripcion: "Barritas con 20g de proteína cada una, sabor brownie, snack post-entreno.",
    stock: 27
  },
  {
    id: "bfb0722e-982c-4392-b8c8-a010b0b6d93a",
    nombre: "ZMA x90 cápsulas",
    precio: 10500,
    categoria: "Suplementación",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/d335f339-80f8-4296-bc0d-3e643d03de7c/supplement-14.webp",
    descripcion: "Zinc, magnesio y vitamina B6, apoya el descanso y la recuperación nocturna.",
    stock: 21
  },
  // ===================== ENTRENAMIENTO (16) =====================
  {
    id: "eb9c6b1f-a22d-440d-a159-58aa1503a2b6",
    nombre: "Colchoneta de Yoga",
    precio: 9500,
    categoria: "Entrenamiento",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/d99ca386-d7e6-415e-9b4f-ca45592e9c5c/training-01.webp",
    descripcion: "Colchoneta antideslizante de 6mm, ideal para yoga, pilates y ejercicios en el piso.",
    stock: 28
  },
  {
    id: "8bd0ad9d-b3e8-45b7-9960-3407c5a5d400",
    nombre: "Set de Mancuernas Ajustables",
    precio: 45000,
    categoria: "Entrenamiento",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/3035a2b2-82f2-4a88-b0d1-c17774ce304a/training-02.webp",
    descripcion: "Par de mancuernas ajustables de 2 a 20kg cada una, ideales para entrenar en casa.",
    stock: 8
  },
  {
    id: "c4d6950b-bdb8-41d1-bc81-dd8b29011033",
    nombre: "Soga para Saltar (Speed Rope)",
    precio: 5500,
    categoria: "Entrenamiento",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/3bb90fb4-ba47-4900-8bf9-1d4e07a65d73/training-03.webp",
    descripcion: "Soga de velocidad con rulemanes, ideal para cardio y entrenamiento funcional.",
    stock: 35
  },
  {
    id: "850bf144-6090-40a4-92fc-69fdb3a8b5f8",
    nombre: "Bandas de Resistencia (Set x5)",
    precio: 12500,
    categoria: "Entrenamiento",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/5f7e278d-d956-49fd-85f2-c9128c28516e/training-05.webp",
    descripcion: "Set de 5 bandas de distinta resistencia, ideales para entrenamiento funcional.",
    stock: 24
  },
  {
    id: "0ff3a699-1077-4ebc-a899-56996fe514ae",
    nombre: "Barra Olímpica 20kg",
    precio: 65000,
    categoria: "Entrenamiento",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/8b01c21e-b9cc-44a0-9a36-044c9428efaa/training-08.webp",
    descripcion: "Barra de acero de 20kg con rulemanes, soporta hasta 300kg de carga.",
    stock: 5
  },
  {
    id: "7553b6c1-89bf-4cd4-87a6-ec32f96a9f7b",
    nombre: "Step Aeróbico Ajustable",
    precio: 14500,
    categoria: "Entrenamiento",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/38c0583f-3238-49bc-abcc-8f264ea4ecfc/training-10.webp",
    descripcion: "Plataforma ajustable en altura para rutinas de step y cardio.",
    stock: 19
  },
  {
    id: "8a69ee33-ef1d-4a58-8414-35e293022e74",
    nombre: "TRX / Bandas de Suspensión",
    precio: 24500,
    categoria: "Entrenamiento",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/c59658df-12d1-47a3-b8be-96eecdca1ee6/training-12.webp",
    descripcion: "Sistema de entrenamiento en suspensión con anclaje para puerta.",
    stock: 10
  },
  {
    id: "8d5e355f-abe8-4885-a3bf-72f688c41330",
    nombre: "Rodillo de Espuma (Foam Roller)",
    precio: 8200,
    categoria: "Entrenamiento",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/ba18967c-e3df-4a13-ab91-2ee292acc7fe/training-13.webp",
    descripcion: "Rodillo para liberación miofascial y recuperación post-entrenamiento.",
    stock: 22
  },
  {
    id: "13955930-f1be-4cae-b456-9b00691c594f",
    nombre: "Chaleco con Peso 10kg",
    precio: 33000,
    categoria: "Entrenamiento",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/1a0d60a5-df28-4c26-8119-5e5885dba085/training-15.webp",
    descripcion: "Chaleco lastrado ajustable para sumar intensidad a cualquier rutina.",
    stock: 6
  },
  {
    id: "38c2272e-74fb-476a-a50f-7f78f8627d63",
    nombre: "Escalera de Agilidad",
    precio: 9900,
    categoria: "Entrenamiento",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/1a13e4db-e5ff-4d36-ab3f-ac888a982c3b/training-16.webp",
    descripcion: "Escalera plegable para ejercicios de velocidad y coordinación.",
    stock: 20
  },

  // ===================== NUTRICIÓN Y DIETAS (16) =====================
  {
    id: "a3d123a8-7caf-485b-a53d-fb6d37679072",
    nombre: "Batido Sustituto de Comida Vainilla 900g",
    precio: 19500,
    categoria: "Nutrición y Dietas",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/6d4f2cfa-6705-47da-9246-ce0300ad6c2c/nutrition-01.webp",
    descripcion: "Batido balanceado en macronutrientes, ideal para reemplazar una comida en dietas controladas.",
    stock: 14
  },
  {
    id: "e4bb0526-debf-48b0-a8d2-5f68242836a1",
    nombre: "Barritas de Cereal Integral x6",
    precio: 4800,
    categoria: "Nutrición y Dietas",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/78e9406c-1ffd-4c86-b217-91359fe52b14/nutrition-02.webp",
    descripcion: "Barritas de avena y frutos secos, snack saludable entre comidas.",
    stock: 32
  },
  {
    id: "51e67414-0603-4b9f-bb89-8290dc6943c6",
    nombre: "Mix de Frutos Secos 500g",
    precio: 8900,
    categoria: "Nutrición y Dietas",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/fa338302-5232-4ec8-bf93-caa7fc996d1b/nutrition-04.webp",
    descripcion: "Mezcla de almendras, nueces y castañas, snack energético natural.",
    stock: 25
  },
  {
    id: "ce9b2477-f8c1-4ed6-82c7-5cca5eb7b30f",
    nombre: "Aceite de Coco Orgánico 500ml",
    precio: 7600,
    categoria: "Nutrición y Dietas",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/19d633e4-fa68-42ad-9438-70107589b301/nutrition-05.webp",
    descripcion: "Aceite prensado en frío, apto para cocinar y como grasa saludable en la dieta.",
    stock: 18
  },
  {
    id: "1ad49c0f-bef9-41f6-a377-79f15fecb500",
    nombre: "Mantequilla de Maní Natural 500g",
    precio: 6400,
    categoria: "Nutrición y Dietas",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/2e941bad-4cfa-40b8-a7e2-c9a621496329/nutrition-06.webp",
    descripcion: "100% maní, sin azúcares agregados, fuente de grasas saludables y proteína.",
    stock: 27
  },
  {
    id: "a0f8618b-b8d1-47ea-8b69-f18cac4e1089",
    nombre: "Té Verde en Saquitos x25",
    precio: 3200,
    categoria: "Nutrición y Dietas",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/dd79caa8-1834-4ca4-ac6c-4059d2ef61b6/nutrition-08.webp",
    descripcion: "Infusión natural antioxidante, complemento habitual de dietas de definición.",
    stock: 40
  },
  {
    id: "60d8bc92-0bc5-45e5-91f9-014ef30276c9",
    nombre: "Edulcorante Natural Stevia 200g",
    precio: 4100,
    categoria: "Nutrición y Dietas",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/55dd6fa4-46b9-4d91-89c3-f8c5591d6a7e/nutrition-09.webp",
    descripcion: "Edulcorante natural sin calorías, alternativa al azúcar refinada.",
    stock: 31
  },
  {
    id: "06455e27-37d9-4215-a6ee-336b9970da76",
    nombre: "Cápsulas de Chía y Linaza x60",
    precio: 5800,
    categoria: "Nutrición y Dietas",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/dd1d09a7-2f08-4f12-9c32-e02522b16375/nutrition-12.webp",
    descripcion: "Fuente de omega 3 vegetal y fibra, fácil de incorporar a la dieta diaria.",
    stock: 22
  },
  {
    id: "4a8939bc-9e13-4332-99ea-2acc6a17b7dc",
    nombre: "Snack de Frutas Deshidratadas 200g",
    precio: 4600,
    categoria: "Nutrición y Dietas",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/ba0223b5-d4fe-440f-a048-0bc26165f532/nutrition-14.webp",
    descripcion: "Mix de frutas deshidratadas sin azúcar agregada, snack natural y práctico.",
    stock: 30
  },
  {
    id: "aece51e5-06ff-4439-8d1d-46091ccf9377",
    nombre: "Balanza Nutricional Digital",
    precio: 9800,
    categoria: "Nutrición y Dietas",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/1696234a-98c2-4240-a25b-c52a49912abb/nutrition-16.webp",
    descripcion: "Balanza de cocina digital para pesar porciones y controlar macronutrientes.",
    stock: 16
  },

  // ===================== SALUD Y BIENESTAR (16) =====================
  {
    id: "e55f1ecf-8c8b-4e7d-ad43-5528dff8914b",
    nombre: "Pistola de Masaje (Massage Gun)",
    precio: 48000,
    categoria: "Salud y Bienestar",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/7fc99ea9-f813-4cb4-aeae-99f9baeb6f07/wellness-03.webp",
    descripcion: "Masajeador percutivo con varias intensidades para recuperación muscular profunda.",
    stock: 9
  },
  {
    id: "91d3ebc2-f72a-4c82-a4f9-060995cc0052",
    nombre: "Bálsamo Muscular Relajante 100g",
    precio: 4900,
    categoria: "Salud y Bienestar",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/c4ce0fb5-f6be-4b1e-8f18-0d91766bee59/wellness-04.webp",
    descripcion: "Crema con mentol y árnica para aliviar dolores musculares post-entreno.",
    stock: 29
  },
  {
    id: "4d982a2d-bea7-43f2-9088-290b5cd1012a",
    nombre: "Parches Térmicos Calor/Frío x2",
    precio: 3100,
    categoria: "Salud y Bienestar",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/604290f1-e525-46a8-8043-c872a155f76c/wellness-05.webp",
    descripcion: "Parches reutilizables para aplicar calor o frío en zonas con molestias musculares.",
    stock: 35
  },
  {
    id: "99c961c5-8085-4169-bf1c-d9f6e872e03c",
    nombre: "Cinta Kinesiológica (Kinesiotape)",
    precio: 3800,
    categoria: "Salud y Bienestar",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/29121ab7-262b-4e2b-8277-4d743115a91a/wellness-06.webp",
    descripcion: "Cinta elástica adhesiva que brinda soporte muscular y articular sin limitar el movimiento.",
    stock: 33
  },
  {
    id: "c9cce80a-29fd-4635-a5e9-41eb6516b9ea",
    nombre: "Medias de Compresión para Circulación",
    precio: 8200,
    categoria: "Salud y Bienestar",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/82b47e93-efbc-4bb2-88c4-4b58bcbf2b0d/wellness-08.webp",
    descripcion: "Medias de compresión graduada que mejoran el retorno venoso durante y después del ejercicio.",
    stock: 21
  },
  {
    id: "8b992915-6e7a-41fc-8ccf-9f162f5236fe",
    nombre: "Almohadilla Térmica Eléctrica",
    precio: 15800,
    categoria: "Salud y Bienestar",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/db6c380c-bd26-4788-8c2f-312ecc79b3e3/wellness-09.webp",
    descripcion: "Almohadilla con varios niveles de calor para aliviar contracturas y dolores musculares.",
    stock: 12
  },
  {
    id: "d6259bd4-0cda-49e1-873c-0ea04dec4953",
    nombre: "Aceite Esencial para Masajes 100ml",
    precio: 5300,
    categoria: "Salud y Bienestar",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/635bcc65-dfcd-4c05-8010-5f2884c4de05/wellness-10.webp",
    descripcion: "Aceite relajante con esencias naturales, ideal para masajes de recuperación.",
    stock: 26
  },
  {
    id: "b28cd4e7-3b4b-4243-9e6e-8b97f9c85e47",
    nombre: "Antifaz para Dormir",
    precio: 2400,
    categoria: "Salud y Bienestar",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/13f8b40b-fb6a-4cc8-afd6-ad69b7a56e7a/wellness-11.webp",
    descripcion: "Antifaz acolchado que bloquea la luz para mejorar la calidad del descanso.",
    stock: 45
  },
  {
    id: "c19e4cf7-37f9-46b4-b2d3-a57148719260",
    nombre: "Infusión Relajante Herbal x20",
    precio: 3300,
    categoria: "Salud y Bienestar",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/7a18231b-5938-4d6a-9499-7f9bbdedd17a/wellness-13.webp",
    descripcion: "Mezcla de hierbas naturales (manzanilla, tilo, valeriana) para relajar antes de dormir.",
    stock: 37
  },
  {
    id: "c77c6e1c-bb02-4918-8982-64b2e2361b29",
    nombre: "Difusor de Aromaterapia Portátil",
    precio: 13200,
    categoria: "Salud y Bienestar",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/f6139bcc-2916-487b-99ee-3624429b67ef/wellness-15.webp",
    descripcion: "Difusor compacto con aceites esenciales, ideal para relajación después de entrenar.",
    stock: 14
  },
  {
    id: "467cb901-991f-440e-9eb9-01ed8c42b175",
    nombre: "Kit de Primeros Auxilios Deportivo",
    precio: 9600,
    categoria: "Salud y Bienestar",
    imagen: "https://8219baeb-bbe6-4338-bdac-7abe79197836.lovableproject.com/__l5e/assets-v1/0a6772be-c620-49e9-96f3-7c215aa48023/wellness-16.webp",
    descripcion: "Kit compacto con vendas, gasas y antisépticos para lesiones leves durante el entrenamiento.",
    stock: 20
  }
];

export default productos;