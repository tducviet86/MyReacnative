import { useState, useContext } from "react";
import { View, Image, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./item.styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../../redux/cart/cart.slice";

function Item(props) {
  const navigation = useNavigation();
  const { data } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.carts.list);
  const onAddCart = () => {
    const productCart = {
      ...data,
      id: data.id,
    };
    dispatch(addProductToCart(productCart));
    alert("Đã thêm sản phẩm thành công");
  };
  const checkIdCart = cart.find((item) => item.id === data.id); //find
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image }} />
      <View style={styles.infoBox}>
        <TouchableOpacity
          onPress={() => navigation.navigate("product-update", { data })}
        >
          <Text style={styles.productName}>{data.name}</Text>
        </TouchableOpacity>
        <Text style={styles.productPrice}>
          Price: <Text style={styles.highlight}>{data.price}</Text>
        </Text>
      </View>
      {!checkIdCart && (
        <TouchableOpacity style={styles.cartButton} onPress={onAddCart}>
          <Ionicons name="arrow-back-circle-sharp" size={32} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Item;
