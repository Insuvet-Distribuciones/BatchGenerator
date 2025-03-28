import html2pdf from "html2pdf.js";

const convertHTMLPDF = (id, filename) => {
  const element = document.getElementById(id);
  const options = {
    filename: `${filename}.pdf`,
    image: { type: "jpeg", quality: 1 }, // Mejor calidad para imágenes
    html2canvas: {
      scale: 3, // Mayor resolución
      letterRendering: true,
      useCORS: true, // Para recursos externos
      logging: false, // Desactiva logs en consola
    },
    jsPDF: {
      unit: "in",
      format: "letter", // Usa el nombre estándar (equivale a [8.5, 11])
      orientation: "portrait",
      compress: true, // Comprime el PDF
    },
    pagebreak: {
      mode: ["avoid-all", "css", "legacy"], // Mejor manejo de saltos
    },
  };

  // Mejorar manejo de promesas
  html2pdf()
    .set(options)
    .from(element)
    .save()
    .toPdf()
    .get("pdf")
    .then(function (pdf) {
      const newWindow = window.open(pdf.output("bloburl"), "_blank");
    })
    .catch((err) => console.error("Error al generar PDF:", err));
};

export default convertHTMLPDF;
