// filepath: c:\Users\tanya\Downloads\GSET-Smart-Masks\Smart-mask-tracker\styles\globalStyles.ts
import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    width:"100%",
  },
  header: {
    backgroundColor: "CFEDFF",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "black",
    fontSize: 26,
    fontFamily: "KumbhSans_700Bold",
    alignSelf: "center",
  },
  info: {
    color: "black",
    fontSize: 40,
    fontFamily: "KumbhSans_400Regular",
  },
  infoAlignedRight: {
    color: "black",
    fontSize: 40,
    fontFamily: "KumbhSans_400Regular",
    alignSelf: "end",
  },
  data_box: {
    backgroundColor: "#E1F3FF",
    borderRadius: 10,
    padding: 16,
    elevation: 3,
    flex: 0.48,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    margin: 5,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  fullBox: {
    backgroundColor: "#E1F3FF",
    borderRadius: 10,
    padding: 16,
    marginVertical: 16,
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    alignSelf: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  label: {
    alignSelf: "center",
    fontSize: 18,
    fontFamily: "KumbhSans_700Bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width:"100%",
  },
  small: {
    fontSize: 12,
    fontFamily: "KumbhSans_300Light",
  },
  unit: {
    fontSize: 14,
    fontFamily: "KumbhSans_300Light",
    alignSelf: "center",
  },
  home: {
    fontSize: 14,
    fontFamily: "KumbhSans_300Light",
    alignSelf: "right",
  },
});

export default globalStyles;
