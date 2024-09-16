import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./item.styles";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductToCart } from "../../../redux/cart/cart.slice";

function Item(props) {
  const { data } = props;
  // const cart = useSelector((state) => state.carts.list);
  const dispatch = useDispatch();
  const onDeleteProduct = () => {
    Alert.alert(
      "Xác nhận",
      "Bạn có muốn xoá sản phẩm này không?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        ,
        {
          text: "OK",
          onPress: () => {
            dispatch(deleteProductToCart({ id: data.id }));
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image }} />
      <View style={styles.infoBox}>
        <Text style={styles.productName}>{data.name}</Text>
        <Text style={styles.productPrice}>
          Price: <Text style={styles.highlight}>{data.price}</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.cartButton} onPress={onDeleteProduct}>
        <Ionicons name="trash" size={30} color="#1c7ed6" />
      </TouchableOpacity>
    </View>
  );
}

export default Item;
