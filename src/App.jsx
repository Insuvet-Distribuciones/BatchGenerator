import { useState } from "react";
import { pdf, PDFViewer } from "@react-pdf/renderer";
import * as FileSaver from "file-saver";
import Data from "./utils/Data/Data";
import ProductSelector from "./components/ProductSelector";
import PDF from "./components/PDF";
import vaca from "./assets/vaca.jpeg";
import "./index.css";

function App() {
  const [currentProduct, setCurrentProduct] = useState(Data[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);

  const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");
console.log(currentDate); // Ejemplo: "20250428"


  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      setError(null);

      // Generate and download PDF
      const blob = await pdf(<PDF batch={currentProduct.data} />).toBlob();

      FileSaver.saveAs(blob, currentProduct.filename);
    } catch (err) {
      console.error("PDF generation failed:", err);
      setError("Failed to generate PDF");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="h-[100vh] container mx-auto py-4 gap-5">
      {/* Left Panel - Controls */}
      <section className=" flex flex-col">
        <div>
          <h2>Gestion de Lotes AUCOL</h2>
          <p className="py-2 text-sm">
            Este es un lugar seguro para empezar a trabajar mejorando la
            productividad de nuestros animales.
          </p>
        </div>

        <div>
          <ProductSelector
            Data={Data}
            Current={currentProduct}
            Select={setCurrentProduct}
          />
        </div>

        <div className="mt-4">
          <button
            onClick={handleDownload}
            disabled={isGenerating}
            className={`btn ${error ? "bg-red-500" : ""}`}
          >
            {isGenerating
              ? "Generando PDF..."
              : error
              ? "Error! Reintentar"
              : "Descargar PDF"}
          </button>
        </div>
      </section>

      {/* Right Panel - PDF Preview (unchanged) */}
      {/* <img src={vaca} alt="VACA" /> */}
    </main>
  );
}

export default App;
