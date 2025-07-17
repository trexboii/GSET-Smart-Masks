// filepath: c:\Users\tanya\Downloads\GSET-Smart-Masks\Smart-mask-tracker\styles\globalStyles.ts
import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 10,
  },
  bigDataBox: {
    backgroundColor: "#e1f3ff",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    width: 370,
    marginVertical: 5,
  },
  smallDataBox: {
    backgroundColor: "#e1f3ff",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    width: 175,
    height: 175,
    marginVertical: 5,
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
  label: {
    alignSelf: "center",
    fontSize: 18,
    fontFamily: "KumbhSans_700Bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "100%",
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
  notifis: {
    fontSize: 20,
    fontFamily: "KumbhSans_700Bold",
    alignSelf: "right",
  },
  rowLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  time: {
    fontSize: 13,
    fontFamily: "KumbhSans_300Light",
  },
  map: {
    width: "100%",
    height: 250, // or whatever height you want
    borderRadius: 10,
    marginTop: 10,
  },
});

export default globalStyles;
