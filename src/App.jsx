import { useState } from "react";
import BatchContainer from "./components/BatchContainer";
import "./index.css";
import Batch from "./utils/class/batch.class";
import PDF from "./components/PDF";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

function App() {
  const [currentProduct, setCurrentProduct] = useState();

  const test = new Batch(
    "AUSAL GANADERA 0.5%",
    "123ffff45",
    "50kg",
    `AU SAL GANADERA 0.5%: SAL MINERALIZADA PARA GANADO DE CARNE EN SUS ETAPAS 
    DE LEVANTE Y CEBA. NO SUMINISTRAR EN ZONAS SELENÍFERAS.`,
    `Cloruro de sodio, Carbonato de Calcio, Flor de Azufre, Fosfato Monobicalcico y/o
Bicalcico y/o Tricalcico, Melaza de Caña y/o Glicerol, Óxido de Magnesio y/o Sulfato de
Magnesio, Óxido de Zinc y/o Sulfato de Zinc, Sulfato de Cobre, y/o Cobre Tribasico,
Selenio de Sodio, Yoduro de Potasio, Carbonato de Cobalto.`,
    8
  );
  return (
    <>
      <main className="grid grid-cols-2 h-[100vh] container mx-auto py-4">
        <section>
          <div>
            <h2>Hello from batcher </h2>
          </div>
          <div>
            <PDFDownloadLink
              document={<PDF batch={test} />}
              fileName="myFirstPDF"
            >
              {({ loading, url, error, blob }) =>
                loading ? (
                  <button className="btn">Cargando...</button>
                ) : (
                  <button className="btn">Descargar</button>
                )
              }
            </PDFDownloadLink>
          </div>
        </section>
        <section className="">
          <PDFViewer width="100%" height="100%">
            <PDF batch={test} />
          </PDFViewer>
        </section>
      </main>
    </>
  );
}

export default App;
