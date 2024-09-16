import { Component } from "react";
import { TouchableOpacity } from "react-native";
import styles from "./float-button.styles";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

function FloatButton(props) {
  const { onPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        colors={["#1c7ed6", "#4dabf7"]}
        style={styles.linearContainer}
      >
        <Ionicons name="add" size={40} color={"#fff"} />
      </LinearGradient>
    </TouchableOpacity>
  );
}
/*
class FloatButton extends Component {
  render() {
    const { onPress } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <LinearGradient
          colors={["#1c7ed6", "#4dabf7"]}
          style={styles.linearContainer}
        >
          <Ionicons name="add" size={40} color={"#fff"} />
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
*/
export default FloatButton;
