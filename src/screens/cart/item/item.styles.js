import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 20,
    height: 100,
    gap: 15,
    borderWidth: 1,
    borderColor: "#495057",
    borderRadius: 10,
  },
  image: {
    flex: 1.5,
    resizeMode: "cover",
    borderRadius: 5,
  },
  infoBox: {
    flex: 3,
    gap: 5,
  },
  productName: {
    fontSize: 24,
    fontWeight: "600",
    color: "#343a40",
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "500",
    color: "#37b24d",
  },
  highlight: {
    fontWeight: "700",
  },
  cartButton: {
    justifyContent: "center",
  },
});
export default styles;
