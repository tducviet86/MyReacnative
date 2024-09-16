import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    shadowColor: "#212529",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    elevation: 6,
    position: "absolute",
    bottom: 25,
    right: 25,
  },
  linearContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
});

export default styles;
