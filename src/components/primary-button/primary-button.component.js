import { TouchableOpacity, Text } from "react-native";
import styles from "./primary-button.style";

const PrimaryButton = ({ children, onPress }) => (
  <TouchableOpacity style={[styles.container]} onPress={onPress}>
    {typeof children === "string" ? (
      <Text style={styles.text}>{children}</Text>
    ) : (
      children
    )}
  </TouchableOpacity>
);
export default PrimaryButton;
