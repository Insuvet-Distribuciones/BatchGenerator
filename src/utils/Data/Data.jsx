import Batch from "../class/batch.class";
const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");

const Data = [
  {
    name: "Ausal Ganadera 0.5%",
    id: "05",
    filename: `AUSAL_GANADERA_05%_${currentDate}`,
    color: "" ,
    data: new Batch(
      "AUSAL GANADERA 0.5%",
      "123ffff45",
      "40kg",
      `AU SAL GANADERA 0.5%: SAL MINERALIZADA PARA GANADO DE CARNE EN SUS ETAPAS 
        DE LEVANTE Y CEBA. NO SUMINISTRAR EN ZONAS SELENÍFERAS.`,
      `Cloruro de sodio, Carbonato de Calcio, Flor de Azufre, Fosfato Monobicalcico y/o
        Bicalcico y/o Tricalcico, Melaza de Caña y/o Glicerol, Óxido de Magnesio y/o Sulfato de
        Magnesio, Óxido de Zinc y/o Sulfato de Zinc, Sulfato de Cobre, y/o Cobre Tribasico,
        Selenio de Sodio, Yoduro de Potasio, Carbonato de Cobalto.`,
      8
    ),
  },
  {
    name: "Ausal Ganadera 8%",
    id: "8",
    filename: `AUSAL_GANADERA_8%_${currentDate}`,
    data: new Batch(
      "AUSAL GANADERA 8%",
      "123ffff45",
      "40kg",
      `AU SAL GANADERA 0.5%: SAL MINERALIZADA PARA GANADO DE CARNE EN SUS ETAPAS 
        DE LEVANTE Y CEBA. NO SUMINISTRAR EN ZONAS SELENÍFERAS.`,
      `Cloruro de sodio, Carbonato de Calcio, Flor de Azufre, Fosfato Monobicalcico y/o
        Bicalcico y/o Tricalcico, Melaza de Caña y/o Glicerol, Óxido de Magnesio y/o Sulfato de
        Magnesio, Óxido de Zinc y/o Sulfato de Zinc, Sulfato de Cobre, y/o Cobre Tribasico,
        Selenio de Sodio, Yoduro de Potasio, Carbonato de Cobalto.`,
      8
    ),
  },
];

export default Data;
