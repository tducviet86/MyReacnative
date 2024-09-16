import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 30,
  },
  contentContainer: {
    paddingBottom: 150,
  },
  avoidingViewContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: "#495057",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 25,
    fontSize: 16,
    borderBottomColor: "#868e96",
    borderBottomWidth: 1,
    height: 50,
  },
  closeButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    position: "absolute",
    top: 35,
    left: 25,
    elevation: 6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    justifyContent: "center",
    alignContent: "center",
  },
});
export default styles;
