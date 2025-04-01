import { useState } from "react";
import BatchContainer from "./components/BatchContainer";
import "./index.css";
import Batch from "./utils/class/batch.class";
import PDF from "./components/PDF";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Data from "./utils/Data/Data";

function App() {
  const [currentProduct, setCurrentProduct] = useState(Data[0]);

  return (
    <>
      <main className="grid grid-cols-2 h-[100vh] container mx-auto py-4 gap-5">
        <section>
          <div>
            <h2>Gestion de Lotes AUCOL</h2>
            <p className="py-2 text-sm">
              Este es un lugar seguro para empezar a trabajar mejorando la
              productividad de nuestros animales.
            </p>
          </div>
          <div>
            <PDFDownloadLink
              document={<PDF batch={currentProduct.data} />}
              fileName={currentProduct.filename}
            >
              {({ loading, url, error, blob }) =>
                loading ? (
                  <button className="btn-loading">Cargando...</button>
                ) : (
                  <button className="btn">Descargar</button>
                )
              }
            </PDFDownloadLink>
          </div>
        </section>
        <section className="">
          <div className="relative w-full h-full">
            <PDFViewer width="100%" height="100%">
              <PDF batch={currentProduct.data} />
            </PDFViewer>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
