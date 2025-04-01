import Batch from "../class/batch.class";
const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");

const Data = [
  {
    name: "Ausal Ganadera 0.5%",
    id: "05",
    filename: `AUSAL_GANADERA_05%_${currentDate}`,
    data: new Batch(
      "AUSAL GANADERA 0.5%",
      "22898SL",
      "40kg",
      `AU SAL GANADERA 0.5%: SAL MINERALIZADA PARA GANADO DE CARNE EN SUS ETAPAS DE LEVANTE Y CEBA. NO SUMINISTRAR EN ZONAS SELENÍFERAS.`,
      `Cloruro de sodio, Carbonato de Calcio, Flor de Azufre, Fosfato Monobicalcico y/o Bicalcico y/o Tricalcico, Melaza de Caña y/o Glicerol, Óxido de Magnesio y/o Sulfato de Magnesio, Óxido de Zinc y/o Sulfato de Zinc, Sulfato de Cobre, y/o Cobre Tribasico, Selenio de Sodio, Yoduro de Potasio, Carbonato de Cobalto.`,
      8
    ),
  },
  {
    name: "Ausal Ganadera 8%",
    id: "8",
    filename: `AUSAL_GANADERA_8%_${currentDate}`,
    data: new Batch(
      "AUSAL GANADERA 8%",
      "22899SL",
      "40kg",
      `AU SAL GANADERA 8%: SAL MINERALIZADA PARA VACAS DE CRÍA Y DE PRODUCCIÓN DE LECHE, CON PROMEDIOS ENTRE 12 A 22 LITROS DE LECHE POR DÍA. NO SUMINISTRAR EN ZONAS SELENÍFERAS.`,
      `Cloruro de sodio, Carbonato de Calcio, Flor de Azufre, Fosfato Monobicalcico y/o Bicalcico y/o Tricalcico, Melaza de Caña y/o Glicerol, Óxido de Magnesio y/o Sulfato de Magnesio, Óxido de Zinc y/o Sulfato de Zinc, Sulfato de Cobre, y/o Cobre Tribasico, Selenio de Sodio, Yoduro de Potasio, Carbonato de Cobalto.`,
      8
    ),
  },
  {
    name: "Ausal Ganadera 12%",
    id: "12",
    filename: `AUSAL_GANADERA_12%_${currentDate}`,
    data: new Batch(
      "AUSAL GANADERA 12%",
      "23071SL",
      "40kg",
      `AU SAL GANADERA 12%: SAL MINERALIZADA PARA VACAS DE PRODUCCIÓN DE LECHE Y DOBLE PROPÓSITO, CON PROMEDIOS ENTRE 14 A 24 LITROS LECHE DÍA. NO SUMINISTRAR EN ZONAS SELENIFERAS.`,
      `Cloruro de sodio, Carbonato de Calcio, Flor de Azufre, Fosfato Monobicalcico y/o Bicalcico y/o Tricalcico, Melaza de Caña y/o Glicerol, Óxido de Magnesio y/o Sulfato de Magnesio, Óxido de Zinc y/o Sulfato de Zinc, Sulfato de Cobre, y/o Cobre Tribasico, Selenio de Sodio, Yoduro de Potasio, Carbonato de Cobalto.`,
      8
    ),
  },
  {
    name: "Augan Vita Leche",
    id: "VITA",
    filename: `AUGAN_VITA_LECHE_${currentDate}`,
    data: new Batch(
      "AUGAN VITA LECHE",
      "23076SL",
      "40kg",
      `SUPLEMENTO ALIMENTICIO PARA VACAS DE LECHE Y DOBLE PROPÓSITO CON PRODUCCIONES DE 10 A 14 LITROS DIARIOS, UBICADAS EN ZONAS POR DEBAJO DE LOS 1200 METROS SOBRE EL NIVEL DEL MAR.`,
      `Maíz y/o Sorgo, Harina de Arroz y/o Salvado de Maíz y/o Mogolla de Trigo, Gluten de Maíz y/o Torta de Soya y/o Destilado de Maíz, Torta de Palmiste y/o Semilla de Algodón, Cascarilla de Soya y/o Cascarilla de Café, Melaza y/o Glicerol, Carbonato de Calcio, Urea, Cloruro de Sodio, Fosfato Monodicálcico y/o Bicálcico y/o Tricálcico, Flor de Azufre, Óxido de Magnesio, Óxido de Zinc, Sulfato de Cobre, Carbonato de Cobalto y Yoduro de Potasio.`,
      12
    ),
  },
  {
    name: "Augan Eco Leche",
    id: "ECO",
    filename: `AUGAN_ECO_LECHE_${currentDate}`,
    data: new Batch(
      "AUGAN ECO LECHE",
      "23521SL",
      "40kg",
      `SUPLEMENTO ALIMENTICIO PARA VACAS DE LECHE Y DOBLE PROPÓSITO CON PRODUCCIONES DE 6 A 12 LITROS DIARIOS, UBICADAS EN ZONAS POR DEBAJO DE LOS 1200 METROS SOBRE EL NIVEL DEL MAR.`,
      `Maíz y/o Sorgo, Harina de Arroz y/o Salvado de Maíz y/o Mogolla de Trigo, Gluten de Maíz y/o Torta de Soya y/o Destilado de Maíz, Torta de Palmiste y/o Semilla de Algodón, Cascarilla de Soya y/o Cascarilla de Café, Melaza y/o Glicerol, Carbonato de Calcio, Urea, Cloruro de Sodio, Fosfato Monodicálcico y/o Bicálcico y/o Tricálcico, Flor de Azufre, Óxido de Magnesio, Óxido de Zinc, Sulfato de Cobre, Carbonato de Cobalto y Yoduro de Potasio.`,
      12
    ),
  },
];

export default Data;
