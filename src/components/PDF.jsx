import {
  Document,
  Page,
  Text,
  Image,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import PropTypes from "prop-types";

import AUCOL from "../assets/AUCOL.png";
import Batch from "../utils/class/batch.class";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    padding: "5px",
    lineHeight: "1.25",
    display: "flex",
  },
  title: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: "12px",
    lineHeight: "0",
  },
  subtitle: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: "10px",
  },
  textBold: {
    fontWeight: "500",
    textAlign: "center",
    fontSize: "10px",
    lineHeight: "0",
  },
  textSmall: {
    fontSize: "6px",
    padding: "0px",
    lineHeight: "1.35",
  },
  section: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  container: {
    display: "flex",
    flex: "1 1 calc(50% - 10px)",
    paddingHorizontal: "4px",
    paddingVertical: "1px",
    border: "1px solid black",
  },
  colContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "0",
    padding: "2px",
  },
});

function PDF({ batch }) {
  // 1. Add null checks and default values
  if (!batch) {
    return (
      <Document>
        <Page>
          <Text>Error: No batch data provided</Text>
        </Page>
      </Document>
    );
  }

  // 2. Destructure with defaults
  const {
    itemName = "Product Name",
    totalWeight = "N/A",
    itemICAId = "N/A",
    indications = "No indications provided",
    ingredients = "No ingredients listed",
    usefulLife = 12, // default 12 months
  } = batch;

  // 3. Date functions (simplified)
  const currentDate = new Date();
  const currentDateFormat = currentDate.toLocaleDateString();
  
  const getFutureDate = (monthsAhead) => {
    const date = new Date();
    date.setMonth(date.getMonth() + monthsAhead);
    return date.toLocaleDateString();
  };

  // 4. Single label component (no nested function)
  const LabelComponent = ({ index }) => (
    <View style={styles.container} key={index}>
      <Text style={styles.title}>{itemName}</Text>
      
      <View style={styles.colContainer}>
        <Text style={styles.textSmall}>Peso Neto al empacar {totalWeight}</Text>
        <Text style={styles.textSmall}>Registro ICA - {itemICAId}</Text>
      </View>

      <View style={styles.colContainer}>
        <Text style={styles.subtitle}>INDICACIONES DEL PRODUCTO</Text>
        <Text style={styles.textBold}>{indications}</Text>
      </View>

      <View style={styles.colContainer}>
        <Text style={styles.subtitle}>INGREDIENTES</Text>
        <Text style={styles.textBold}>{ingredients}</Text>
      </View>

      <View style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: "1px",
      }}>
        <View>
          <Text style={{ fontSize: 10, lineHeight: 1.35 }}>
            F.VENC {getFutureDate(usefulLife)}
          </Text>
          <Text style={{ fontSize: 10, lineHeight: 1.35 }}>
            F.PROD {currentDateFormat}
          </Text>
        </View>
        <View style={{ borderWidth: 2, alignSelf: "flex-end" }}>
          <Text>LOTE {currentDate.getTime()}</Text>
        </View>
      </View>

      <View style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}>
        <View>
          <Text style={styles.textSmall}>
            Fabricado por: Juan Carlos Auza Fernandez
          </Text>
          <Text style={styles.textSmall}>
            Dirección: Calle 2 Sur # 5 A 53 Neiva, Huila
          </Text>
          <Text style={styles.textSmall}>
            E-Mail: alimentosaucol@gmail.com
          </Text>
        </View>
        <Image
          src={AUCOL}
          style={{ width: 75, alignSelf: "flex-end" }}
        />
      </View>
    </View>
  );

  return (
    <Document author="ALIMENTOS_AUCOL" pdfVersion="01">
      <Page size="letter" orientation="portrait" style={styles.page}>
        <View style={styles.section}>
        {Array.from({ length: 6 }).map((_, index) => (
  <LabelComponent key={`label-${index}`} index={index} />
))}
        </View>
      </Page>
    </Document>
  );
}
PDF.propTypes = {
  batch: PropTypes.instanceOf(Batch).isRequired,
};

PDF.defaultProps = {
  batch: null,
};


export default PDF;
