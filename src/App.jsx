import BatchContainer from "./components/BatchContainer";
import "./index.css";
import Batch from "./utils/class/batch.class";
import convertHTMLPDF from "./utils/file/convertHTML";

function App() {
  const test = new Batch(
    "AUSAL GANADERA 0.5%",
    "12345",
    "50kg",
    `AU SAL GANADERA 0.5%: SAL MINERALIZADA PARA GANADO DE CARNE EN SUS
ETAPAS DE LEVANTE Y CEBA.
NO SUMINISTRAR EN ZONAS SELENÍFERAS.`,
    `Cloruro de sodio, Carbonato de Calcio, Flor de Azufre, Fosfato Monobicalcico y/o
Bicalcico y/o Tricalcico, Melaza de Caña y/o Glicerol, Óxido de Magnesio y/o Sulfato de
Magnesio, Óxido de Zinc y/o Sulfato de Zinc, Sulfato de Cobre, y/o Cobre Tribasico,
Selenio de Sodio, Yoduro de Potasio, Carbonato de Cobalto.`,
    8
  );
  return (
    <>
      <h1 className="">Lote controller</h1>
      <div className=" pdf-preview" id="pagePdf">
        {Array.from({ length: 6 }).map((_, index) => (
          <BatchContainer key={index} batch={test} />
        ))}
      </div>
      <button
        className=" p-3 bg-red-400 rounded-md"
        onClick={() => {
          convertHTMLPDF("pagePdf", "test.pdf");
        }}
      >
        Convert
      </button>
    </>
  );
}

export default App;
