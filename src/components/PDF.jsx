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
  const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  
  const currentDateFormat = new Date()
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "/");

  function getFutureDate(monthsAhead) {
    const date = new Date();
    date.setMonth(date.getMonth() + monthsAhead); // Add X months
    return `${date.getFullYear()}/${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${date.getDate().toString().padStart(2, "0")}`;
  }

  const Component = () => {
    return (
      <>
        {/* CONTAINER  */}
        <View style={styles.container}>
          <Text style={styles.title}>{batch.itemName}</Text>
          <View style={styles.colContainer}>
            <Text style={styles.textSmall}>
              Peso Neto al empacar {batch.totalWeight}
            </Text>
            <Text style={styles.textSmall}>
              Registro ICA - {batch.itemICAId}
            </Text>
          </View>
          <View style={styles.colContainer}>
            <Text style={styles.subtitle}>INDICACIONES DEL PRODUCTO</Text>
            <Text style={styles.textBold}>{batch.indications}</Text>
          </View>
          <View style={styles.colContainer}>
            <Text style={styles.subtitle}>INGREDIENTES</Text>
            <Text style={styles.textBold}>{batch.ingredients}</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: "1px",
              paddingBottom: "1px",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: "10px",
                  padding: "0px",
                  lineHeight: "1.35",
                }}
              >
                F.VENC {getFutureDate(batch.usefulLife)}
              </Text>
              <Text
                style={{
                  fontSize: "10px",
                  padding: "0px",
                  lineHeight: "1.35",
                }}
              >
                F.PROD {currentDateFormat}
              </Text>
            </View>
            <View
              style={{
                border: "2px",
                display: "flex",
                alignSelf: "flex-end",
              }}
            >
              <Text>LOTE {currentDate}</Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
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
              style={{ width: "75px", alignSelf: "flex-end", style: "flex" }}
            />
          </View>
        </View>
        {/* CONTAINER  */}
      </>
    );
  };

  const items = new Array(6).fill(null);
  return (
    <Document>
      <Page size="letter" style={styles.page}>
        <View style={styles.section}>
          {items.map((_, index) => (
            <Component key={index} />
          ))}
        </View>
      </Page>
    </Document>
  );
}

PDF.propTypes = {
  batch: PropTypes.instanceOf(Batch).isRequired,
};

export default PDF;
