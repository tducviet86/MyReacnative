import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./tab-item.style";

const TabItem = ({ selected, icon, label, onPress }) => (
  <Pressable style={styles.container} onPress={onPress}>
    <Ionicons name={icon} size={30} color={selected ? "#1c7ed6" : "#495057"} />
    <Text
      style={selected ? [styles.label, styles.labelHighlight] : styles.label}
    >
      {label}
    </Text>
  </Pressable>
);
export default TabItem;
